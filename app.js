import { ZONES, BOTTOM_DEPTH } from "./ocean-config.js";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const format = (value) => Math.round(value).toLocaleString("en-US");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const creatureCount = $$(".encounter").length;

// Reveal a photograph after decoding it, so a quick scroll never presents a
// fully revealed but still unpainted image frame.
$$(".animal-photo").forEach((image) => {
  const ready = () =>
    image
      .decode()
      .then(() =>
        image.closest(".creature-figure").classList.add("image-ready"),
      )
      .catch(() => {});
  if (image.complete && image.naturalWidth) ready();
  else image.addEventListener("load", ready, { once: true });
});

const figures = $$(".creature-figure");
figures.forEach((figure) => {
  let pointerFrame = 0;
  const art = figure.querySelector(".animal-art");
  figure.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || event.pointerType === "touch" || pointerFrame)
      return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const bounds = figure.getBoundingClientRect();
      const x = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
      );
      const y = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      );
      art.style.setProperty("--look-x", `${x * 12}px`);
      art.style.setProperty("--look-y", `${y * 8}px`);
      art.style.setProperty("--look-tilt", `${x * 2}deg`);
    });
  });
  figure.addEventListener("pointerleave", () => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    art.style.removeProperty("--look-x");
    art.style.removeProperty("--look-y");
    art.style.removeProperty("--look-tilt");
  });
  const celebrate = () => {
    figure.classList.remove("is-curious");
    void figure.offsetWidth;
    figure.classList.add("is-curious");
  };
  figure.addEventListener("click", celebrate);
  figure.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      celebrate();
    }
  });
});

// The atmosphere changes continuously with depth, rather than sitting on a
// nearly uniform blue section background. Each pair is top/bottom RGB.
const WATER_STOPS = [
  [0, [75, 182, 183], [26, 132, 158]],
  [10, [44, 155, 148], [14, 107, 126]],
  [30, [24, 120, 106], [9, 74, 89]],
  [80, [19, 82, 104], [7, 46, 73]],
  [200, [35, 51, 92], [17, 30, 65]],
  [600, [35, 24, 65], [15, 13, 39]],
  [1000, [17, 19, 44], [4, 9, 23]],
  [2200, [7, 13, 28], [1, 5, 13]],
  [4000, [17, 13, 32], [4, 4, 13]],
  [6000, [10, 15, 26], [2, 4, 9]],
  [BOTTOM_DEPTH, [5, 19, 23], [1, 3, 5]],
];
let landmarks = [],
  zones = [],
  creatureStops = [],
  activeScenes = new Set();
let frame = 0,
  geometryFrame = 0,
  lastDepth = -1,
  lastCreature = 0,
  lastZone = -1,
  lastTick = -1,
  arrivalTimer;
const environment = $("#ocean-environment");
let bottomTop = 0,
  sourceTop = 0,
  surfaceHeight = 0;
