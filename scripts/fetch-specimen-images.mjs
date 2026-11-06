// Optional preparation command. No network requests are made by the website.
// Fetch Commons-hosted, openly licensed specimen images and their attribution.
import fs from "node:fs/promises";
import path from "node:path";
import { CREATURES } from "../creature-catalog.js";
const root = path.resolve(import.meta.dirname, "..");
const target = path.join(root, "assets", "animals");
await fs.mkdir(target, { recursive: true });
await fs.mkdir(path.join(root, ".preview"), { recursive: true });
const headers = {
  "User-Agent":
    "AquaScroll/3.0 (educational ocean field guide; local asset preparation)",
};
async function json(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(30000),
    });
    if (response.status === 429) {
      const seconds = Math.min(
        30,
        Math.max(8, Number(response.headers.get("retry-after")) || 8),
      );
      console.log(
        `Image service rate limit; respecting ${seconds}s retry delay.`,
      );
      await response.body.cancel();
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      continue;
    }
    if (!response.ok) throw new Error(`${response.status}: ${url}`);
    return response.json();
  }
  throw new Error(
    "Image service remains rate limited; saved progress can be resumed.",
  );
}
const clean = (text) =>
  String(text || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
const articles = new Map();
try {
  const previous = JSON.parse(
    await fs.readFile(
      path.join(root, ".preview", "animal-research.json"),
      "utf8",
    ),
  );
  for (const [key, page] of Object.entries(previous))
    articles.set(key, { ...page, pageimage: page.image });
} catch {}
const needed = CREATURES.filter((animal) => !articles.has(animal.key));
for (let i = 0; i < needed.length; i += 12) {
  const titles = needed
    .slice(i, i + 12)
    .map((a) => a.wiki)
    .join("|");
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    redirects: "1",
    prop: "pageimages|extracts",
    piprop: "thumbnail|name",
    pithumbsize: "640",
    exintro: "1",
    explaintext: "1",
    exlimit: "max",
    exchars: "5000",
    titles,
  });
  const result = await json(`https://en.wikipedia.org/w/api.php?${params}`);
  const redirects = new Map(
    [...(result.query.normalized || []), ...(result.query.redirects || [])].map(
      (x) => [x.from, x.to],
    ),
  );
  for (const animal of needed.slice(i, i + 12)) {
    let title = animal.wiki;
    let attempts = 0;
    while (redirects.has(title) && attempts++ < 5) title = redirects.get(title);
    const page = Object.values(result.query.pages).find(
      (p) => p.title === title,
    );
    if (page) articles.set(animal.key, page);
  }
  console.log(
    `Articles: ${Math.min(i + 12, CREATURES.length)}/${CREATURES.length}`,
  );
}
await fs.writeFile(
  path.join(root, ".preview", "animal-research.json"),
  JSON.stringify(
    Object.fromEntries(
      [...articles].map(([key, page]) => [
        key,
        { title: page.title, extract: page.extract, image: page.pageimage },
      ]),
    ),
    null,
    2,
  ),
);
const files = [
  ...new Set(
    [...articles.values()]
      .filter((p) => p.pageimage)
      .map((p) => `File:${p.pageimage}`),
  ),
];
const infos = new Map();
const normalizeName = (name) => String(name || "").replaceAll("_", " ");
try {
  for (const [name, info] of Object.entries(
    JSON.parse(
      await fs.readFile(path.join(root, ".preview", "image-info.json"), "utf8"),
    ),
  ))
    infos.set(name, info);
} catch {}
const neededFiles = files.filter(
  (name) => !infos.has(normalizeName(name.slice(5))),
);
for (let i = 0; i < neededFiles.length; i += 10) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "640",
    titles: neededFiles.slice(i, i + 10).join("|"),
  });
  const result = await json(`https://en.wikipedia.org/w/api.php?${params}`);
  for (const page of Object.values(result.query.pages))
    if (page.imageinfo?.[0]) infos.set(page.title.slice(5), page.imageinfo[0]);
  await fs.writeFile(
    path.join(root, ".preview", "image-info.json"),
    JSON.stringify(Object.fromEntries(infos), null, 2),
  );
  console.log(`Image credits: ${infos.size}/${files.length}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
await fs.writeFile(
  path.join(root, ".preview", "image-info.json"),
  JSON.stringify(Object.fromEntries(infos), null, 2),
);
let next = 0;
let images = {};
try {
  images = JSON.parse(
    await fs.readFile(path.join(root, "assets", "animal-images.json"), "utf8"),
  );
} catch {}
await Promise.all(
  Array.from({ length: 1 }, async () => {
    while (next < CREATURES.length) {
      const animal = CREATURES[next++],
        page = articles.get(animal.key),
        info = infos.get(normalizeName(page?.pageimage));
      if (images[animal.key]) continue;
      if (!info?.thumburl) {
        console.log("NO IMAGE", animal.key, page?.pageimage);
        continue;
      }
      const meta = info.extmetadata || {},
        license = clean(meta.LicenseShortName?.value);
      if (!/CC BY|CC0|Public domain|PDM/i.test(license)) {
        console.log("LICENSE SKIP", animal.key, license);
        continue;
      }
      try {
        const url = new URL(info.thumburl);
        url.search = "";
        let response;
        for (let attempt = 0; attempt < 3; attempt++) {
          response = await fetch(url, {
            headers,
            signal: AbortSignal.timeout(30000),
          });
          if (response.status !== 429) break;
          const seconds = Math.min(
            30,
            Math.max(10, Number(response.headers.get("retry-after")) || 15),
          );
          console.log(
            `Thumbnail rate limit for ${animal.key}; waiting ${seconds}s.`,
          );
          await response.body.cancel();
          await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
        }
        if (!response.ok) throw new Error(String(response.status));
        const type = response.headers.get("content-type") || "";
        const ext = type.includes("png")
          ? "png"
          : type.includes("webp")
            ? "webp"
            : type.includes("svg")
              ? "svg"
              : "jpg";
        const filename = `${animal.key}.${ext}`;
        await fs.writeFile(
          path.join(target, filename),
          Buffer.from(await response.arrayBuffer()),
        );
        images[animal.key] = {
          src: `assets/animals/${filename}`,
          width: info.thumbwidth,
          height: info.thumbheight,
          artist: clean(meta.Artist?.value) || "Creator not listed in file metadata",
          license,
          licenseUrl:
            meta.LicenseUrl?.value ||
            "https://commons.wikimedia.org/wiki/Commons:Licensing",
          pageUrl: info.descriptionurl,
          title: clean(meta.ObjectName?.value) || animal.name,
        };
        await fs.writeFile(
          path.join(root, "assets", "animal-images.json"),
          JSON.stringify(images, null, 2),
        );
        console.log("Image ready:", animal.key);
      } catch (error) {
        console.log("DOWNLOAD SKIP", animal.key, error.message);
      }
      await new Promise((resolve) => setTimeout(resolve, 1100));
    }
  }),
);
await fs.writeFile(
  path.join(root, "assets", "animal-images.json"),
  JSON.stringify(images, null, 2),
);
await fs.writeFile(
  path.join(root, "animal-images.js"),
  `// Generated local image inventory; attribution is displayed in the footer.\nexport const ANIMAL_IMAGES = ${JSON.stringify(images, null, 2)};\n`,
);
console.log(
  `Downloaded ${Object.keys(images).length}/${CREATURES.length} openly licensed images.`,
);
