import { readFile, writeFile, mkdir, cp } from "node:fs/promises";
import { resolve, dirname, relative, isAbsolute } from "node:path";
import { pathToFileURL } from "node:url";
import { renderExperience } from "../lib/render-experience.mjs";
import { ZONES, BOTTOM_DEPTH } from "../creature-catalog.js";
import { ANIMAL_IMAGES } from "../animal-images.js";
import { GUIDES, UPDATED } from "../content/guides.mjs";

export const ROOT = resolve(import.meta.dirname, "..");
const config = JSON.parse(
  await readFile(resolve(ROOT, "site.config.json"), "utf8"),
);
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const json = (data) => JSON.stringify(data).replaceAll("<", "\\u003c");
const urlFor = (slug) => (slug ? `/${slug}/` : "/");

export function publicUrl(value) {
  if (!value) return null;
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    /^(localhost|127\.|\[::1\])/.test(url.hostname)
  )
    throw new Error(
      "SITE_URL must be the real public HTTPS URL, without credentials, query, or fragment.",
    );
  return url.href.replace(/\/$/, "");
}

export async function buildSite({
  preview = false,
  siteUrl = process.env.SITE_URL || config.publicUrl,
  outDir,
  writeRoot = false,
} = {}) {
  const site = publicUrl(siteUrl);
  if (!preview && !site)
    throw new Error(
      "Set SITE_URL or site.config.json publicUrl to the real public HTTPS address before a production build. Use npm run build:preview for local work.",
    );
  const output = resolve(
    outDir || resolve(ROOT, preview ? ".preview/site" : "dist"),
  );
  const within = relative(ROOT, output);
  if (!within || within.startsWith("..") || isAbsolute(within))
    throw new Error("Build output must be a subdirectory of this checkout.");
  const base = site ? new URL(site).pathname.replace(/\/$/, "") : "";
  const local = (path) => `${base}${path}`;
  const absolute = (path) => `${site}${path}`;
  const guideBySlug = new Map(GUIDES.map((guide) => [guide.slug, guide]));
  const organization = {
    "@type": "EducationalOrganization",
    "@id": site ? `${site}/#organization` : "#organization",
    name: config.name,
    description:
      "An independent educational website introducing children to ocean life.",
    ...(site ? { url: `${site}/`, logo: `${site}/assets/favicon.svg` } : {}),
    sameAs: [config.repository],
  };
  const website = {
    "@type": "WebSite",
    "@id": site ? `${site}/#website` : "#website",
    name: config.name,
    inLanguage: "en",
    publisher: { "@id": organization["@id"] },
    ...(site ? { url: `${site}/` } : {}),
  };
  const metadata = ({
    title,
    description,
    path,
    kind = "WebPage",
    image,
    article = false,
    noindex = false,
  }) => {
    const canonical = site ? absolute(path) : null;
    const page = {
      "@type": kind,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@id": website["@id"] },
      publisher: { "@id": organization["@id"] },
      ...(canonical ? { "@id": `${canonical}#page`, url: canonical } : {}),
    };
    const graph = [organization, website, page];
    if (article)
      graph.push({
        "@type": "Article",
        headline: title,
        description,
        inLanguage: "en",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@id": organization["@id"] },
        publisher: { "@id": organization["@id"] },
        ...(canonical
          ? { mainEntityOfPage: { "@id": page["@id"] }, url: canonical }
          : {}),
        ...(image && site ? { image: absolute("/" + image.src) } : {}),
      });
    if (canonical && path !== "/")
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AquaScroll",
            item: `${site}/`,
          },
          { "@type": "ListItem", position: 2, name: title, item: canonical },
        ],
      });
    return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#b7e4dd"><title>${escape(title)} | AquaScroll</title><meta name="description" content="${escape(description)}">${preview || noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}${canonical && !noindex ? `<link rel="canonical" href="${escape(canonical)}">` : ""}<meta property="og:site_name" content="AquaScroll"><meta property="og:type" content="${article ? "article" : "website"}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}">${canonical && !noindex ? `<meta property="og:url" content="${escape(canonical)}">` : ""}${image && site ? `<meta property="og:image" content="${escape(absolute("/" + image.src))}"><meta property="og:image:alt" content="${escape(image.title)}">` : ""}<meta name="twitter:card" content="summary"><link rel="icon" href="${local("/assets/favicon.svg")}" type="image/svg+xml"><link rel="stylesheet" href="${local("/assets/fonts.css")}"><script type="application/ld+json">${json({ "@context": "https://schema.org", "@graph": graph })}</script>`;
  };
  const link = (slug, label) =>
    `<a href="${local(urlFor(slug))}">${escape(label || guideBySlug.get(slug).title)}</a>`;
  const navigation = `${link("", "Scroll the ocean")}${link("deep-sea", "Ocean guides")}${link("for-parents", "For parents & teachers")}${link("privacy", "Privacy")}`;
  const footer = `<footer class="guide-footer"><a class="wordmark" href="${local("/")}">AquaScroll<span>.</span></a><nav aria-label="More about AquaScroll">${navigation}<a href="${local("/")}#sources">Science & image credits</a></nav><p>Made for curious minds. No accounts, ads, or analytics.</p></footer>`;
  const shell = (head, body) =>
    `<!doctype html><html lang="en"><head>${head}<link rel="stylesheet" href="${local("/content.css")}"></head><body class="reading-page"><a class="skip-reading" href="#reading">Skip to content</a><header class="guide-header"><a class="wordmark" href="${local("/")}">AquaScroll<span>.</span></a><nav aria-label="Main navigation">${link("deep-sea", "Ocean guides")}${link("for-parents", "For grown-ups")}<a href="${local("/")}#sunlight">Dive in ↓</a></nav></header>${body}${footer}</body></html>`;
  const write = async (path, text) => {
    const file = resolve(output, path);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, text);
  };

  let experience = await readFile(
    resolve(ROOT, "templates/experience.html"),
    "utf8",
  );
  const head = metadata({
    title: "Explore the deep ocean for kids — 120 sea creatures",
    description:
      "Scroll from sunlight to the deepest ocean. Discover 120 sea creatures, surprising facts, and the five ocean zones in a free interactive journey for kids.",
    path: "/",
  });
  experience = experience.replace(
    /<head>[\s\S]*?<\/head>/,
    `<head>${head}<link rel="stylesheet" href="${local("/styles.css")}"><script type="module" src="${local("/app.js")}"></script></head>`,
  );
  for (const [selector, html] of Object.entries(renderExperience())) {
    const id = selector.slice(1);
    experience = experience.replace(
      `<div id="${id}"></div>`,
      `<div id="${id}">${html}</div>`,
    );
  }
  experience = experience.replace("{{LEARNING_LINKS}}", navigation);
  experience = experience.replaceAll(
    'src="assets/',
    `src="${local("/assets/")}`,
  );
  await write("index.html", experience);
  if (writeRoot) await writeFile(resolve(ROOT, "index.html"), experience);
  for (const guide of GUIDES) {
    const image = guide.image && ANIMAL_IMAGES[guide.image];
    const sections = guide.sections
      .map(
        ([heading, text]) =>
          `<section><h2>${escape(heading)}</h2><p>${escape(text)}</p></section>`,
      )
      .join("");
    const photo = image
      ? `<figure class="guide-specimen"><img src="${local("/" + image.src)}" alt="${escape(guide.imageAlt || guide.title.split(":")[0])}" width="${image.width}" height="${image.height}" decoding="async"><figcaption>${guide.imageCaption ? escape(guide.imageCaption) + "<br>" : ""}${escape(image.artist)} · <a href="${escape(image.licenseUrl)}">${escape(image.license)}</a> · <a href="${escape(image.pageUrl)}">Original image</a></figcaption></figure>`
      : "";
    const cards =
      guide.slug === "deep-sea" ||
      guide.slug === "deep-sea/ocean-zones-for-kids"
        ? `<section class="guide-directory"><h2>${guide.slug === "deep-sea" ? "Follow your curiosity" : "Explore each layer"}</h2><div class="guide-grid">${(guide.slug === "deep-sea" ? GUIDES.filter((item) => item.slug.startsWith("deep-sea/")) : guide.related.map((slug) => guideBySlug.get(slug))).map((item) => `<a class="guide-card" href="${local(urlFor(item.slug))}"><span>${item.anchor ? "OCEAN ZONE" : "OCEAN EXPLAINER"}</span><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p><b aria-hidden="true">↗</b></a>`).join("")}</div></section>`
        : "";
    const sources = guide.sources.length
      ? `<section class="reading-sources"><h2>${guide.slug === "privacy" ? "Contact & further information" : "Read the sources"}</h2><ul>${guide.sources.map((source) => `<li><a href="${escape(source.url)}" rel="noopener noreferrer">${escape(source.name)}</a></li>`).join("")}</ul></section>`
      : "";
    const body = `<main id="reading"><div class="reading-intro"><a class="reading-back" href="${local("/deep-sea/")}">← Ocean field notes</a><p class="kicker">${guide.slug === "privacy" ? "HOW THIS SITE WORKS" : guide.slug === "for-parents" ? "FOR GROWN-UPS" : "A LITTLE DEEPER. A LOT MORE WONDER."}</p><h1>${escape(guide.title)}</h1><p class="reading-lead">${escape(guide.intro)}</p><p class="reading-date">${guide.slug === "privacy" ? "Policy date" : "Published & reviewed"}: <time datetime="${UPDATED}">November 6, 2026</time></p></div><article class="reading-body" aria-label="${escape(guide.title)}">${photo}${guide.slug === "deep-sea" ? cards : ""}${sections}${guide.anchor ? `<p class="dive-link"><a href="${local("/")}#${guide.anchor}">Meet the creatures in this zone ↓</a></p>` : ""}${guide.slug !== "deep-sea" ? cards : ""}${sources}<aside class="related-reading"><h2>Keep exploring</h2><ul>${guide.related.map((slug) => `<li>${link(slug)}</li>`).join("")}</ul></aside></article></main>`;
    await write(
      `${guide.slug}/index.html`,
      shell(
        metadata({
          title: guide.title,
          description: guide.description,
          path: urlFor(guide.slug),
          kind: guide.kind || "WebPage",
          article: !guide.kind,
          image,
        }),
        body,
      ),
    );
  }
  await write(
    "404.html",
    shell(
      metadata({
        title: "This part of the ocean is uncharted",
        description:
          "Return to AquaScroll’s ocean journey or explore the educational guides.",
        path: "/404.html",
        noindex: true,
      }),
      `<main id="reading" class="reading-intro"><p class="kicker">404 · UNCHARTED WATER</p><h1>Let’s find your way back.</h1><p>This page isn’t here. ${link("deep-sea", "Explore the ocean guides")} or ${link("", "return to the surface")}.</p></main>`,
    ),
  );
  const paths = ["/", ...GUIDES.map((guide) => urlFor(guide.slug))];
  await write(
    "robots.txt",
    preview
      ? "User-agent: *\nDisallow: /\n"
      : `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`,
  );
  if (site && !preview)
    await write(
      "sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(absolute(path))}</loc></url>`).join("")}</urlset>\n`,
    );
  // Explicit allowlist: never publish source tooling, caches, credentials, or tests.
  for (const file of ["styles.css", "content.css", "app.js"])
    await cp(resolve(ROOT, file), resolve(output, file));
  const oceanConfig = `export const ZONES=${JSON.stringify(ZONES.map(({ id, name, min, max }) => ({ id, name, min, max })))};\nexport const BOTTOM_DEPTH=${BOTTOM_DEPTH};\n`;
  await write("ocean-config.js", oceanConfig);
  if (writeRoot) await writeFile(resolve(ROOT, "ocean-config.js"), oceanConfig);
  await cp(resolve(ROOT, "assets"), resolve(output, "assets"), {
    recursive: true,
  });
  console.log(
    `Built ${paths.length} static pages in ${relative(ROOT, output)} (${preview ? "preview, noindex" : site}).`,
  );
  return { output, paths, site, base };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    await buildSite({
      preview: process.argv.includes("--preview"),
      writeRoot: process.argv.includes("--preview"),
    });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
