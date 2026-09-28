/* On touch screens, cards have no hover: activate the effect while the card is visible */
(function () {
  if (!window.matchMedia || !window.matchMedia('(hover: none)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  function init() {
    var cards = document.querySelectorAll('.svc');
    if (!cards.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('in-view', e.isIntersecting); });
    }, { threshold: 0.55 });
    cards.forEach(function (c) { io.observe(c); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
