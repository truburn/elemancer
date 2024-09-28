import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      exclude: ["&&/.*", "**/*.d.ts"],
    },
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
  },
});
