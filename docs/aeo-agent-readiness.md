# AI agent readiness (AEO)

Chris pasted the Cloudflare "agent readiness" checks (isitagentready.com) on
2026-10-27. This page records each item: what it asks for, what we did, the PR
and how it was verified. Goal: AI answer engines and agents can find, read,
quote and link the free courses (answer-engine optimization).

Live sites covered: **lanternlearn.com** (repo `lanternlearn-site`, static
Astro on Cloudflare Pages) and **learn.lanternlearn.com** (repo
`rocket-and-raven-press`, Astro SSR on Cloudflare Pages). rocketandraven.com
and foxandfernbooks.com 301 to lanternlearn.com (D327) and hollyandhare.com
redirects too (D103), so they need nothing of their own.

Decisions: D370 to D374 in `decisions.md`.

Scan: `POST https://isitagentready.com/api/scan` with
`{"url": "https://lanternlearn.com"}` (and the learn host).

## Summary

| # | Item | Result | Decision | PRs |
| --- | --- | --- | --- | --- |
| 1 | Content Signals in robots.txt | Done | D370 | LL-site #80, press #152 |
| 2 | Markdown for Agents | Done | D371 | LL-site #80, press #152 |
| 3 | API catalog (RFC 9727) | Done | D372 | LL-site #80, press #152 |
| 4 | Link response headers | Done | D372 | LL-site #80, press #152 |
| 5 | auth.md | Published; scanner check fails by design | D373 | LL-site #80, press #152 |
| 6 | OAuth/OIDC discovery | Not applicable | D373 | none |
| 7 | OAuth Protected Resource Metadata | Not applicable | D373 | none |
| 8 | A2A Agent Card | Not applicable for now | D374 | none |
| 9 | Agent Skills discovery index | Done (lanternlearn.com) | D372 | LL-site #80 |
| 10 | MCP Server Card | Not applicable for now | D374 | none |
| 11 | Web Bot Auth | Not applicable | none | none |
| 12 | WebMCP | Done (lanternlearn.com) | D372 | LL-site #80 |
| 13 | DNS-AID | Not applicable for now | D374 | none |
| 14 | ACP | Not applicable | D138 | none |
| 15 | AP2 | Not applicable | D138 | none |
| 16 | MPP | Not applicable | D138 | none |
| 17 | UCP | Not applicable | D138 | none |
| 18 | x402 | Not applicable | D138 | none |

## 1. Content Signals

- **Asked:** `Content-Signal` directives in robots.txt for `ai-train`,
  `search` and `ai-input` (contentsignals.org).
- **Done:** `Content-Signal: search=yes, ai-input=yes, ai-train=no` under
  `User-agent: *` on both sites. Search and AI answers may use, quote and link
  our pages; we ask not to be used for model training (D370, Chris chose A
  on 2026-10-28). On learn.lanternlearn.com, when the admin indexing switch is
  off, robots.txt sends `search=no, ai-input=no, ai-train=no` with the
  blanket `Disallow: /`.
- **Where:** `lanternlearn-site/public/robots.txt`,
  `rocket-and-raven-press/src/pages/robots.txt.ts`.

## 2. Markdown for Agents

- **Asked:** `Accept: text/markdown` returns Markdown; HTML stays the default.
- **Done (D371):** done in code rather than Cloudflare's zone toggle, so it
  works on any plan and is versioned.
  - lanternlearn.com: `scripts/agent-files.mjs` (postbuild) writes
    `index.md` beside every built `index.html` (front matter with title,
    description and URL, then the page's `<main>` as Markdown, links made
    absolute). `functions/_middleware.js` serves it when the Accept header
    prefers `text/markdown`, with `Vary: Accept` and `x-markdown-tokens`.
    `public/_routes.json` keeps the function off images and `/_astro/*`.
  - learn.lanternlearn.com: `src/lib/agentReadiness.ts`, first in the
    middleware chain, converts the page's own HTML response, so a gated page
    can never leak more as Markdown than as HTML.
- **Library:** `node-html-markdown` (MIT, pure JavaScript, runs in Workers).

## 3. API catalog

- **Asked:** `/.well-known/api-catalog`, `application/linkset+json`, with
  `service-desc`, `service-doc` and optional `status` per API.
- **Done (D372):** both hosts list one API, the public catalog feed
  `https://learn.lanternlearn.com/api/public/catalog.json`, with its
  OpenAPI 3.1 description (`/api/public/openapi.json`, new) and docs page
  (`/developers`, new). Admin, account, progress and other internal APIs are
  deliberately not listed. No `status` link: there is no public health
  endpoint and one was not invented.

## 4. Link response headers

- **Done (D372):** the home page of each site sends `Link` headers:
  `api-catalog`, `service-desc`, `service-doc`, and `describedby`
  (lanternlearn.com: the agent skills index; learn host: `/auth.md`).
  lanternlearn.com also links its Markdown copy as `alternate`.
  Set in code (Pages middleware and Astro middleware), not in a `_headers`
  file, because the same middleware already handles these responses.

## 5. auth.md

