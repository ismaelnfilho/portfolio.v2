/* ismaelfilho.com — progressive enhancement only.
   All content is already in the HTML; this file adds interaction. */
(function () {
  'use strict';

  /* ---- accordions (case studies + education) ---- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-toggle]');
    if (!t) return;
    var host = t.closest(t.getAttribute('data-toggle'));
    if (!host) return;
    var open = host.classList.toggle('is-open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---- service cards: cursor-following light ---- */
  var cards = document.querySelectorAll('.svc');
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener('pointermove', function (e) {
      var r = this.getBoundingClientRect();
      this.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      this.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  /* ---- institution logo fallback to initials ---- */
  var badges = document.querySelectorAll('.edu-badge img');
  for (var i = 0; i < badges.length; i++) {
    (function (img) {
      var fail = function () { img.parentNode.classList.add('is-fallback'); };
      img.addEventListener('error', fail);
      if (img.complete && img.naturalWidth === 0) fail();
    })(badges[i]);
  }

  /* ---- preloader: overlay on the home page, first visit only, ~3s. Content is already in the HTML. ---- */
  var DURATION = 3000;
  var isHome = !!document.querySelector('.hero');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KEY = 'if_boot_seen';
  var seen;
  try { seen = localStorage.getItem(KEY); } catch (err) { seen = null; }

  if (isHome && !reduce && !seen) {
    try { localStorage.setItem(KEY, '1'); } catch (err) {}
    var messages = [
      'INITIALIZING NEURAL LINK...',
      'LOADING CORE MODULES...',
      'SYNCING DATA STREAMS...',
      'OPTIMIZING INTERFACE...',
      'FINALIZING CONNECTION...'
    ];
    var el = document.createElement('div');
    el.id = 'preloader';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML =
      '<div class="inner">' +
        '<div class="title">LOADING...</div>' +
        '<div class="bar"><i></i></div>' +
        '<p class="status">' + messages[0] + '</p>' +
      '</div>';
    document.body.appendChild(el);
    document.documentElement.style.overflow = 'hidden';

    var fill = el.querySelector('.bar i');
    var status = el.querySelector('.status');
    var t0 = performance.now();
    var shown = 0;

    var finish = function () {
      el.style.opacity = '0';
      document.documentElement.style.overflow = '';
      setTimeout(function () { el.remove(); }, 300);
    };

    var tick = function () {
      var linear = Math.min(1, (performance.now() - t0) / DURATION);
      var target = Math.round(linear * 100);
      if (target > shown) shown = Math.min(100, shown + Math.max(1, Math.round((target - shown) * (0.4 + Math.random() * 0.6))));
      fill.style.width = shown + '%';
      status.textContent = messages[Math.min(messages.length - 1, Math.floor((shown / 100) * messages.length))];
      if (linear >= 1) { fill.style.width = '100%'; setTimeout(finish, 200); return; }
      setTimeout(tick, 120 + Math.random() * 160);
    };
    tick();

    el.addEventListener('click', finish);
  }
})();

(function () {
  var els = document.querySelectorAll('.glitch');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-live'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { en.target.classList.toggle('is-live', en.isIntersecting); });
  }, { threshold: 0.2 });
  els.forEach(function (e) { io.observe(e); });
})();

(function () {
  var bins = document.querySelectorAll('.vault-bin');
  if (!bins.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function row() { var s = ''; for (var i = 0; i < 5; i++) s += Math.random() < .5 ? '0' : '1'; return s; }
  setInterval(function () {
    bins.forEach(function (b) {
      var r = b.textContent.split('\n'); r[Math.floor(Math.random() * r.length)] = row(); b.textContent = r.join('\n');
    });
  }, 450);
})();
