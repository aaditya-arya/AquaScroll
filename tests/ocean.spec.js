import { test, expect } from "@playwright/test";
import { CREATURES } from "../creature-catalog.js";
import { ANIMAL_IMAGES } from "../animal-images.js";

async function centerOn(page, selector) {
  await page
    .locator(selector)
    .evaluate((element) =>
      element.scrollIntoView({ block: "center", behavior: "instant" }),
    );
}

test("120 unique creatures each have one short, self-contained fact", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".encounter")).toHaveCount(120);
  await expect(page.locator(".super-fact")).toHaveCount(128);
  await expect(
    page.locator(
      'main .quiet-source,main a[target="_blank"],main .specimen-notes,main dl,main .fact-number,button,dialog',
    ),
  ).toHaveCount(0);
  for (const animal of CREATURES)
    expect(
      animal.fact.replaceAll("|", "").split(/\s+/).length,
    ).toBeLessThanOrEqual(26);
  const facts = await page
    .locator(".encounter")
    .evaluateAll((nodes) =>
      nodes.map((node) => ({
        facts: node.querySelectorAll("h3").length,
        paragraphs: node.querySelectorAll("p").length,
      })),
    );
  expect(facts.every((item) => item.facts === 1 && item.paragraphs === 0)).toBe(
    true,
  );
  const ids = await page
    .locator("[id]")
    .evaluateAll((nodes) => nodes.map((node) => node.id));
  expect(new Set(ids).size).toBe(ids.length);
  expect(await page.evaluate(() => document.body.scrollHeight)).toBeGreaterThan(
    55000,
  );
  expect(errors).toEqual([]);
});

test("every local specimen image decodes and has a credited creator and license", async ({
  page,
}) => {
  await page.goto("/");
  const failures = await page
    .locator(".animal-photo")
    .evaluateAll(async (images) => {
      images.forEach((image) => (image.loading = "eager"));
      return (
        await Promise.all(
          images.map(async (image) => {
            try {
              await image.decode();
              return image.naturalWidth > 0 ? null : image.src;
            } catch {
              return image.src;
            }
          }),
        )
      ).filter(Boolean);
    });
  expect(failures).toEqual([]);
  expect(Object.keys(ANIMAL_IMAGES).length).toBeGreaterThanOrEqual(110);
  for (const image of Object.values(ANIMAL_IMAGES)) {
    expect(image.artist).toBeTruthy();
    expect(image.license).toMatch(/CC BY|CC0|Public domain|PDM/);
    expect(image.pageUrl).toContain("commons.wikimedia.org");
  }
  await expect(page.locator("#photo-credits>p")).toHaveCount(
    Object.keys(ANIMAL_IMAGES).length,
  );
  await expect(page.locator("#species-references>a")).toHaveCount(120);
});

test("the meter matches each centered creature and finishes at Challenger Deep", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  for (const [key, depth] of [
    ["dolphin", 45],
    ["octopus", 58],
    ["coelacanth", 320],
    ["barreleye", 720],
    ["anglerfish", 2100],
    ["tripodfish", 5200],
    ["bigfin", 6212],
    ["amphipod", 10900],
  ]) {
    await centerOn(page, `#animal-${key}`);
    await expect
      .poll(async () =>
        Math.abs(
          Number(
            (await page.locator("#live-depth").textContent()).replaceAll(
              ",",
              "",
            ),
          ) - depth,
        ),
      )
      .toBeLessThanOrEqual(1);
  }
  await centerOn(page, "#deepest");
  await expect(page.locator("#live-depth")).toHaveText("10,935");
  await expect(page.locator("#live-zone")).toHaveText("CHALLENGER DEEP");
  await expect(page.locator(".depth-ruler>span.active")).toHaveText("10,935 m");
  await page.getByRole("link", { name: "Back to the surface" }).click();
  await expect(page.locator("#live-depth")).toHaveText("0");
});

