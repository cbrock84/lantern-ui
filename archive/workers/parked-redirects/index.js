// Temporary redirects for parked brand domains. 302 so domains can be repurposed later.
// To retire a domain: delete its entry here and remove its Custom Domain from this Worker.
const MAP = {
  "cabrock.com": "https://chrisbrock.io",
  "cbrock84.com": "https://chrisbrock.io",
  "cbrock.ai": "https://chrisbrock.io",
  "cbrock.io": "https://chrisbrock.io",
  "cbrock.link": "https://chrisbrock.io",
  "cbrock.me": "https://chrisbrock.io",
  "chrisbrock.info": "https://chrisbrock.io",
  "chrisbrocks.com": "https://chrisbrock.io",
  "brockcb.com": "https://chrisbrock.io",
  "brockga.com": "https://chrisbrock.io",
  "votebrock.com": "https://chrisbrock.io",
  "chrisbrockinc.com": "https://chrisbrockllc.com",
  "dewli.app": "https://getdewli.com",
  "brockits.com": "https://chrisbrock.io",
  "lodestarstem.com": "https://lanternlearn.com",
  "tomorrowtrail.com": "https://lanternlearn.com",
  "trailtotomorrow.com": "https://lanternlearn.com",
  // Duplicate trade domains consolidated into the live lead site (permanent).
  "coolheatatlanta.com": "https://besthvacatlanta.com",
  "atlantayardpros.com": "https://widespreadlandscaping.com",
  "nobugsatlanta.com": "https://bestpestatl.com",
};
const PERMANENT = new Set(["coolheatatlanta.com", "atlantayardpros.com", "nobugsatlanta.com"]);
export default {
  fetch(req) {
    const url = new URL(req.url);
    const host = url.hostname.replace(/^www\./, "");
    const target = MAP[host] || "https://chrisbrock.io";
    return Response.redirect(target + (PERMANENT.has(host) ? "/" : url.pathname + url.search), PERMANENT.has(host) ? 301 : 302);
  },
};
