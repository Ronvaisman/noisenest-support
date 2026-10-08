import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

async function exportedHTML(path = "/") {
  const relativePath = path === "/" ? "index.html" : `${path.replace(/^\//, "")}/index.html`;
  return readFile(new URL(relativePath, outputRoot), "utf8");
}

test("exports the production NoiseNest home page under the GitHub Pages base path", async () => {
  const html = await exportedHTML();
  assert.match(html, /NoiseNest — Offline Sleep Sounds/i);
  assert.match(html, /Every sound has a documented origin\./i);
  assert.match(html, /236 reviewed recordings/i);
  assert.match(html, /single, optional purchase—not a subscription/i);
  assert.match(html, /href="\/noisenest-support\/support\/"/i);
  assert.match(html, /src="\/noisenest-support\/app-icon\.png"/i);
  assert.doesNotMatch(html, /Every sound and saved mix stays available/i);
});

test("exports every release support and legal route", async () => {
  const paths = ["/privacy", "/support", "/faq", "/contact", "/legal", "/terms", "/licenses", "/accessibility"];
  const pages = await Promise.all(paths.map(exportedHTML));
  assert.match(pages[0], /GitHub Pages/i);
  assert.match(pages[0], /App Group/i);
  assert.match(pages[2], /actionable reminder/i);
  assert.match(pages[3], /noisenest@proton\.me/i);
  assert.match(pages[5], /Standard Licensed Application End User License Agreement/i);
  assert.match(pages[6], /236 reviewed recordings/i);
});

test("the public site ships no analytics or tracking integration", async () => {
  for (const path of ["/", "/privacy", "/support", "/faq", "/contact", "/legal", "/terms", "/licenses", "/accessibility"]) {
    const html = await exportedHTML(path);
    assert.doesNotMatch(html, /google-analytics|googletagmanager|segment\.com|mixpanel|posthog|facebook\.net/i);
    assert.doesNotMatch(html, /chatgpt\.site|signin-with-chatgpt|oai-authenticated-user/i);
  }
});

test("the exported public surface contains no private application source", async () => {
  const entries = await readdir(outputRoot, { recursive: true });
  for (const entry of entries) {
    assert.doesNotMatch(entry, /\.swift$|\.xcodeproj|\.entitlements$|\.storekit$/i);
  }
  for (const name of ["NoiseNest", "NoiseNestWidget", "Config", "Docs"]) {
    assert.equal(entries.some((entry) => entry === name || entry.startsWith(`${name}/`)), false);
  }
});
