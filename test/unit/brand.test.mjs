// The Lantern Learn design system (D57, D58): base frame, imprint skins, family bar links.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BASE, SKINS, FAMILY, PLATFORM_IMPRINT, baseDecls, skinDecls, brandCss, scopedSkinsCss, coursesFor, PLATFORM } from '../../src/index.ts';

test('every family site has a skin, keyed the same', () => {
  assert.deepEqual(Object.keys(SKINS).sort(), Object.keys(FAMILY).sort());
  for (const [k, s] of Object.entries(SKINS)) assert.equal(s.key, k);
  assert.equal(SKINS.rocketandraven.dark, true);
  assert.equal(SKINS.foxandfern.dark, false);
});

test('base is the warm light Lantern Learn frame (D58)', () => {
  assert.equal(BASE.bg, '#faf6e9');
  assert.equal(BASE.accent, '#a73b04');
  const d = baseDecls();
  assert.match(d, /--ll-base-bg:250 246 233;/);
  assert.match(d, /--ll-base-font:"Inter", system-ui, sans-serif;/);
});

test('skin declarations carry colors, fonts and radius', () => {
  const d = skinDecls(SKINS.foxandfern);
  assert.match(d, /--ll-skin-brand:82 113 67;/);
  assert.match(d, /--ll-skin-on-brand:255 255 255;/);
  assert.match(d, /--ll-skin-display:"Fredoka", system-ui, sans-serif;/);
  assert.match(d, /--ll-radius:18px;/);
  assert.match(brandCss('rocketandraven'), /^:root\{--ll-base-bg:.*--ll-radius:6px;\}$/);
  const scoped = scopedSkinsCss();
  for (const k of Object.keys(SKINS)) assert.ok(scoped.includes(`[data-skin="${k}"]{`), k);
});

test('catalog links filter to the imprint on the platform (D59)', () => {
  assert.equal(coursesFor('foxandfern'), `${PLATFORM.courses}?imprint=fox-and-fern`);
  assert.equal(coursesFor('rocketandraven'), `${PLATFORM.courses}?imprint=rocket-and-raven`);
  assert.equal(coursesFor('lanternlearn'), PLATFORM.courses);
  // D103: Holly & Hare is no longer a catalog filter.
  assert.deepEqual(Object.values(PLATFORM_IMPRINT).sort(), ['fox-and-fern', 'rocket-and-raven']);
});

// Brand colors on their own backgrounds must stay readable (WCAG AA for UI text, 4.5:1).
function lum(hex) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

test('skin and base text pairs meet 4.5:1 contrast', () => {
  const pairs = [[BASE.text, BASE.bg], [BASE.muted, BASE.bg], [BASE.accent, BASE.bg], [BASE.barText, BASE.bar], [BASE.barAccent, BASE.bar]];
  for (const s of Object.values(SKINS)) {
    pairs.push([s.text, s.bg], [s.muted, s.bg], [s.onBrand, s.brand], [s.onAccent, s.accent], [s.text, s.surface]);
  }
  for (const [fg, bg] of pairs) assert.ok(ratio(fg, bg) >= 4.5, `${fg} on ${bg}: ${ratio(fg, bg).toFixed(2)}`);
});
