# Cloudflare Worker code snapshots

Copies of Worker code pulled from the Chris Brock LLC Cloudflare account on
2026-10-21 (D328), so nothing is lost if a Worker is deleted. Secret values
are never stored here; `settings.json` lists binding names only.

| Worker | State | Notes |
| --- | --- | --- |
| `lanternlearn-api` | Unused (Cloudflare "Hello World" starter, April 2026). Safe to delete. | No routes, no bindings, nothing in any repo calls it. |
| `lantern-newsletter` | **Keep.** Serves emailpreferences.lanternlearn.com. | Handles unsubscribe and preference links in emails sent to the four Resend audiences. Deleting it would break unsubscribe links in any email already sent. |
| `parked-redirects` | Live, shared with non-Lantern domains. | `index.js` is the code as found. `index.d328.js` is the D328 change: tomorrowtrail.com and trailtotomorrow.com 301 to the Tomorrow Trail course page, lodestarstem.com 301 to lanternlearn.com. |
