import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initMenu, menuScript } from '../../src/menu.ts';

// Just enough DOM for initMenu: attributes, listeners, closest() and focus().
class El {
  constructor(tag, parent = null) {
    this.tag = tag;
    this.parent = parent;
    this.attrs = {};
    this.listeners = {};
    this.focused = false;
  }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; }
  addEventListener(type, fn, opts) { (this.listeners[type] ||= []).push({ fn, opts }); }
  dispatch(type, e = {}) {
    const all = this.listeners[type] || [];
    this.listeners[type] = all.filter((l) => !(l.opts && l.opts.once));
    for (const { fn, opts } of all) if (!(opts && opts.signal && opts.signal.aborted)) fn({ target: this, ...e });
  }
  count(type) { return (this.listeners[type] || []).filter((l) => !(l.opts && l.opts.signal && l.opts.signal.aborted)).length; }
  closest(tag) { return this.tag === tag ? this : this.parent && this.parent.closest(tag); }
  focus() { this.focused = true; }
}

function makeHeader() {
  const doc = new El('#document');
  const header = new El('header');
  const btn = new El('button', header);
  btn.setAttribute('aria-expanded', 'false');
  const nav = new El('nav', header);
  const link = new El('a', nav);
  const span = new El('span', nav);
  header.ownerDocument = doc;
  header.querySelector = (sel) => ({ '[data-ll-menu-button]': btn, '[data-ll-nav]': nav })[sel] || null;
  // Events on children bubble to the nav in the real DOM; mimic that here.
  const clickIn = (el) => nav.dispatch('click', { target: el });
  return { doc, header, btn, nav, link, span, clickIn };
}

test('initMenu marks the header collapsible and closed', () => {
  const { header, btn } = makeHeader();
  initMenu(header);
  assert.equal(header.getAttribute('data-menu'), 'closed');
  assert.equal(btn.getAttribute('aria-expanded'), 'false');
});

test('the button toggles the menu open and closed', () => {
  const { header, btn } = makeHeader();
  initMenu(header);
  btn.dispatch('click');
  assert.equal(header.getAttribute('data-menu'), 'open');
  assert.equal(btn.getAttribute('aria-expanded'), 'true');
  btn.dispatch('click');
  assert.equal(header.getAttribute('data-menu'), 'closed');
  assert.equal(btn.getAttribute('aria-expanded'), 'false');
});

test('clicking a nav link closes the menu; clicking elsewhere in the nav does not', () => {
  const { header, btn, link, span, clickIn } = makeHeader();
  initMenu(header);
  btn.dispatch('click');
  clickIn(span);
  assert.equal(header.getAttribute('data-menu'), 'open');
  clickIn(link);
  assert.equal(header.getAttribute('data-menu'), 'closed');
});

test('Escape closes an open menu and returns focus to the button', () => {
  const { doc, header, btn } = makeHeader();
  initMenu(header);
  doc.dispatch('keydown', { key: 'Escape' });
  assert.equal(btn.focused, false, 'closed menu ignores Escape');
  btn.dispatch('click');
  doc.dispatch('keydown', { key: 'Enter' });
  assert.equal(header.getAttribute('data-menu'), 'open');
  doc.dispatch('keydown', { key: 'Escape' });
  assert.equal(header.getAttribute('data-menu'), 'closed');
  assert.equal(btn.getAttribute('aria-expanded'), 'false');
  assert.equal(btn.focused, true);
});

test('running initMenu again on the same header adds no listeners', () => {
  const { doc, header, btn } = makeHeader();
  initMenu(header);
  initMenu(header);
  assert.equal(doc.count('keydown'), 1);
  btn.dispatch('click');
  assert.equal(header.getAttribute('data-menu'), 'open', 'one toggle per click, not two');
});

test('a ClientRouter page swap drops the header\'s Escape listener', () => {
  const { doc, header } = makeHeader();
  initMenu(header);
  assert.equal(doc.count('keydown'), 1);
  doc.dispatch('astro:before-swap');
  assert.equal(doc.count('keydown'), 0);
  const next = makeHeader();
  next.header.ownerDocument = doc;
  initMenu(next.header);
  assert.equal(doc.count('keydown'), 1, 'only the new header listens');
});

test('initMenu leaves a header without a button or nav untouched', () => {
  const header = new El('header');
  header.querySelector = () => null;
  initMenu(header);
  assert.equal(header.getAttribute('data-menu'), null);
});

test('menuScript is a self-contained call scoped to its own header', () => {
  assert.match(menuScript, /^\(function initMenu\(/);
  assert.match(menuScript, /\)\(document\.currentScript\.parentElement\);$/);
  assert.doesNotThrow(() => new Function(menuScript));
});
