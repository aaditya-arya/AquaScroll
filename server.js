import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { buildSite } from "./scripts/build.mjs";
// Serve the same generated HTML that a static host publishes. Never use an SPA fallback.
const { output: root, base } = await buildSite({
  preview: true,
  writeRoot: true,
});
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (base) {
      if (pathname !== base && !pathname.startsWith(base + "/")) {
        res.writeHead(404).end("Not found");
        return;
      }
      pathname = pathname.slice(base.length) || "/";
    }
    if (!extname(pathname) && !pathname.endsWith("/")) {
      res.writeHead(308, { Location: base + pathname + "/" }).end();
      return;
    }
    const file = resolve(
      root,
      "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname),
    );
    if (!file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    const body = await readFile(file);
    res
      .writeHead(200, {
        "X-Robots-Tag": "noindex, follow",
        "Content-Type":
          (types[extname(file)] || "application/octet-stream") +
          "; charset=utf-8",
      })
      .end(body);
  } catch {
    res
      .writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex",
      })
      .end(await readFile(resolve(root, "404.html")));
  }
}).listen(Number(process.env.PORT) || 4173, "127.0.0.1", () =>
  console.log(
    `AquaScroll preview: http://localhost:${Number(process.env.PORT) || 4173}${base}/`,
  ),
);