function measureOcean() {
  geometryFrame = 0;
  const offset = scrollY;
  landmarks = $$("[data-depth]")
    .map((element) => {
      const bounds = element.getBoundingClientRect();
      return {
        depth: Number(element.dataset.depth),
        top: bounds.top + offset + bounds.height / 2,
        element,
      };
    })
    .sort((a, b) => a.top - b.top);
  zones = ZONES.map((zone) => ({
    ...zone,
    top: document.getElementById(zone.id).getBoundingClientRect().top + offset,
  }));
  creatureStops = landmarks.filter((point) =>
    point.element.classList.contains("encounter"),
  );
  bottomTop = $("#deepest").getBoundingClientRect().top + offset;
  sourceTop = $("#sources").getBoundingClientRect().top + offset;
  surfaceHeight = $("#surface").offsetHeight;
  updateOcean();
}
function floorIndex(list, position) {
  let low = 0,
    high = list.length - 1;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (list[mid].top <= position) low = mid;
    else high = mid - 1;
  }
  return low;
}
function waterColor(depth) {
  document.body.classList.toggle("shallow-water", depth < 15);
  let i = 0;
  while (i < WATER_STOPS.length - 2 && depth > WATER_STOPS[i + 1][0]) i++;
  const a = WATER_STOPS[i],
    b = WATER_STOPS[i + 1],
    ratio = Math.max(0, Math.min(1, (depth - a[0]) / (b[0] - a[0])));
  const mix = (from, to) =>
    `rgb(${from.map((value, k) => Math.round(value + (to[k] - value) * ratio)).join(" ")})`;
  environment.style.setProperty("--sea-top", mix(a[1], b[1]));
  environment.style.setProperty("--sea-bottom", mix(a[2], b[2]));
  environment.style.setProperty(
    "--sunlight",
    Math.max(0, 1 - depth / 300).toFixed(3),
  );
  environment.style.setProperty(
    "--kelp",
    Math.max(0, 1 - depth / 190).toFixed(3),
  );
  environment.style.setProperty("--snow", Math.min(1, depth / 1200).toFixed(3));
  environment.style.setProperty(
    "--floor",
    depth > 3000 && depth < 6000
      ? Math.min(1, (depth - 3000) / 1200).toFixed(3)
      : "0",
  );
  environment.style.setProperty(
    "--trench",
    Math.max(0, Math.min(1, (depth - 6000) / 2300)).toFixed(3),
  );
}
function updateOcean() {
  frame = 0;
  if (!landmarks.length) return;
  const center = scrollY + innerHeight / 2;
  const i = floorIndex(landmarks, center),
    a = landmarks[i],
    b = landmarks[Math.min(i + 1, landmarks.length - 1)];
  const blend =
    b.top > a.top
      ? Math.max(0, Math.min(1, (center - a.top) / (b.top - a.top)))
      : 0;
  let depth = Math.round(a.depth + (b.depth - a.depth) * blend);
  // Browser scroll offsets are rounded to CSS pixels. At a large depth gap,
  // half a pixel can otherwise put the centered specimen several meters off.
  if (Math.abs(center - a.top) <= 2) depth = Math.round(a.depth);
  else if (Math.abs(center - b.top) <= 2) depth = Math.round(b.depth);
  if (center < zones[0].top) depth = 0;
  if (center >= bottomTop) depth = BOTTOM_DEPTH;
  depth = Math.max(0, Math.min(BOTTOM_DEPTH, depth));
  const zoneIndex = Math.max(
    0,
    zones.findLastIndex((zone) => center >= zone.top),
  );
  if (depth !== lastDepth) {
    lastDepth = depth;
    $("#live-depth").textContent = format(depth);
    waterColor(depth);
    const zone = ZONES[zoneIndex];
    const zoneProgress = Math.max(
      0,
      Math.min(1, (depth - zone.min) / (zone.max - zone.min)),
    );
    $("#depth-progress").style.height =
      `${((zoneIndex + zoneProgress) / 5) * 100}%`;
    $("#live-zone").textContent =
      depth === 0
        ? "AT THE SURFACE"
        : depth === BOTTOM_DEPTH
          ? "CHALLENGER DEEP"
          : zone.name.toUpperCase();
  }
  if (zoneIndex !== lastZone) {
    const previous = lastZone;
    lastZone = zoneIndex;
    if (zoneIndex < previous) {
      clearTimeout(arrivalTimer);
      $("#zone-arrival").classList.remove("show");
    }
    if (previous >= 0 && zoneIndex > previous) {
      clearTimeout(arrivalTimer);
      $("#zone-arrival").textContent = ZONES[zoneIndex].name;
      $("#zone-arrival").classList.add("show");
      arrivalTimer = setTimeout(
        () => $("#zone-arrival").classList.remove("show"),
        2200,
      );
    }
  }
  const activeTick = depth === BOTTOM_DEPTH ? 5 : zoneIndex;
  if (activeTick !== lastTick) {
    lastTick = activeTick;
    $$(".depth-ruler>span").forEach((tick, n) =>
      tick.classList.toggle("active", n === activeTick),
    );
  }
  const nearestIndex = floorIndex(creatureStops, center);
  const seen = center >= creatureStops[0].top ? nearestIndex + 1 : 0;
  if (seen !== lastCreature) {
    lastCreature = seen;
    $("#discovery-position").textContent = seen
      ? `${seen} / ${creatureCount} creatures`
      : `${creatureCount} creatures below`;
    $("#encounter-progress-fill").style.width =
      `${(seen / creatureCount) * 100}%`;
    $(".depth-readout").classList.remove("depth-hit");
    void $(".depth-readout").offsetWidth;
    $(".depth-readout").classList.add("depth-hit");
  }
  document.body.classList.toggle(
    "below-surface",
    scrollY > surfaceHeight * 0.35,
  );
  document.body.classList.toggle(
    "at-sources",
    scrollY + innerHeight * 0.65 > sourceTop,
  );
  if (!reducedMotion.matches) {
    environment.style.setProperty("--water-travel", `${-scrollY * 0.13}px`);
    $("#surface").style.setProperty(
      "--dive",
      String(Math.min(1, scrollY / surfaceHeight)),
    );
    activeScenes.forEach((scene) => {
      const point = scene._oceanPoint;
      if (!point) return;
      const distance = Math.max(
        -1.5,
        Math.min(1.5, (point.top - center) / innerHeight),
      );
      scene.style.setProperty("--travel-y", `${distance * 25}px`);
      scene.style.setProperty(
        "--travel-x",
        `${distance * (scene.classList.contains("right") ? -22 : 22)}px`,
      );
      scene.style.setProperty("--travel-tilt", `${distance * 1.7}deg`);
    });
  }
}
function scheduleGeometry() {
  if (!geometryFrame)
    geometryFrame = requestAnimationFrame(() => {
      measureOcean();
      for (const point of creatureStops) point.element._oceanPoint = point;
    });
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeScenes.add(entry.target);
        entry.target.classList.add("is-seen", "in-view");
      } else {
        activeScenes.delete(entry.target);
        entry.target.classList.remove("in-view");
      }
    });
    if (!frame) frame = requestAnimationFrame(updateOcean);
  },
  { rootMargin: "120px" },
);
$$(".encounter,.story-beat").forEach((scene) => observer.observe(scene));
addEventListener(
  "scroll",
  () => {
    if (!frame) frame = requestAnimationFrame(updateOcean);
  },
  { passive: true },
);
addEventListener("resize", scheduleGeometry, { passive: true });
new ResizeObserver(scheduleGeometry).observe(document.querySelector("main"));
document.fonts.ready.then(scheduleGeometry);
$$("img").forEach((image) =>
  image.addEventListener("load", scheduleGeometry, { once: true }),
);
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) {
    $("#surface").style.setProperty("--dive", "0");
    $$(".encounter").forEach((scene) => {
      scene.style.removeProperty("--travel-y");
      scene.style.removeProperty("--travel-x");
      scene.style.removeProperty("--travel-tilt");
    });
  }
  scheduleGeometry();
});
document.documentElement.classList.add("has-js");
measureOcean();
for (const point of creatureStops) point.element._oceanPoint = point;
