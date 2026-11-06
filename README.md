# AquaScroll

**How deep does life go?** An animated ocean descent with **120 distinct creature encounters**, **117 locally stored specimen images**, and **one short fact per creature**.

The journey goes from a sunny surface to the approximate **10,935-meter depth of Challenger Deep**. It is long because there are more animals to discover: on a 1440-pixel desktop it provides roughly **72,000 pixels of scrolling**, with closer spacing than the earlier design.

## Run

Requires Node.js 22 or newer. The preview server generates static HTML before serving it:

```sh
npm start
```

Open **http://localhost:4173**. Restart an older running server to enable the new directory routes. Restart after editing templates or content to rebuild the preview. All website assets are local; no external API or asset requests are made at runtime. The ocean and guides remain readable without JavaScript; JavaScript adds depth tracking, scenery, and interactions.

## Static publishing and search

The site now has **14 statically generated pages**: the ocean experience, a learning hub, an overview of ocean zones, five zone guides, ocean depth, anglerfish, barreleye fish, submersibles, parents/teachers, and privacy. Each reading page contains over 200 words of focused explanation. Titles, descriptions, headings, image alternatives, internal links, and JSON-LD are present in the delivered HTML.

Set the real public HTTPS address in `site.config.json` under `publicUrl`, or supply `SITE_URL`. No production domain is assumed. Then run:

```powershell
$env:SITE_URL = 'https://YOUR-REAL-DOMAIN'
npm run build
```

Publish **only `dist/`** with a static host that supports directory indexes and HTTPS. Do not publish the repository root or `.preview/`. A production build fails without a public HTTPS URL, and emits canonical URLs, Open Graph metadata, `sitemap.xml`, and an allowing `robots.txt`. Paths under a public subdirectory are supported by including that path in `SITE_URL`; configure the host to mount `dist/` at that path. For subdirectory hosting, the host's root `/robots.txt` must reference the generated sitemap because crawlers look for robots at the origin root.

`npm run build:preview` creates `.preview/site/` and refreshes the generated root `index.html` for local compatibility. Preview output deliberately uses `noindex` and blocks crawling. `npm start` serves this preview, not the production release. The root `index.html` is generated: edit `templates/experience.html` instead.

Structured data identifies AquaScroll as an educational website/project using `EducationalOrganization` and `WebSite`, with `Article` on educational explainers and breadcrumbs on reading pages. It does not claim accreditation, professional credentials, or guaranteed search features. No FAQ schema is generated because these pages are explanatory articles rather than FAQ lists.

See [SEO-LAUNCH.md](SEO-LAUNCH.md) for deployment verification, Search Console, privacy review, and a parent/teacher outreach plan. HTTPS availability, live Core Web Vitals, and Google's indexed view must be checked on the real public deployment; local tests cannot establish them.

## Experience

- Moving waves, a swimming diver, fish, and a scroll invitation introduce the journey.
- Every creature has a name, an encounter depth, and one self-contained fact. There are no second paragraphs, scientific-name subtitles, food/size panels, individual source links, quizzes, journals, or modals.
- Creature images arrive as their scenes enter the viewport. Hover, touch, or keyboard interaction gives the animal a small visual response without opening text panels.
- The background changes continuously with depth: turquoise surface water, green shallows, blue open water, violet twilight, dark midnight water, and deep trench walls. Sunbeams fade and marine snow becomes visible as the descent progresses.
- A prominent meter counter matches the centered encounter. A ruler marks the zone boundaries, while a small counter shows progress through the 120 creatures.
- Eight brief story moments connect the creatures, including the scuba-diving record, loss of sunlight, Titanic, deepest filmed fish, and Everest comparison. Pressure equations and unexplained multipliers are removed.
- Reduced-motion preferences stop decorative animations and scroll transforms while retaining the content and changing water colors.
- Scientific sources, species references, and complete image credits are consolidated in expandable footer sections.

Depths are representative story positions, not the complete ranges of each species or a claim that all creatures live in the same geographic location. Screen distance is paced for storytelling rather than a constant depth scale. Images include photographs and scientific illustrations; they may depict aquarium animals or collected specimens. The footer explains these conventions.

## Images and licenses

The website uses **117 openly licensed Wikimedia Commons images** plus retained original artwork for three encounters. Their authors, license links, and original file pages are included in the footer. Images are stored locally and presented with CSS edge masks; the downloaded image files are not edited.

`animal-images.js` is the build-time image inventory. `assets/animal-images.json` preserves the same attribution information for preparation tools. Images are lazily loaded, with the opening specimens loaded eagerly, and revealed after decoding when JavaScript is enabled. Without JavaScript, the images are visible normally.

The optional preparation command is:

```sh
node scripts/fetch-specimen-images.mjs
```

It fetches article/image metadata, keeps research caches in ignored `.preview/`, preserves existing downloads, and respects rate-limit retry delays. Normal development and hosting do not require this command or network access.

Fredoka and DM Sans use the SIL Open Font License; their license files are in `assets/`.

## Checks

```sh
npm install
npx playwright install chromium
npm run check
npm test
```

Browser checks cover the 120 concise facts, all local image decoding and attribution, accurate depth counts, water-color and scenery changes, scroll-triggered reveals, the animated opening, touch and keyboard interactions, reduced motion, footer credits, and responsive layouts at 320, 390, 768, and 1440 pixels. SEO checks also exercise JavaScript-disabled reading, production metadata/schema/sitemap consistency, all internal page/fragment links, article layouts, subdirectory URLs, preview crawl blocking, and real 404 responses. Reserved example domains are used only inside ignored test build fixtures.

## Files

- `templates/experience.html` — source for the animated surface, depth display, ending, and footer
- `index.html` — generated local HTML with all creature text and credits
- `app.js` — progressive interactions, continuous atmosphere, and depth tracking
- `ocean-config.js` — generated lightweight depth/zone configuration
- `content/guides.mjs`, `content.css` — educational reading pages and their responsive styles
- `scripts/build.mjs`, `lib/render-experience.mjs` — static generator and creature HTML renderer
- `site.config.json` — public URL and project identity
- `styles.css` — responsive composition, animations, image presentation, and motion preferences
- `creature-catalog.js` — 120 creature facts and eight story moments
- `animal-images.js` — image inventory and attribution
- `ocean-data.js`, `ocean-art.js`, `creatures.js` — retained source data and original vector artwork
- `assets/animals/` — local specimen images
- `scripts/fetch-specimen-images.mjs` — optional image preparation
- `server.js` — dependency-free preview server
- `tests/` — browser checks

Static hosting requires no backend. The generator publishes only the needed files into `dist/`; source data and rendering modules are build-time dependencies and are not downloaded by visitors.

The sense of scale in [The Deep Sea by Neal Agarwal](https://neal.fun/deep-sea/) remains an inspiration, credited in the footer.
