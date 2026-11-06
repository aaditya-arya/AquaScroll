import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 1,
  timeout: 60000,
  use: {
    baseURL: "http://127.0.0.1:4175",
    headless: true,
    reducedMotion: "reduce",
  },
  webServer: {
    command: "node server.js",
    url: "http://127.0.0.1:4175",
    env: { PORT: "4175" },
    reuseExistingServer: false,
  },
  reporter: "list",
});
