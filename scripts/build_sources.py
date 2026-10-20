#!/usr/bin/env python3
"""Rebuild standards/sources.json (v2) from the v1 original, the source catalog
and the course data in cbrock84/rocket-and-raven-press.

Usage: python3 scripts/build_sources.py ../rocket-and-raven-press [v1-status.txt]

v1 entries are kept exactly (title, url, description) and gain new fields.
New keys and entries come only from pages a live course already cites in its
SOURCES.md, or from standards/source-catalog.md. Nothing is invented.
"""
import collections, datetime, glob, json, os, re, sys
from urllib.parse import urlparse

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PRESS = os.path.abspath(sys.argv[1])
STATUS_FILE = sys.argv[2] if len(sys.argv) > 2 else None
TODAY = datetime.date.today().isoformat()

GRADE_IDS = ['prek', 'k', '1st', '2nd', '3rd', '4th', '5th', '6th_8th', '9th_12th', 'adult']
V1_SUBJECTS = ['math', 'reading_ela', 'writing', 'science', 'social_studies', 'critical_thinking']
NEW_SUBJECTS = ['coding_cs', 'ai_literacy', 'engineering_technology', 'health_body', 'nutrition_cooking', 'life_skills']

# Course slug -> (grade ids, subject slugs). Taken from each course's meta.json
# grade band and series; written out so the mapping is reviewable.
def course_grades(slug, band):
    explicit = {
        'phonics-prek-k': ['prek', 'k'], 'tomorrow-trail-k1': ['k', '1st'],
        'story-trail-g2-3': ['2nd', '3rd'], 'inside-the-machine-g1-g2': ['1st', '2nd'],
        'inside-the-machine-g3-g5': ['3rd', '4th', '5th'], 'code-crew-g6-plus': ['6th_8th'],
        'intro-cs-g9-10': ['9th_12th'], 'python-g11-12': ['9th_12th'], 'applied-ai': ['adult'],
        'astronomy-year': ['k', '1st', '2nd', '3rd', '4th', '5th'],
        'builders-lab': ['k', '1st', '2nd', '3rd', '4th', '5th'],
        'everyday-machines': ['k', '1st', '2nd', '3rd', '4th', '5th'],
    }
    if slug in explicit:
        return explicit[slug]
    if slug.endswith('-k2'):
        return ['k', '1st', '2nd']
    if slug.endswith('-g3-5'):
        return ['3rd', '4th', '5th']
    if slug.endswith('-g6-8'):
        return ['6th_8th']
    if slug.endswith('-g9-12'):
        return ['9th_12th']
    m = re.search(r'-(k|g[1-5])$', slug)
    if m:
        return [{'k': 'k', 'g1': '1st', 'g2': '2nd', 'g3': '3rd', 'g4': '4th', 'g5': '5th'}[m.group(1)]]
    return {'G6-8': ['6th_8th'], 'G9-12': ['9th_12th'], 'adult': ['adult']}.get(band, [])

SERIES_SUBJECTS = {
    'code-crew': ['coding_cs'], 'ai-explorers': ['ai_literacy', 'coding_cs'], 'applied-ai': ['ai_literacy'],
    'body-lab': ['health_body', 'science'], 'kitchen': ['nutrition_cooking', 'math'],
    'home-helpers': ['life_skills'], 'builders-lab': ['engineering_technology', 'science'],
    'everyday-machines': ['engineering_technology', 'science'], 'bike-shop': ['engineering_technology', 'science'],
    'number-trail': ['math'], 'phonics': ['reading_ela'], 'story-trail': ['reading_ela'],
    'reading-writing': ['reading_ela', 'writing'], 'tomorrow-trail': ['reading_ela', 'math', 'science'],
}
SLUG_SUBJECTS = {'data-society-g9-12': ['coding_cs', 'math'], 'inside-the-machine-g1-g2': ['engineering_technology', 'coding_cs'],
                 'inside-the-machine-g3-g5': ['engineering_technology', 'coding_cs']}

