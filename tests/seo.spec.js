import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { buildSite, ROOT, publicUrl } from "../scripts/build.mjs";
import { GUIDES } from "../content/guides.mjs";

test("the complete ocean and reading guides work with JavaScript disabled", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL: "http://127.0.0.1:4175",
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".encounter")).toHaveCount(120);
  await expect(page.locator("#animal-barreleye .super-fact")).toBeVisible();
  const image = page.locator("#animal-barreleye .animal-photo");
  await image.scrollIntoViewIfNeeded();
  await expect(image).toHaveCSS("opacity", "1");
  await expect(page.locator("#species-references a")).toHaveCount(120);
  for (const guide of GUIDES) {
    const response = await page.goto(`/${guide.slug}/`);
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toHaveText(guide.title);
    expect(await page.locator(".reading-body").innerText()).toBeTruthy();
    expect(await page.locator("script[src]").count()).toBe(0);
  }
  await context.close();
});

test("production HTML has distinct metadata, accessible content, valid schemas, and working internal links", async ({
  page,
}) => {
  // Reserved example address is confined to this ignored test fixture, never the release artifact.
  const result = await buildSite({
    siteUrl: "https://aquascroll.example",
    outDir: resolve(ROOT, ".preview/seo-test"),
  });
  const documents = await Promise.all(
    result.paths.map(async (path) => ({
      path,
      html: await readFile(
        resolve(
          result.output,
          path === "/" ? "index.html" : path.slice(1) + "index.html",
        ),
        "utf8",
      ),
    })),
  );
  const report = await page.evaluate((documents) => {
    const parsed = new Map(
      documents.map(({ path, html }) => [
        path,
        new DOMParser().parseFromString(html, "text/html"),
      ]),
    );
    return [...parsed].map(([path, doc]) => ({
      path,
      title: doc.title,
      description: doc.querySelector('meta[name="description"]')?.content,
      canonical: doc.querySelector('link[rel="canonical"]')?.href,
      robots: doc.querySelector('meta[name="robots"]')?.content,
      h1: doc.querySelectorAll("h1").length,
      h2: doc.querySelectorAll("h2").length,
      words: doc.querySelector("main").textContent.trim().split(/\s+/).length,
      missingAlt: [...doc.querySelectorAll("img")].filter(
        (img) => !img.getAttribute("alt"),
      ).length,
      schema: JSON.parse(
        doc.querySelector('script[type="application/ld+json"]').textContent,
      ),
      broken: [...doc.querySelectorAll("a[href]")]
        .map(
          (a) =>
            new URL(
              a.getAttribute("href"),
              "https://aquascroll.example" + path,
            ),
        )
        .filter((url) => url.origin === "https://aquascroll.example")
        .filter(
          (url) =>
            !parsed.has(url.pathname) ||
            (url.hash &&
              !parsed
                .get(url.pathname)
                .getElementById(decodeURIComponent(url.hash.slice(1)))),
        )
        .map((url) => url.href),
    }));
  }, documents);
  expect(new Set(report.map((item) => item.title)).size).toBe(14);
  expect(new Set(report.map((item) => item.description)).size).toBe(14);
  for (const item of report) {
    expect(item.canonical).toBe("https://aquascroll.example" + item.path);
    expect(item.robots).not.toContain("noindex");
    expect(item.description.length).toBeGreaterThan(80);
    expect(item.h1).toBe(1);
    expect(item.h2).toBeGreaterThan(0);
    expect(item.words).toBeGreaterThan(200);
    expect(item.missingAlt).toBe(0);
    expect(item.broken, item.path).toEqual([]);
    expect(item.schema["@context"]).toBe("https://schema.org");
    expect(
      item.schema["@graph"].some(
        (node) => node["@type"] === "EducationalOrganization",
      ),
    ).toBe(true);
    if (GUIDES.find((guide) => `/${guide.slug}/` === item.path && !guide.kind))
      expect(
        item.schema["@graph"].some((node) => node["@type"] === "Article"),
      ).toBe(true);
  }
  const sitemap = await readFile(resolve(result.output, "sitemap.xml"), "utf8");
  const locations = await page.evaluate(
    (xml) =>
      [
        ...new DOMParser()
          .parseFromString(xml, "application/xml")
          .querySelectorAll("loc"),
      ].map((node) => node.textContent),
    sitemap,
  );
  expect(locations.sort()).toEqual(
    result.paths.map((path) => "https://aquascroll.example" + path).sort(),
  );
  expect(
    await readFile(resolve(result.output, "robots.txt"), "utf8"),
  ).toContain("Sitemap: https://aquascroll.example/sitemap.xml");
});

test("subdirectory hosting prefixes URLs and production requires a public HTTPS URL", async () => {
  expect(() => publicUrl("http://aquascroll.example")).toThrow();
  expect(() => publicUrl("https://localhost")).toThrow();
  await expect(
    buildSite({
      siteUrl: null,
      outDir: resolve(ROOT, ".preview/missing-domain"),
    }),
  ).rejects.toThrow("real public HTTPS");
  const result = await buildSite({
    siteUrl: "https://aquascroll.example/ocean",
    outDir: resolve(ROOT, ".preview/seo-subpath"),
  });
  const root = await readFile(resolve(result.output, "index.html"), "utf8");
  const guide = await readFile(
    resolve(result.output, "deep-sea/twilight-zone/index.html"),
    "utf8",
  );
  expect(root).toContain('href="/ocean/deep-sea/"');
  expect(root).toContain('src="/ocean/assets/animals/');
  expect(guide).toContain(
    'href="https://aquascroll.example/ocean/deep-sea/twilight-zone/"',
  );
  expect(guide).toContain('href="/ocean/content.css"');
});

test("preview is non-indexable, missing pages return 404, and guide layouts fit phones", async ({
  page,
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const missing = await request.get("/deep-sea/does-not-exist/");
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain("Let’s find your way back.");
  const redirect = await request.get("/deep-sea/twilight-zone", {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(308);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 850 });
    for (const path of [
      "/deep-sea/",
      "/deep-sea/barreleye-fish-facts/",
      "/privacy/",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
  }
});
