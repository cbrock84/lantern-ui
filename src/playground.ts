/**
 * Motion for the Playground kit (D127), as an inline script string so it works
 * on every site without a bundler step and runs once per page. See
 * components/Playground.astro for the attributes it reads.
 */
export const playgroundScript = `(function(){
if (window.__pg) return; window.__pg = 1;
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
var COLORS = ['--ll-pg-sun','--ll-pg-tomato','--ll-pg-sky','--ll-pg-grass','--ll-pg-pink'];
function col(i){ var v = getComputedStyle(document.documentElement).getPropertyValue(COLORS[i % COLORS.length]).trim(); return v ? 'rgb(' + v + ')' : '#ffc928'; }
function ready(fn){ document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }
ready(function(){
  // Marquee: duplicate the items once so the strip loops without a seam.
  document.querySelectorAll('[data-pg-marquee]').forEach(function(m){
    if (m.querySelector('.pg-track')) return;
    var t = document.createElement('div'); t.className = 'pg-track';
    while (m.firstChild) t.appendChild(m.firstChild);
    if (!reduce) Array.prototype.slice.call(t.children).forEach(function(c){ var k = c.cloneNode(true); k.setAttribute('aria-hidden','true'); t.appendChild(k); });
    m.appendChild(t);
  });
  if (reduce) return;
  // Bouncy headline: words stay whole, letters drop in one by one.
  document.querySelectorAll('[data-pg-bounce]').forEach(function(h){
    if (!h.getAttribute('aria-label')) h.setAttribute('aria-label', h.textContent.replace(/\\s+/g,' ').trim());
    var n = 0;
    (function wrap(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(c){
        if (c.nodeType !== 3) { if (c.nodeType === 1) wrap(c); return; }
        var f = document.createDocumentFragment();
        c.textContent.split(/(\\s+)/).forEach(function(w){
          if (!w) return;
          if (!w.trim()) { f.appendChild(document.createTextNode(' ')); return; }
          var ws = document.createElement('span'); ws.className = 'pg-w'; ws.setAttribute('aria-hidden','true');
          w.split('').forEach(function(ch){ var s = document.createElement('span'); s.className = 'pg-ch'; s.textContent = ch; s.style.animationDelay = (n++ * 28) + 'ms'; ws.appendChild(s); });
          f.appendChild(ws);
        });
        node.replaceChild(f, c);
      });
    })(h);
  });
  // Confetti on press.
  document.querySelectorAll('[data-pg-pop]').forEach(function(b){
    b.addEventListener('click', function(){
      var r = b.getBoundingClientRect();
      for (var k = 0; k < 22; k++) {
        var c = document.createElement('i'); c.className = 'pg-confetti'; c.style.background = col(k);
        c.style.left = (r.left + r.width / 2) + 'px'; c.style.top = (r.top + r.height / 2) + 'px';
        document.body.appendChild(c);
        var a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 120;
        c.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(' + Math.cos(a) * d + 'px,' + (Math.sin(a) * d + 80) + 'px) rotate(' + Math.random() * 720 + 'deg)', opacity: 0 }], { duration: 900, easing: 'cubic-bezier(.2,.8,.4,1)' }).onfinish = (function(el){ return function(){ el.remove(); }; })(c);
      }
    });
  });
  // Clay shapes that float and dodge the pointer.
  document.querySelectorAll('[data-pg-blobs]').forEach(function(host){
    var count = +host.getAttribute('data-pg-blobs') || 6, B = [], mx = -999, my = -999, on = true;
    for (var i = 0; i < count; i++) {
      var e = document.createElement('span'); e.className = 'pg-blob'; e.setAttribute('aria-hidden','true');
      var s = 40 + Math.random() * 90; e.style.width = s + 'px'; e.style.height = s * (0.8 + Math.random() * 0.4) + 'px';
      e.style.background = col(i); e.style.left = (50 + Math.random() * 45) + '%'; e.style.top = (Math.random() * 80) + '%';
      host.appendChild(e); B.push({ el: e, x: 0, y: 0, vx: 0, vy: 0, p: Math.random() * 6, r: Math.random() * 40 });
    }
    host.addEventListener('pointermove', function(ev){ mx = ev.clientX; my = ev.clientY; });
    host.addEventListener('pointerleave', function(){ mx = my = -999; });
    if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ on = es[0].isIntersecting; }).observe(host);
    (function tick(t){
      requestAnimationFrame(tick); if (!on || document.hidden) return; t = t || 0;
      B.forEach(function(b){
        var r = b.el.getBoundingClientRect(), dx = r.left + r.width / 2 - mx, dy = r.top + r.height / 2 - my, d = Math.hypot(dx, dy) || 1;
        if (d < 160) { b.vx += dx / d * 1.6; b.vy += dy / d * 1.6; }
        b.vx += -b.x * 0.02; b.vy += -b.y * 0.02; b.vx *= 0.86; b.vy *= 0.86; b.x += b.vx; b.y += b.vy;
        b.el.style.transform = 'translate(' + b.x + 'px,' + (b.y + Math.sin(t * 0.0012 + b.p) * 10) + 'px) rotate(' + (b.r + Math.sin(t * 0.0008 + b.p) * 12) + 'deg)';
      });
    })();
  });
});
})();`;