def course_subjects(slug, meta):
    if slug in SLUG_SUBJECTS:
        return SLUG_SUBJECTS[slug]
    if meta.get('series') in SERIES_SUBJECTS:
        return SERIES_SUBJECTS[meta['series']]
    return {'math': ['math'], 'science': ['science'], 'astronomy': ['science'], 'reading': ['reading_ela'],
            'engineering': ['engineering_technology'], 'coding': ['coding_cs']}.get(meta.get('subject'), [])

# Publisher kinds, in content-standards section 4 priority order.
STANDARDS_HOSTS = {'thecorestandards.org', 'corestandards.org', 'nextgenscience.org', 'csteachers.org',
                   'apcentral.collegeboard.org', 'ai4k12.org', 'naeyc.org', 'socialstudies.org', 'nctm.org',
                   'nsta.org', 'shapeamerica.org', 'eclkc.ohs.acf.hhs.gov', 'nationalacademies.org',
                   # Technical standards and specification bodies (Code Crew, Inside the Machine).
                   'w3.org', 'whatwg.org', 'unicode.org', 'rfc-editor.org', 'icann.org', 'usb.org',
                   'ecma-international.org'}
MUSEUM_HOSTS = ('si.edu', 'exploratorium.edu', 'metmuseum.org', 'nybg.org', 'fi.edu', 'cmog.org', 'cdm.org',
                'kohlchildrensmuseum.org', 'lawrencehallofscience.org', 'missouribotanicalgarden.org',
                'samnoblemuseum.ou.edu', 'loc.gov', 'invent.org', 'rhs.org.uk', 'ncsm.city.nagoya.jp',
                'heronswoodgarden.org', 'computerhistory.org', 'longwoodgardens.org',
                'smithsonianeducation.org')
EDU_ORG_HOSTS = ('openstax.org', 'libretexts.org', 'kidshealth.org', 'gutenberg.org', 'python.org', 'docs.oracle.com',
                 'teachengineering.org', 'sciencelearn.org.nz', 'acs.org', 'asme.org', 'ncert.nic.in', 'nationalmaglab.org',
                 'stardate.org', 'healthychildren.org', 'literacyworldwide.org', 'readingrockets.org', 'icivics.org',
                 'education.nationalgeographic.org', 'iowapbs.org', 'noirlab.edu', 'storyweaver.org.in',
                 'musictheory.net', 'lichess.org', 'phet.colorado.edu', 'ipm.org', 'discovere.org', 'sfi.ie',
                 'itu.int', 'mgnv.org', 'cs.gordon.edu', 'aao.org', 'nm.org', 'peepandthebigwideworld.com', 'tildesites.geneseo.edu', 'learn.genetics.utah.edu',
                 'safekids.org', 'audubon.org', 'ncwit.org', 'missingkids.org',
                 'floridamatrix.agclassroom.org', 'training.digitallearn.org')
# Hosts judged by hand (2026-10-12 source audits) that the suffix rules miss.
HOST_KINDS = {'nestwatch.org': 'university',          # Cornell Lab of Ornithology project
              'uwaterloo.atlassian.net': 'university',  # University of Waterloo course wiki
              'uwspace.uwaterloo.ca': 'university',     # University of Waterloo institutional repository
              'gbif.org': 'government',                 # Global Biodiversity Information Facility, intergovernmental
              'patents.google.com': 'government',       # mirror of USPTO patent records
              'json.org': 'education_org',              # format author's reference page, not a standards body (the standards are ECMA-404 and RFC 8259)
              'data.epo.org': 'government',             # European Patent Office publication server (intergovernmental patent office)
              'collection.sciencemuseumgroup.org.uk': 'museum_library',  # Science Museum Group collection record
              'itftennis.com': 'standards_body'}             # International Tennis Federation, the rules body for tennis (Rules of Tennis)
