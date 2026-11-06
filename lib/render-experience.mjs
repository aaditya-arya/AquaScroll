import {
  CREATURES,
  STORY_BEATS,
  ZONES,
  SOURCE_GROUPS,
} from "../creature-catalog.js";
import { ANIMAL_IMAGES } from "../animal-images.js";
import { animalArt, storyArt } from "../ocean-art.js";
export function renderExperience() {
  const slots = {};
  const $ = (selector) => (slots[selector] ||= {});
  const escapeHTML = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const factHTML = (text) =>
    escapeHTML(text).replace(/\|([^|]+)\|/g, "<em>$1</em>");
  const plainFact = (text) => text.replaceAll("|", "");
  const format = (value) => Math.round(value).toLocaleString("en-US");

  let index = 0;

  function animalScene(animal) {
    const number = ++index;
    const side =
      number % 5 === 0 ? "center" : number % 2 === 0 ? "right" : "left";
    const photo = ANIMAL_IMAGES[animal.key];
    const visual = photo
      ? `<img class="animal-photo" src="${photo.src}" alt="${escapeHTML(animal.name)}" width="${photo.width}" height="${photo.height}" loading="${number <= 3 ? "eager" : "lazy"}" decoding="async">`
      : animalArt(animal.family);
    return `<article class="encounter ${side} animal-${animal.key}" id="animal-${animal.key}" data-depth="${animal.depth}" data-creature-index="${number}" style="--animal-color:${animal.color}" aria-labelledby="fact-${animal.key}"><div class="encounter-inner"><figure class="creature-figure ${photo ? "has-photo" : "has-illustration"}" tabindex="0" aria-label="${escapeHTML(animal.name)}. ${escapeHTML(plainFact(animal.fact))}"><div class="animal-water"><div class="animal-art">${visual}</div><span class="discovery-ring" aria-hidden="true"></span></div><figcaption>${escapeHTML(animal.name)}</figcaption></figure><div class="creature-fact"><span class="encounter-depth">${format(animal.depth)}<span>m</span></span><h3 class="super-fact" id="fact-${animal.key}">${factHTML(animal.fact)}</h3></div></div></article>`;
  }
  function storyScene(beat) {
    return `<article class="story-beat ${beat.visual ? "has-story-art" : ""}" data-depth="${beat.depth}" id="story-${beat.key}"><span class="story-depth">${format(beat.depth)} m</span>${beat.visual ? `<div class="story-art" aria-hidden="true">${storyArt(beat.visual)}</div>` : ""}<h3 class="super-fact">${factHTML(beat.fact)}</h3></article>`;
  }
  $("#ocean-zones").innerHTML = ZONES.map((zone, i) => {
    const items = [
      ...CREATURES.filter(
        (animal) => animal.depth >= zone.min && animal.depth < zone.max,
      ).map((data) => ({ type: "animal", data })),
      ...STORY_BEATS.filter(
        (beat) => beat.depth >= zone.min && beat.depth < zone.max,
      ).map((data) => ({ type: "story", data })),
    ].sort((a, b) => a.data.depth - b.data.depth);
    return `<section class="ocean-zone" id="${zone.id}" data-zone-index="${i}" aria-labelledby="${zone.id}-title"><div class="zone-boundary" data-depth="${zone.min}"><span></span><h2 id="${zone.id}-title">${zone.name}<small>${format(zone.min)}–${format(zone.max)} m</small></h2><span></span></div>${items.map((item) => (item.type === "animal" ? animalScene(item.data) : storyScene(item.data))).join("")}</section>`;
  }).join("");

  $("#source-links").innerHTML = [
    ...SOURCE_GROUPS,
    {
      name: "Scuba dive record · Guinness World Records",
      url: "https://www.guinnessworldrecords.com/news/2014/9/ahmed-gabr-breaks-record-for-deepest-scuba-dive-at-more-than-1000-feet-60537",
    },
    {
      name: "Mount Everest · Royal Geographical Society",
      url: "https://www.rgs.org/schools/resources-for-schools/mountains-volcanoes-and-earthquakes/mount-everest",
    },
  ]
    .map(
      (source) =>
        `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.name)} ↗</a>`,
    )
    .join("");
  $("#species-references").innerHTML = CREATURES.map(
    (animal) =>
      `<a href="${animal.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(animal.name)} ↗</a>`,
  ).join("");
  $("#photo-credits").innerHTML = CREATURES.filter(
    (animal) => ANIMAL_IMAGES[animal.key],
  )
    .map((animal) => {
      const image = ANIMAL_IMAGES[animal.key];
      return `<p><a href="${image.pageUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(animal.name)}</a> — ${escapeHTML(image.artist)} · <a href="${escapeHTML(image.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(image.license)}</a>. Displayed with a CSS edge mask; original file linked.</p>`;
    })
    .join("");

  return Object.fromEntries(
    Object.entries(slots).map(([key, value]) => [key, value.innerHTML]),
  );
}
