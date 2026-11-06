# AquaScroll publishing and discovery

## Before publishing

1. Set `site.config.json` → `publicUrl` to the real public HTTPS URL, or set `SITE_URL` in the build environment. Build with `npm run build` and publish `dist/`. Preview builds intentionally block indexing.
2. Enable HTTPS on the host and redirect the HTTP address and alternate domains to the canonical HTTPS address. A configured HTTPS canonical does not itself enable TLS.
3. Enable directory indexes (`/deep-sea/twilight-zone/` → its `index.html`). Serve `404.html` with HTTP 404 for unknown pages; do not configure an SPA catch-all returning 200.
4. Check the deployed root, two guides, a creature image, `robots.txt`, and `sitemap.xml`. Inspect the raw page source with JavaScript disabled: all 120 creature facts should be present. Production pages must not contain `noindex` or receive an `X-Robots-Tag: noindex` header from hosting configuration.
5. Confirm that canonical links, sitemap locations, social URLs, and structured data use the final domain and any deployment subpath. Inspect structured data with Google's Rich Results Test and Schema.org's validator; schema does not guarantee a search enhancement. `EducationalOrganization` describes the educational project, not a registered school.
6. Review hosting logs, retention, and provider settings. The app contains no visitor analytics, ads, forms, comments, storage identifiers, or embedded third-party media. A host may process IP addresses and requests. Update the privacy policy with provider-specific information and operator contact information where applicable before making promises about the live service.

## Google Search Console

This step requires the real deployment and an authorized owner account; it cannot be established by a local preview.

1. Add the correct property and verify ownership using the method appropriate to the domain/host.
2. Submit the deployed sitemap URL, normally `https://YOUR-REAL-DOMAIN/sitemap.xml`.
3. Inspect the homepage and a reading page in URL Inspection. Run the live test and view tested HTML/rendering. Check that creature text, headings, and internal links appear, and compare Google's selected canonical with the declared canonical.
4. Request indexing when appropriate, then monitor indexing reports. A successful live test or request does not guarantee indexing or ranking.
5. Use PageSpeed Insights on the public homepage and a guide. Monitor field Core Web Vitals when enough real visits are available; local layout checks cannot substitute for field data. Configure compression and sensible cache headers for local fonts/images on the host.

Official references: [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [URL Inspection](https://support.google.com/webmasters/answer/9012289), [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). The 200-word editorial target is a project requirement, not a Google minimum or ranking promise.

## Sharing with parents and educators

No outreach or social posts have been sent. Use the finished resource to earn relevant links rather than buying placements or mass-posting.

- Parenting and homeschool sites: share the parents' guide alongside the ocean-zones guide. Explain that children can read without registering and that scientific sources are linked.
- Teachers and resource librarians: offer a specific five-layer ocean drawing activity from the guide, not a generic promotional message. Ask whether it fits their existing resources.
- Pinterest: create a clearly labeled ocean-zones visual that links to the relevant explanation. Preserve the image licenses and authorship information of any reused specimen images.
- Reddit and Product Hunt: read each community's current submission rules, disclose that you maintain AquaScroll, and share only where relevant. Do not imply an endorsement or post through someone else's account.

An adult-facing message draft:

> I maintain AquaScroll, a free visual ocean journey with 120 creature encounters and separate reading guides about ocean zones and deep-sea life. Your readers may find the ocean-zone explanation and paper drawing activity useful. The application has no accounts, ads, or analytics. Here is the specific guide: [insert the final public guide link]. If it fits your resources, you are welcome to link to it.

Review the actual deployment and its privacy policy before using that description. Do not collect children's contact information for promotion. If data collection is introduced later, review the applicable requirements, including the FTC's [children's privacy guidance](https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy), before enabling it.
