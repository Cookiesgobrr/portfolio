import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? files(join(dir, entry.name))
      : [join(dir, entry.name)],
  );
}
const pages = files("dist").filter((path) => path.endsWith(".html"));

test("selected work forms an ordered journey through three complete case studies", () => {
  const home = readFileSync("dist/index.html", "utf8");
  const work = home.slice(
    home.indexOf('id="work"'),
    home.indexOf('id="speaking"'),
  );
  const slugs = ["tacticlens", "admunos", "epileducate"];
  let previous = -1;
  slugs.forEach((slug, index) => {
    const position = work.indexOf(`/portfolio/work/${slug}/`);
    assert.ok(position > previous, `${slug}: missing or out of order`);
    previous = position;
    const page = readFileSync(`dist/work/${slug}/index.html`, "utf8");
    assert.match(page, /<h2>My contribution<\/h2>/);
    assert.match(page, /class="contribution-list"/);
    const next = slugs[(index + 1) % slugs.length];
    assert.ok(
      page.includes(`class="next-project" href="/portfolio/work/${next}/"`),
    );
  });
  assert.doesNotMatch(home, /admun-logistics-demo/);
  assert.doesNotMatch(
    readFileSync("dist/work/admunos/index.html", "utf8"),
    /admun-logistics-demo/,
  );
  assert.ok(
    readFileSync("dist/sitemap.xml", "utf8").includes(
      "/portfolio/work/admunos/",
    ),
  );
});

test("every internal page, asset, and anchor resolves under /portfolio/", () => {
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    for (const [, attr, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(value)) continue;
      const [path, anchor] = value.split("#");
      if (path)
        assert.ok(
          path.startsWith("/portfolio/"),
          `${page}: unbased ${attr} ${value}`,
        );
      let target = path
        ? join("dist", path.slice("/portfolio/".length).split("?")[0])
        : page;
      if (target.endsWith("/") || !target.split("/").at(-1).includes("."))
        target = join(target, "index.html");
      assert.ok(existsSync(target), `${page}: missing ${target}`);
      if (anchor && target.endsWith(".html"))
        assert.ok(
          readFileSync(target, "utf8").includes(`id="${anchor}"`),
          `${page}: missing anchor ${value}`,
        );
    }
  }
});

test("pages have a single h1, unique title, canonical URL, and skip destination", () => {
  const titles = new Set();
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, page);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(
      title && !titles.has(title),
      `${page}: duplicate or missing title`,
    );
    titles.add(title);
    assert.match(
      html,
      /rel="canonical" href="https:\/\/cookiesgobrr.github.io\/portfolio/,
    );
    assert.match(html, /id="main"/);
    assert.match(html, /lang="en"/);
  }
});

test("authentic images have accessible descriptions and reserved layout space", () => {
  for (const page of pages) {
    for (const [image] of readFileSync(page, "utf8").matchAll(
      /<img\b[^>]+>/g,
    )) {
      assert.match(image, /alt="[^"]+"/, page);
      assert.match(image, /width="\d+"/, page);
      assert.match(image, /height="\d+"/, page);
    }
  }
});

test("CSS font and media references exist in the production bundle", () => {
  for (const path of files("dist").filter((path) => path.endsWith(".css"))) {
    const css = readFileSync(path, "utf8");
    for (const [, raw] of css.matchAll(/url\(([^)]+)\)/g)) {
      const value = raw.replace(/["']/g, "");
      if (value.startsWith("data:")) continue;
      const target = value.startsWith("/portfolio/")
        ? join("dist", value.slice("/portfolio/".length))
        : join(dirname(path), value);
      assert.ok(existsSync(target), `${path}: missing ${value}`);
    }
  }
});

test("repository stays minimal and unreleased work stays unpublished", () => {
  assert.equal(readFileSync("README.md", "utf8"), "# portfolio\n");
  assert.deepEqual(
    files(".").filter(
      (path) =>
        !/^(node_modules|\.git|dist|\.astro)\//.test(path) &&
        path.endsWith(".md"),
    ),
    ["README.md"],
  );
  assert.ok(!existsSync("dist/work/margin/index.html"));
  for (const path of files("dist").filter((path) =>
    /\.(html|xml)$/.test(path),
  )) {
    assert.doesNotMatch(
      readFileSync(path, "utf8"),
      /(?:>Margin<|work\/margin\/|iPad notebook project in development)/,
    );
  }
});
