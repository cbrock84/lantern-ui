// Asserts on the HTML/CSS the fixture site (test/fixture) built from the packed package.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const dist = new URL('./fixture/dist/', import.meta.url);
const page = (p) => readFileSync(new URL(p, dist), 'utf8');
const ldBlocks = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
const home = page('index.html');
const post = page('blog/fixture-post/index.html');

test('head: title, canonical, theme vars, analytics and verification', () => {
  assert.match(home, /<title>Home \| Holly &amp; Hare<\/title>/);
  assert.match(home, /<link rel="canonical" href="https:\/\/hollyandhare.com\/">/);
  assert.match(home, /:root\{--ll-bg:241 238 226;/);
  assert.match(home, /--ll-font-display:"Cardo", Georgia, serif;/);
  assert.match(home, /googletagmanager\.com\/gtag\/js\?id=G-TEST123/);
  assert.match(home, /name="google-site-verification" content="gverify"/);
  assert.match(home, /<meta name="theme-color" content="#f1eee2">/);
});

test('home page carries Organization JSON-LD pointing at the umbrella; other pages do not', () => {
  const org = ldBlocks(home).find((n) => n['@type'] === 'Organization');
  assert.equal(org.parentOrganization.url, 'https://lanternlearn.com');
  assert.ok(!ldBlocks(page('blog/index.html')).some((n) => n['@type'] === 'Organization'));
});

test('header: text wordmark fallback, custom logo slot, CTA and active link', () => {
  assert.match(home, /font-site-display text-2xl[^>]*>Holly &amp; Hare</);
  const custom = page('custom-logo/index.html');
  assert.match(custom, /id="custom-wordmark"/);
  assert.doesNotMatch(custom, /font-site-display text-2xl/);
  assert.match(home, /<a href="\/start"[^>]*bg-site-accent\/10[^>]*>Get started<\/a>/);
  assert.match(post, /<a href="\/blog"[^>]*aria-current="page"/);
  assert.doesNotMatch(home, /<a href="\/blog"[^>]*aria-current="page"/);
});

test('footer: every other family site, never the current one, plus the imprint line', () => {
  const footer = home.slice(home.indexOf('<footer'));
  for (const url of ['https://lanternlearn.com', 'https://foxandfernbooks.com', 'https://rocketandraven.com', 'https://learn.lanternlearn.com']) {
    assert.ok(footer.includes(`href="${url}"`), url);
  }
  assert.ok(!footer.includes('href="https://hollyandhare.com"'));
  assert.match(footer, /A <a href="https:\/\/lanternlearn.com"[^>]*>Lantern Learn<\/a> imprint/);
  assert.match(footer, /mailto:hello@example.com/);
});

test('article: byline, sources section, citations JSON-LD, related family card', () => {
  assert.match(post, /og:type" content="article"/);
  assert.match(post, /By Holly &amp; Hare/);
  assert.match(post, /Reviewed by Test Reviewer/);
  assert.match(post, /<a href="#sources"[^>]*>2 sources<\/a>/);
  assert.match(post, /<section id="sources"/);
  assert.match(post, /<a href="https:\/\/example.org\/first" rel="noopener"/);
  assert.match(post, /class="prose prose-lg prose-site max-w-none"/);
  const art = ldBlocks(post).find((n) => n['@type'] === 'BlogPosting');
  assert.equal(art.citation.length, 2);
  assert.equal(art.reviewedBy.name, 'Test Reviewer');
  assert.ok(ldBlocks(post).some((n) => n['@type'] === 'BreadcrumbList'));
  const related = post.slice(post.indexOf('More from the Lantern Learn family'));
  assert.ok(related.includes('https://rocketandraven.com') && related.includes('https://foxandfernbooks.com'));
});

test('blog index lists the article with its source count', () => {
  assert.match(page('blog/index.html'), /href="\/blog\/fixture-post"[^>]*>Fixture post<\/a>[\s\S]*2 sources cited/);
});

test('Tailwind emitted the preset utilities backed by --ll-* variables', () => {
  const cssDir = new URL('_astro/', dist);
  const css = readdirSync(cssDir).filter((f) => f.endsWith('.css')).map((f) => readFileSync(new URL(f, cssDir), 'utf8')).join('');
  for (const rule of ['.bg-site-bg{', '.text-site-accent{', '.bg-site-footer-bg{', '.font-site-display{', '.prose-site{']) {
    assert.ok(css.includes(rule), rule);
  }
  assert.match(css, /rgb\(var\(--ll-bg\) \/ var\(--tw-bg-opacity/);
});
