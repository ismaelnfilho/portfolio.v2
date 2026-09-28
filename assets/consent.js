/* Cookie consent + Google Analytics 4 (loaded only after consent, CNIL-compliant) */
(function () {
  var GA_ID = 'G-6WR9L128C5';
  var KEY = 'cookie-consent'; // 'granted' | 'denied'
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var T = {
    en: { msg: 'This site uses cookies to measure its audience. You can accept or decline.', ok: 'Accept', no: 'Decline', link: 'Cookies' },
    fr: { msg: "Ce site utilise des cookies pour mesurer son audience. Vous pouvez accepter ou refuser.", ok: 'Accepter', no: 'Refuser', link: 'Cookies' },
    pt: { msg: 'Este site usa cookies para medir a audiência. Você pode aceitar ou recusar.', ok: 'Aceitar', no: 'Recusar', link: 'Cookies' }
  }[lang] || null;
  T = T || { msg: 'This site uses cookies to measure its audience. You can accept or decline.', ok: 'Accept', no: 'Decline', link: 'Cookies' };

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function loadGA() {
    if (loaded) return; loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function hide(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }

  function banner() {
    if (document.getElementById('cc-banner')) return;
    var b = document.createElement('div');
    b.id = 'cc-banner'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-live', 'polite');
    b.innerHTML = '<p>' + T.msg + '</p><div class="cc-actions">' +
      '<button type="button" class="cc-no">' + T.no + '</button>' +
      '<button type="button" class="cc-ok">' + T.ok + '</button></div>';
    document.body.appendChild(b);
    b.querySelector('.cc-ok').onclick = function () { set('granted'); hide(b); loadGA(); };
    b.querySelector('.cc-no').onclick = function () { set('denied'); hide(b); };
  }

  function footerLink() {
    var f = document.querySelector('.site-footer');
    if (!f || document.getElementById('cc-reopen')) return;
    var a = document.createElement('button');
    a.id = 'cc-reopen'; a.type = 'button'; a.textContent = T.link;
    a.onclick = banner;
    f.appendChild(a);
  }

  function init() {
    var c = get();
    if (c === 'granted') loadGA();
    else if (c !== 'denied') banner();
    footerLink();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
