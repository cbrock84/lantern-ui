import { test } from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'zod';
import {
  FAMILY,
  familyExcept,
  imprints,
  hexToRgbTriplet,
  themeCss,
  articleSchema,
  readingMinutes,
  publishedArticles,
  organizationJsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from '../../src/index.ts';

const theme = {
  bg: '#ffffff', surface: '#fafafa', text: '#111111', muted: '#555555', heading: '#000000',
  accent: '#3aa9ff', border: '#dddddd', footerBg: '#0a1626', footerText: '#ffffff', footerAccent: '#e7c988',
};
const siteFor = (key) => ({
  key, defaultOgImage: '/og.png', publisherLogo: '/logo.png', favicon: { href: '/favicon.svg' },
  fonts: { display: 'serif', body: 'sans-serif' }, theme, nav: [], footerLinks: [], footerBlurb: 'x', legalLinks: [],
  contactEmail: 'hello@example.com',
});

test('family registry: every site has an https url and a unique key', () => {
  for (const [key, s] of Object.entries(FAMILY)) {
    assert.equal(s.key, key);
    assert.match(s.url, /^https:\/\//);
    assert.ok(s.tagline.length > 10);
  }
  assert.equal(Object.values(FAMILY).filter((s) => s.role === 'umbrella').length, 1);
});

test('familyExcept omits the current site and lists the umbrella first', () => {
  const list = familyExcept('foxandfern');
  assert.ok(!list.some((s) => s.key === 'foxandfern'));
  assert.equal(list[0].key, 'lanternlearn');
  assert.equal(list.length, Object.keys(FAMILY).length - 1);
  assert.ok(!familyExcept('lanternlearn').some((s) => s.key === 'lanternlearn'));
  assert.equal(imprints().length, Object.keys(FAMILY).length - 1);
});

test('hexToRgbTriplet handles 6- and 3-digit hex and rejects junk', () => {
  assert.equal(hexToRgbTriplet('#0A1626'), '10 22 38');
  assert.equal(hexToRgbTriplet('fff'), '255 255 255');
  assert.throws(() => hexToRgbTriplet('#12345'));
  assert.throws(() => hexToRgbTriplet('red'));
});

test('themeCss emits every variable the preset reads', () => {
  const css = themeCss(theme, { display: '"Cinzel", serif', body: 'Inter' });
  for (const v of ['bg', 'surface', 'text', 'muted', 'heading', 'accent', 'border', 'footer-bg', 'footer-text', 'footer-accent']) {
    assert.match(css, new RegExp(`--ll-${v}:\\d+ \\d+ \\d+;`), v);
  }
  assert.match(css, /--ll-font-display:"Cinzel", serif;/);
});

const post = { title: 't', description: 'd', pubDate: '2026-01-02' };

test('articleSchema applies defaults and validates source urls', () => {
  const d = articleSchema(z, { defaultAuthor: 'Fox & Fern Books' }).parse(post);
  assert.equal(d.author, 'Fox & Fern Books');
  assert.deepEqual(d.sources, []);
  assert.deepEqual(d.relatedSites, []);
  assert.ok(d.pubDate instanceof Date);
  assert.throws(() => articleSchema(z).parse({ ...post, sources: [{ title: 's', url: 'not a url' }] }));
  assert.throws(() => articleSchema(z).parse({ ...post, relatedSites: ['nope'] }));
});

test('requireSources rejects published articles without sources but allows drafts', () => {
  const s = articleSchema(z, { requireSources: true });
  assert.throws(() => s.parse(post), /cite at least one source/);
  assert.doesNotThrow(() => s.parse({ ...post, draft: true }));
  assert.doesNotThrow(() => s.parse({ ...post, sources: [{ title: 's', url: 'https://example.org' }] }));
});

test('readingMinutes and publishedArticles', () => {
  assert.equal(readingMinutes(''), 1);
  assert.equal(readingMinutes('w '.repeat(660)), 3);
  const e = (date, draft = false) => ({ data: { pubDate: new Date(date), draft } });
  const out = publishedArticles([e('2026-01-01'), e('2026-03-01'), e('2026-02-01', true), e('2030-01-01')], Date.parse('2026-06-01'));
  assert.deepEqual(out.map((x) => x.data.pubDate.toISOString().slice(0, 7)), ['2026-03', '2026-01']);
});

test('organization JSON-LD links imprints to the umbrella and the umbrella to imprints', () => {
  const imp = organizationJsonLd(siteFor('hollyandhare'));
  assert.equal(imp.parentOrganization.url, FAMILY.lanternlearn.url);
  assert.equal(imp.logo, 'https://hollyandhare.com/logo.png');
  const umb = organizationJsonLd(siteFor('lanternlearn'));
  assert.equal(umb.parentOrganization, undefined);
  assert.equal(umb.subOrganization.length, imprints().length);
});

test('article JSON-LD carries citations and absolute urls', () => {
  const data = articleSchema(z).parse({
    ...post,
    tags: ['a', 'b'],
    heroImage: '/hero.png',
    sources: [{ title: 'Report', url: 'https://example.org/r', publisher: 'Example Org', published: '2025-05-01' }],
  });
  const ld = articleJsonLd(siteFor('foxandfern'), data, '/blog/t', data.heroImage);
  assert.equal(ld.mainEntityOfPage['@id'], 'https://foxandfernbooks.com/blog/t');
  assert.equal(ld.image, 'https://foxandfernbooks.com/hero.png');
  assert.equal(ld.keywords, 'a, b');
  assert.deepEqual(ld.citation, [{
    '@type': 'CreativeWork', name: 'Report', url: 'https://example.org/r',
    publisher: { '@type': 'Organization', name: 'Example Org' }, datePublished: '2025-05-01',
  }]);
  const bc = breadcrumbJsonLd(siteFor('foxandfern'), [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]);
  assert.equal(bc.itemListElement[1].item, 'https://foxandfernbooks.com/blog');
});