- **Done (D373 A):** `/auth.md` on both hosts, H1 `# Lantern Learn auth.md`,
  self-contained: agents need no credentials, there is no agent registration
  or OAuth, every course and week opens without signing in, and accounts are
  for adults who sign in themselves with an email link. Agents are told not
  to create accounts or sign in for a person.
- **Scanner:** `authMd` stays `fail` ("auth.md exists but does not describe
  agent registration"): it looks for registration markers, and we have no
  registration to describe. Adding markers for a registration that does not
  exist would be false, so it fails by design under D373 A.

## 6. OAuth/OIDC discovery and 7. OAuth Protected Resource Metadata

- **Not applicable (D373 A, Chris 2026-10-28):** the platform has magic-link
  sign-in for parents and teachers, no OAuth or OIDC server and no protected
  API for agents. Publishing `/.well-known/openid-configuration`,
  `/.well-known/oauth-authorization-server` or
  `/.well-known/oauth-protected-resource` would describe servers that do not
  exist. Option B (build OAuth so agents can act for a parent) was declined; it
  would be a large, COPPA-sensitive build.

## 8. A2A Agent Card, 10. MCP Server Card and 13. DNS-AID

- **Not applicable for now (D374 A, Chris 2026-10-28):** there is no A2A agent or
  MCP server, so no card can honestly be published. DNS-AID records
  (`_mcp._agents`, `_a2a._agents`) must point at real agent endpoints, so they
  wait too. DNSSEC is also off for lanternlearn.com (no DS record at the
  registry, checked 2026-10-27); DNS-AID wants signed zones.
- **If D374 is revisited (B or C):** build a read-only MCP server on
  learn.lanternlearn.com over the public catalog feed, publish
  `/.well-known/mcp/server-card.json`, then add
  `_mcp._agents.lanternlearn.com SVCB` and turn on DNSSEC (Cloudflare DNS
  settings, then the DS record at the registrar).

## 9. Agent Skills discovery index

- **Done (lanternlearn.com):** `/.well-known/agent-skills/index.json`
  (schema v0.2.0) with one skill, `find-free-courses`
  (`/.well-known/agent-skills/find-free-courses/SKILL.md`): how to find a
  course by grade and subject from `/courses.json`, read a course page as
  Markdown, and link the person to it, with rules (no sign-ups, no invented
  facts). The digest is computed at build time, so it can't go stale.
- New JSON feeds on lanternlearn.com for agents: `/courses.json` (released
  courses, same filter as `/courses`) and `/releases.json` (the release
  calendar).
- learn.lanternlearn.com does not repeat the index; its `/developers` page
  links to it.

## 11. Web Bot Auth

- **Not applicable:** Web Bot Auth is for sites that send bot requests to
  other sites and sign them. Lantern Learn sends none. No key directory is
  published, and no keys are created or committed.

## 12. WebMCP

- **Done (lanternlearn.com, D372):** `src/components/WebMcp.astro`, loaded
  on every page, registers four tools with `document.modelContext`
  (falling back to `navigator.modelContext`): `search_courses`, `get_course`,
  `list_releases` (read-only) and `open_page` (same-site navigation only).
  It does nothing in browsers without the API, reads only `/courses.json`
  and `/releases.json`, and sends nothing anywhere. Tools unregister on
  `pagehide` through an `AbortController`.

## 14 to 18. Commerce: ACP, AP2, MPP, UCP, x402

- **Not applicable:** every course is free with nothing for sale (D106,
  D138), there is no checkout, and no wallet or payment processor for agents.
  A paywall (x402) would break the 100%-free rule. The new
  `/api/public/openapi.json` carries no `x-payment-info`.

## Verification (2026-10-27, after deploy)

Scanner results on the live sites. Before this work every item below except
robotsTxt, sitemap and robotsTxtAiRules failed.

| Check | lanternlearn.com | learn.lanternlearn.com |
| --- | --- | --- |
| contentSignals | pass | pass |
| markdownNegotiation | pass | pass |
| apiCatalog | pass | pass |
| linkHeaders | pass | pass |
| agentSkills | pass | fail (index lives on lanternlearn.com) |
| webMcp | pass | fail (tools live on lanternlearn.com) |
| authMd | fail by design (D373 A) | fail by design (D373 A) |
| oauthDiscovery, oauthProtectedResource | fail by design (D373 A) | same |
| mcpServerCard, a2aAgentCard, dnsAid | fail, not applicable (D374 A) | same |
| webBotAuth | neutral (not applicable) | neutral |
| x402, mpp, ucp, acp, ap2 | neutral (not a commerce site) | neutral |

Also checked by hand on both hosts: `curl -H "Accept: text/markdown"` returns
`text/markdown` with `x-markdown-tokens`, a browser Accept header still gets
HTML with `Vary: Accept`, each discovery file has the right content type, and
a missing `.md` path on lanternlearn.com stays an HTML page. WebMCP tools were
checked in Chromium with a stub `document.modelContext`: all four register and
return results.

The scanner also lists `ard` (capability manifest) and
`personalAgentProtocol` (Poppy manifest). They were not among Chris's items
and stay failing; they describe agent services we do not run.
