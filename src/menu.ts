/**
 * The phone menu (owner decision D63). SiteHeader inlines `initMenu` as a tiny
 * script that runs against its own <header>, so several headers on one page
 * never share state. Without JS the header is never marked collapsible and
 * the nav stays visible; under 768px the header's scoped CSS hides the nav
 * until the menu button opens it.
 */
export function initMenu(header: HTMLElement): void {
  // Already set up (a re-run on the same header): nothing to do.
  if (header.getAttribute('data-menu') !== null) return;
  const btn = header.querySelector('[data-ll-menu-button]') as HTMLButtonElement | null;
  const nav = header.querySelector('[data-ll-nav]') as HTMLElement | null;
  if (!btn || !nav) return;
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  const set = (open: boolean) => {
    header.setAttribute('data-menu', open ? 'open' : 'closed');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  set(false);
  btn.addEventListener('click', () => set(!isOpen()));
  nav.addEventListener('click', (e: Event) => {
    const t = e.target as Element | null;
    if (t && t.closest && t.closest('a')) set(false);
  });
  // The Escape listener lives on the document, which Astro's ClientRouter
  // keeps across page swaps; drop it when this header is swapped out so
  // listeners do not pile up from page to page.
  const doc = header.ownerDocument;
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  doc.addEventListener(
    'keydown',
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen()) {
        set(false);
        btn.focus();
      }
    },
    ctrl ? { signal: ctrl.signal } : undefined,
  );
  if (ctrl) doc.addEventListener('astro:before-swap', () => ctrl.abort(), { once: true });
}

/**
 * The inline script SiteHeader renders as the last child of its <header>. It
 * carries data-astro-rerun so ClientRouter runs it again for each new page.
 */
export const menuScript = `(${initMenu.toString()})(document.currentScript.parentElement);`;