# Official project sources hosted on GitHub.
URL_PREFIX_KINDS = {'https://raw.githubusercontent.com/python/cpython/': 'education_org'}

def host(url):
    h = urlparse(url).netloc.lower().split(':')[0]
    return h[4:] if h.startswith('www.') else h

def kind(url):
    h = host(url)
    for p, k in URL_PREFIX_KINDS.items():
        if url.startswith(p):
            return k
    for m, k in HOST_KINDS.items():
        if h == m or h.endswith('.' + m):
            return k
    if h in STANDARDS_HOSTS or any(h.endswith('.' + s) for s in STANDARDS_HOSTS):
        return 'standards_body'
    if re.search(r'(\.gov|\.mil|\.gov\.[a-z]+|\.int)$', h) or h.endswith('.nic.in'):
        return 'government'
    if any(h == m or h.endswith('.' + m) for m in MUSEUM_HOSTS):
        return 'museum_library'
    if re.search(r'(\.edu|\.ac\.[a-z]+|\.edu\.[a-z]+)$', h) or 'extension' in h:
        return 'university'
    if any(h == m or h.endswith('.' + m) or h.endswith(m) for m in EDU_ORG_HOSTS):
        return 'education_org'
    return 'review'

def frameworks_for(url):
    h = host(url)
    if 'corestandards' in h:
        return ['CCSS-M'] if '/Math/' in url or '/math' in url.lower() else (['CCSS-ELA'] if 'ELA' in url else ['CCSS'])
    if 'nextgenscience' in h:
        return ['NGSS']
    if 'csteachers' in h:
        return ['CSTA']
    if 'apcentral' in h:
        return ['AP']
    if 'ai4k12' in h:
        return ['AI4K12']
    if 'naeyc' in h:
        return ['NAEYC DAP']
    if 'socialstudies.org' in h:
        return ['NCSS C3']
    return []

# ---------- the source catalog (standards/source-catalog.md) ----------
def parse_catalog():
    out, section = [], None
    reuse_by_section = {'Reuse': 'reuse', 'Fact sources (write our own text)': 'fact_source',
                        'Link only': 'link_only', 'Avoid': 'avoid'}
    for line in open(os.path.join(ROOT, 'standards', 'source-catalog.md'), encoding='utf-8'):
        if line.startswith('## '):
            section = reuse_by_section.get(line[3:].strip())
            header = None
            continue
        if not section or not line.startswith('|') or line.startswith('| ---'):
            continue
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if cells[0] in ('Source', 'Reason'):
            header = cells
            continue
        row = dict(zip(header, cells))
        urls = re.findall(r'https?://[^\s|;]+', line)
        out.append({
            'title': row.get('Source'), 'owner': row.get('Owner'), 'license': row.get('License'),
            'reuse': section, 'use': row.get('Use'), 'fits': row.get('Fits'),
            'url': (row.get('URL') or (urls[0] if urls else None)),
            'license_url': row.get('License URL'), 'notes': row.get('Notes') or row.get('Reason'),
            'checked': '2026-10-12',
        })
    return out

# ---------- courses ----------
URL_RE = re.compile(r'https?://[^\s)|>"`\]]+')
# Some SOURCES.md files name a page as a bare host path in parentheses,
# for example "(thecorestandards.org/Math/Content/1)".
BARE_RE = re.compile(r'\(((?:www\.)?(?:[a-z0-9-]+\.)+(?:org|gov|edu|com|net|int|uk|nz)(?:/[^\s)]*)?)\)')
# Courses that share another course's SOURCES.md.
SOURCES_ALIAS = {'phonics-g1': 'phonics-prek-k'}

