/**
 * The phone menu (owner decision D63). SiteHeader inlines `initMenu` as a tiny
 * script that runs against its own <header>, so several headers on one page
 * never share state. Without JS the header is never marked collapsible and
 * the nav stays visible; under 768px the header's scoped CSS hides the nav
 * until the menu button opens it.
 */
export function initMenu(header: HTMLElement): void {
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
  header.ownerDocument.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen()) {
      set(false);
      btn.focus();
    }
  });
}

/** The inline script SiteHeader renders as the last child of its <header>. */
export const menuScript = `(${initMenu.toString()})(document.currentScript.parentElement);`;