test("the water visibly changes color and scenery at different depths", async ({
  page,
}) => {
  await page.goto("/");
  const colors = [];
  for (const key of [
    "seaotter",
    "dolphin",
    "barreleye",
    "anglerfish",
    "bigfin",
  ]) {
    await centerOn(page, `#animal-${key}`);
    const expected = CREATURES.find((animal) => animal.key === key).depth;
    await expect
      .poll(async () =>
        Math.abs(
          Number(
            (await page.locator("#live-depth").textContent()).replaceAll(
              ",",
              "",
            ),
          ) - expected,
        ),
      )
      .toBeLessThanOrEqual(1);
    colors.push(
      await page
        .locator("#ocean-environment")
        .evaluate((element) => element.style.getPropertyValue("--sea-top")),
    );
  }
  expect(new Set(colors).size).toBe(5);
  await centerOn(page, "#animal-snailfish");
  await expect
    .poll(() =>
      page
        .locator("#ocean-environment")
        .evaluate((element) =>
          Number(element.style.getPropertyValue("--trench")),
        ),
    )
    .toBeGreaterThan(0.9);
  expect(
    await page
      .locator("#ocean-environment")
      .evaluate((element) =>
        Number(element.style.getPropertyValue("--sunlight")),
      ),
  ).toBe(0);
});

test("the opening animates and discoveries arrive when scrolled into view", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  expect(
    await page
      .locator(".wave-front")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("wave-drift");
  await expect(page.locator("#animal-barreleye")).not.toHaveClass(/is-seen/);
  await centerOn(page, "#animal-barreleye");
  await expect(page.locator("#animal-barreleye")).toHaveClass(/is-seen/);
  await expect
    .poll(() =>
      page
        .locator("#animal-barreleye .animal-photo")
        .evaluate((element) => element.complete && element.naturalWidth > 0),
    )
    .toBe(true);
  await expect(page.locator("#animal-barreleye .creature-figure")).toHaveClass(
    /image-ready/,
  );
  const before = await page.locator("#animal-barreleye").getAttribute("style");
  await page.evaluate(() => window.scrollBy({ top: 150, behavior: "instant" }));
  await expect(page.locator("#animal-barreleye")).not.toHaveAttribute(
    "style",
    before,
  );
});

test("touch and keyboard interactions animate the animal without opening text panels", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4175");
  await centerOn(page, "#animal-turtle");
  await page.locator("#animal-turtle figure").tap();
  await expect(page.locator("#animal-turtle figure")).toHaveClass(/is-curious/);
  await expect(page.locator("#animal-turtle .super-fact")).toContainText(
    "underwater meadows",
  );
  await page.locator("#animal-octopus figure").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#animal-octopus figure")).toHaveClass(
    /is-curious/,
  );
  await expect(page.locator("#animal-octopus figure")).toBeFocused();
  await expect(page.locator("main details,dialog")).toHaveCount(0);
  await context.close();
});

test("reduced motion retains the imagery and depth changes without animation", async ({
  page,
}) => {
  await page.goto("/");
  expect(
    await page
      .locator(".wave-front")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await centerOn(page, "#animal-dolphin");
  await expect(page.locator("#animal-dolphin figure")).toHaveClass(
    /image-ready/,
  );
  expect(
    await page
      .locator("#animal-dolphin .animal-art")
      .evaluate((element) => getComputedStyle(element).transform),
  ).toBe("none");
  await expect(page.locator("#live-depth")).toHaveText("45");
});

test("the credits are collected in the footer and can be opened", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About this ocean" }).click();
  await page.getByText("The science & image credits", { exact: false }).click();
  await page.locator(".photo-credit-list>summary").click();
  await expect(page.locator("#photo-credits")).toBeVisible();
  await page.locator(".species-reference-list>summary").click();
  await expect(page.locator("#species-references")).toBeVisible();
});

for (const width of [320, 390, 768, 1440]) {
  test(`the opening and full descent fit a ${width}px screen`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    for (const selector of [
      "#surface",
      "#animal-bluedragon",
      "#animal-dolphin",
      "#animal-barreleye",
      "#animal-bigfin",
      "#deepest",
      "#sources",
    ]) {
      await centerOn(page, selector);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await centerOn(page, "#surface");
    await page.screenshot({ path: `test-results/aquascroll-${width}.png` });
  });
}