def parse_sources_md(path):
    """Return [(url, title, publisher)] from SOURCES.md tables and bare URLs."""
    found = []
    for line in open(path, encoding='utf-8'):
        urls = [u.rstrip('.,;:') for u in URL_RE.findall(line)]
        urls += ['https://' + b.rstrip('.,;:') for b in BARE_RE.findall(line) if not any(b in u for u in urls)]
        if not urls:
            continue
        title = publisher = None
        if line.startswith('|'):
            cells = [c.strip() for c in line.strip().strip('|').split('|')]
            if len(cells) >= 3 and URL_RE.match(cells[-1] or ''):
                title, publisher = cells[-3], cells[-2]
            elif len(cells) >= 2 and BARE_RE.search(cells[1] or ''):
                title = BARE_RE.sub('', cells[1]).strip()
        for u in urls:
            found.append((u, title, publisher))
    return found

def course_codes(slug):
    path = os.path.join(PRESS, 'src', 'data', 'workbooks', slug + '.json')
    codes = {'csta': set(), 'ccss': set(), 'ngss': set()}
    if not os.path.exists(path):
        return codes
    wb = json.load(open(path, encoding='utf-8'))
    for w in wb.get('weeks', []):
        for fam in codes:
            v = w.get(fam)
            if isinstance(v, str):
                v = [v]
            for c in v or []:
                if isinstance(c, dict):
                    c = c.get('code') or c.get('id')
                if c:
                    codes[fam].add(str(c).strip())
    return {k: sorted(v) for k, v in codes.items() if v}

