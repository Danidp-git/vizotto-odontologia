
(function(){
  var btn = document.querySelector('button[aria-label="Abrir menu"], button[aria-label="Fechar menu"]');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function(){
      var open = menu.hasAttribute('hidden');
      if (open) { menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden',''); }
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.addEventListener('click', function(e){
      if (e.target.tagName === 'A') { menu.setAttribute('hidden',''); btn.setAttribute('aria-label','Abrir menu'); }
    });
  }
})();



(function () {
  function initFaq() {
    var root = document.getElementById('duvidas');
    if (!root) return;

    var buttons = root.querySelectorAll('button[data-radix-collection-item]');
    buttons.forEach(function (btn) {
      btn.classList.add('faq-toggle');
      btn.setAttribute('type', 'button');

      var region = null;
      var regionId = btn.getAttribute('aria-controls');
      if (regionId) region = document.getElementById(regionId);
      if (!region && btn.id) region = root.querySelector('[aria-labelledby="' + btn.id + '"]');
      if (!region) {
        var item = btn.closest('[data-orientation="vertical"]');
        if (item) region = item.querySelector('[role="region"]');
      }
      if (!region) return;

      if (!region.id) region.id = (btn.id || 'faq') + '-content';
      btn.setAttribute('aria-controls', region.id);

      var initiallyOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', initiallyOpen ? 'true' : 'false');
      btn.setAttribute('data-state', initiallyOpen ? 'open' : 'closed');
      region.setAttribute('data-state', initiallyOpen ? 'open' : 'closed');
      region.hidden = !initiallyOpen;
    });

    root.addEventListener('click', function (event) {
      var btn = event.target.closest('button[data-radix-collection-item]');
      if (!btn || !root.contains(btn)) return;

      var regionId = btn.getAttribute('aria-controls');
      var region = regionId ? document.getElementById(regionId) : null;
      if (!region) return;

      var willOpen = btn.getAttribute('aria-expanded') !== 'true';

      // Close the other questions.
      buttons.forEach(function (other) {
        if (other === btn) return;
        var otherRegionId = other.getAttribute('aria-controls');
        var otherRegion = otherRegionId ? document.getElementById(otherRegionId) : null;
        if (!otherRegion) return;
        other.setAttribute('aria-expanded', 'false');
        other.setAttribute('data-state', 'closed');
        otherRegion.setAttribute('data-state', 'closed');
        otherRegion.hidden = true;
      });

      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      btn.setAttribute('data-state', willOpen ? 'open' : 'closed');
      region.setAttribute('data-state', willOpen ? 'open' : 'closed');
      region.hidden = !willOpen;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaq);
  } else {
    initFaq();
  }
})();
