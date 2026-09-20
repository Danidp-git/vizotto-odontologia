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
  document.querySelectorAll('button[data-radix-collection-item]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var region = btn.id ? document.querySelector('[aria-labelledby="' + btn.id + '"]') : null;
      if (!region) return;
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.setAttribute('data-state', open ? 'closed' : 'open');
      region.setAttribute('data-state', open ? 'closed' : 'open');
      if (open) { region.setAttribute('hidden',''); } else { region.removeAttribute('hidden'); }
    });
  });
})();