def main():
    v1 = json.load(open(os.path.join(ROOT, 'standards', 'sources-v1-2026-06.json'), encoding='utf-8'))
    status = {}
    if STATUS_FILE:
        for line in open(STATUS_FILE):
            u, c = line.split()[:2]
            status[u] = c
    catalog = parse_catalog()
    cat_by_host = {}
    for c in catalog:
        for u in filter(None, [c.get('url'), c.get('license_url')]):
            cat_by_host.setdefault(host(u), c)

    # Without a fresh link-check file, keep each URL's last recorded result
    # (with its original date) instead of wiping it.
    prev_status = {}
    prev_path = os.path.join(ROOT, 'standards', 'sources.json')
    if not STATUS_FILE and os.path.exists(prev_path):
        prev = json.load(open(prev_path, encoding='utf-8'))
        for k, entries in prev.items():
            if k.startswith('_'):
                continue
            for e in entries:
                if e.get('url_status'):
                    prev_status.setdefault(e['url'], e['url_status'])

    def status_note(u):
        c = status.get(u)
        if c is None:
            return prev_status.get(u)
        if c == '200':
            return f'200 on {TODAY}'
        if c == '403':
            return f'403 on {TODAY} (site blocks automated checks; open in a browser)'
        return f'{c} on {TODAY}: page moved or gone; needs a replacement from the same publisher'

    out = {'_meta': {
        'version': 2, 'updated': TODAY,
        'description': ("Lantern Learn's foundation source list. Every fact, standard and activity in a Lantern Learn, "
                        "Rocket & Raven or Fox & Fern course is based on sources listed here (or added here before the "
                        "content ships). Keys follow '{grade_id}_{subject_slug}'. Each key holds a list of sources. "
                        "Pre-K has no Common Core alignment; those entries emphasize developmentally appropriate practice."),
        'history': ['v1 (2026-06): Chris Brock, prek-5th x 6 subjects, 3 entries each, {title,url,description}; '
                    'kept verbatim in standards/sources-v1-2026-06.json.',
                    f'v2 ({TODAY}): rebuilt by scripts/build_sources.py; v1 entries kept, grade ids 6th_8th, 9th_12th, adult '
                    'and six subjects added from the live courses, new columns, _courses and _open_resources added.'],
        'grade_ids': GRADE_IDS, 'subject_slugs': V1_SUBJECTS + NEW_SUBJECTS,
        'subject_slug_map': dict(v1['_meta']['subject_slug_map'], **{
            'Coding & Computer Science': 'coding_cs', 'AI Literacy': 'ai_literacy',
            'Engineering & Technology': 'engineering_technology', 'Health & the Body': 'health_body',
            'Nutrition & Cooking': 'nutrition_cooking', 'Life Skills': 'life_skills'}),
        'entry_fields': {
            'title': 'Page title.', 'url': 'Page URL.', 'description': 'What the source is for.',
            'publisher': 'Who publishes it.',
            'kind': 'standards_body | government | museum_library | university | education_org | review (not yet judged authoritative)',
            'frameworks': 'Standards frameworks it defines (CCSS-M, CCSS-ELA, NGSS, CSTA, AP, AI4K12, NAEYC DAP, NCSS C3).',
            'reuse': 'fact_source (check facts, write our own text) | reuse (license lets us adapt; see _open_resources) | link_only | avoid',
            'license': 'License when checked; null means not checked, so treat as fact_source only.',
            'cited_by': 'Course slugs whose SOURCES.md cites this exact URL.',
            'origin': 'v1 | course SOURCES.md | source-catalog.md',
            'url_status': 'Result of the last link check.'},
        'rules': [
            'Base every course fact, standard code and activity on a source in this file. If a needed source is missing, add it here first (with its publisher and kind) in the same change.',
            'Standards codes must come from a key whose frameworks list that standard family.',
            'Copy or adapt material only when reuse is "reuse" and follow the license in _open_resources; otherwise write original text.',
            'Prefer standards_body, then government and museum_library, then university, then education_org. A "review" source needs a better one before new content relies on it.',
            'Never fabricate a source or URL. Open every URL before citing it.',
            '_media lists every photo, sim or story a course reuses, with its credit and license. Add a reused item to the course SOURCES.md (table columns: where, facts, title, credit, URL) and rebuild.'],
    }}

    # v1 keys, kept in order, with new columns.
    for key, entries in v1.items():
        if key == '_meta':
            continue
        out[key] = []
        for e in entries:
            n = dict(e)
            n.update({'publisher': None, 'kind': kind(e['url']), 'frameworks': frameworks_for(e['url']),
                      'reuse': 'fact_source', 'license': None, 'cited_by': [], 'origin': 'v1',
                      'url_status': status_note(e['url'])})
            out[key].append(n)

    # Courses.
    courses, key_cites = {}, collections.defaultdict(collections.Counter)
    page_meta = {}
    for mf in sorted(glob.glob(os.path.join(PRESS, 'src', 'content', 'courses', '*', 'meta.json'))):
        meta = json.load(open(mf, encoding='utf-8'))
        slug = meta['slug']
        if not meta.get('publish'):
            continue
        grades, subjects = course_grades(slug, meta.get('grade_band')), course_subjects(slug, meta)
        keys = [f'{g}_{s}' for g in grades for s in subjects]
        smd = os.path.join(PRESS, 'scripts', 'course-gen', 'courses', SOURCES_ALIAS.get(slug, slug), 'SOURCES.md')
        cites = parse_sources_md(smd) if os.path.exists(smd) else []
        urls = collections.Counter(u for u, _, _ in cites)
        for u, t, p in cites:
            if u not in page_meta or (t and not page_meta[u][0]):
                page_meta[u] = (t, p)
        hosts = collections.Counter(host(u) for u in urls.elements())
        review = sorted({host(u) for u in urls if kind(u) == 'review'})
        codes = course_codes(slug)
        flags = []
        if not cites:
            flags.append('No SOURCES.md: no lesson fact is traced to a source. Needs a source audit before more content ships.')
        if review:
            flags.append('Cites sites not yet judged authoritative (see review_hosts); replace or justify.')
        courses[slug] = {
            'title': meta.get('title'), 'imprint': meta.get('imprint') or 'rocket-and-raven',
            'series': meta.get('series'), 'grade_band': meta.get('grade_band'), 'subject': meta.get('subject'),
            'keys': keys, 'standards': codes,
            'sources_md': f'rocket-and-raven-press/scripts/course-gen/courses/{SOURCES_ALIAS.get(slug, slug)}/SOURCES.md' if cites else None,
            'cited_pages': len(urls), 'top_hosts': [h for h, _ in hosts.most_common(8)],
            'review_hosts': review, 'flags': flags,
        }
        for k in keys:
            for u, n in urls.items():
                key_cites[k][u] += n

    # New entries per key: every page its courses cite, standards pages first,
    # then by citation count. No cap: every entry here is a page a course in
    # this key cites, and dropping one would leave that course's facts or
    # standards codes untraced to a listed source. (Pages judged "review" are
    # left out and flagged on the course instead.)
    url_courses = collections.defaultdict(set)
    for slug, c in courses.items():
        smd = os.path.join(PRESS, 'scripts', 'course-gen', 'courses', SOURCES_ALIAS.get(slug, slug), 'SOURCES.md')
        if os.path.exists(smd):
            for u, _, _ in parse_sources_md(smd):
                url_courses[u].add(slug)
    for k in sorted(key_cites):
        existing = {e['url'] for e in out.get(k, [])}
        ranked = sorted(key_cites[k].items(),
                        key=lambda kv: (kind(kv[0]) != 'standards_body', kind(kv[0]) == 'review', -kv[1], kv[0]))
        added = []
        for u, n in ranked:
            if u in existing or kind(u) == 'review':
                continue
            t, p = page_meta.get(u, (None, None))
            cat = cat_by_host.get(host(u))
            added.append({
                'title': t or host(u), 'url': u,
                'description': f'Cited {n} time(s) in the SOURCES.md of: ' + ', '.join(sorted(url_courses[u] & {s for s, c in courses.items() if k in c['keys']})) + '.',
                'publisher': p, 'kind': kind(u), 'frameworks': frameworks_for(u),
                'reuse': (cat['reuse'] if cat and cat['reuse'] in ('reuse', 'link_only') else 'fact_source'),
                'license': cat['license'] if cat else None,
                'cited_by': sorted(url_courses[u]), 'origin': 'course SOURCES.md', 'url_status': None})
        out.setdefault(k, []).extend(added)
    # Mark v1 entries a course cites.
    for k, entries in out.items():
        if k.startswith('_'):
            continue
        for e in entries:
            if e['origin'] == 'v1':
                e['cited_by'] = sorted(url_courses.get(e['url'], []))

    # Each standards family a course's week codes use gets its framework's
    # top-level page (as cited in some SOURCES.md) in every key of that course,
    # so the code always traces to a listed source.
    FRAMEWORK_PAGES = {
        'csta': ('CSTA', 'https://csteachers.org/2017standards/interactive/'),
        'ngss': ('NGSS', None), 'ccss': ('CCSS', None)}
    all_cited = set(url_courses)
    def family_page(fam, k):
        name, fixed = FRAMEWORK_PAGES[fam]
        if fixed and fixed in all_cited:
            return fixed
        # Most-cited page of that family among the key's own citations.
        best = [u for u, _ in key_cites[k].most_common() if name in ' '.join(frameworks_for(u))]
        if best:
            return best[0]
        # A cross-subject code (a CCSS math code in a science course): use the
        # framework entry already listed for the same grade's math or reading key.
        grade = next(g for g in sorted(GRADE_IDS, key=len, reverse=True) if k.startswith(g + '_'))
        for sub in ('math', 'reading_ela'):
            for e in out.get(f'{grade}_{sub}', []):
                if name in ' '.join(e['frameworks']):
                    return e['url']
        return None
    for slug, c in courses.items():
        for fam in c['standards']:
            for k in c['keys']:
                have = {f for e in out.get(k, []) for f in e['frameworks']}
                if any(FRAMEWORK_PAGES[fam][0] in f for f in have):
                    continue
                u = family_page(fam, k)
                if not u:
                    continue
                t, p = page_meta.get(u, (None, None))
                if not t:
                    t = next((e['title'] for kk in out if not kk.startswith('_') for e in out[kk] if e['url'] == u), None)
                out.setdefault(k, []).append({
                    'title': t or host(u), 'url': u,
                    'description': f'{FRAMEWORK_PAGES[fam][0]} framework page; added because {slug} uses {FRAMEWORK_PAGES[fam][0]} codes for this grade and subject.',
                    'publisher': p, 'kind': kind(u), 'frameworks': frameworks_for(u), 'reuse': 'fact_source',
                    'license': None, 'cited_by': sorted(url_courses[u]), 'origin': 'course SOURCES.md', 'url_status': None})

    # Standards check: each code family a course uses must be defined by a
    # source in one of its keys.
    fams = {'csta': 'CSTA', 'ccss': 'CCSS', 'ngss': 'NGSS'}
    for slug, c in courses.items():
        have = {f for k in c['keys'] for e in out.get(k, []) for f in e['frameworks']}
        for fam in c['standards']:
            if not any(fams[fam] in f for f in have):
                c['flags'].append(f'Uses {fams[fam]} codes but no source in its keys defines {fams[fam]}.')

    # Every photo, sim or story a course reuses from an open source, listed
    # in full (no cap): the item's page, its credit and its license. Add a
    # host here when a course first reuses media from it.
    NASA_MEDIA = 'NASA media guidelines: generally not subject to US copyright; credit NASA. https://www.nasa.gov/nasa-brand-center/images-and-media/'
    # None: take the license from the host's source-catalog.md row.
    MEDIA_HOSTS = {
        'images.nasa.gov': NASA_MEDIA,
        'photojournal.jpl.nasa.gov': NASA_MEDIA,
        'gutenberg.org': 'Text not restricted by US copyright law; drop the Project Gutenberg license and name when reusing. https://www.gutenberg.org/policy/license.html',
        'phet.colorado.edu': None,
        'storyweaver.org.in': None,
        'collections.si.edu': 'CC0 (Smithsonian Open Access items only). https://registry.opendata.aws/smithsonian-open-access/',
        'metmuseum.org': 'CC0 (Met Open Access items only). https://github.com/metmuseum/openaccess',
    }
    media = []
    for u in sorted(url_courses):
        h = host(u)
        if h not in MEDIA_HOSTS:
            continue
        lic = MEDIA_HOSTS[h]
        if lic is None:
            cat = cat_by_host.get(h)
            lic = cat['license'] if cat else 'Not checked: open the item page and record its license before reuse.'
        t, p = page_meta.get(u, (None, None))
        media.append({'title': t or h, 'url': u, 'credit': p, 'license': lic,
                      'cited_by': sorted(url_courses[u])})
    out['_courses'] = courses
    out['_open_resources'] = catalog
    out['_media'] = media
    # Order: _meta, grade keys in grade then subject order, _courses, _open_resources.
    def order(k):
        if k == '_meta':
            return (-1, 0, '')
        if k.startswith('_'):
            return (99, 0, k)
        for i, g in enumerate(GRADE_IDS):
            if k.startswith(g + '_'):
                s = k[len(g) + 1:]
                subs = V1_SUBJECTS + NEW_SUBJECTS
                return (i, subs.index(s) if s in subs else 99, k)
        return (98, 0, k)
    out = {k: out[k] for k in sorted(out, key=order)}
    json.dump(out, open(os.path.join(ROOT, 'standards', 'sources.json'), 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    open(os.path.join(ROOT, 'standards', 'sources.json'), 'a').write('\n')
    keys = [k for k in out if not k.startswith('_')]
    print(f'{len(keys)} keys, {sum(len(out[k]) for k in keys)} entries, {len(courses)} courses, {len(catalog)} catalog rows')
    print('flagged courses:', sum(1 for c in courses.values() if c['flags']))

if __name__ == '__main__':
    main()
