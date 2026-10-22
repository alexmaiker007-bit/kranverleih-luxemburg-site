// Kranverleih Luxemburg — minimal JS: mobile nav + form guard
(function () {
  var t = document.getElementById('navToggle'), n = document.getElementById('mainNav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.quote-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      var hp = f.querySelector('.hp');
      if (hp && hp.value) { e.preventDefault(); return; } // honeypot
      var ok = true;
      f.querySelectorAll('[required]').forEach(function (el) {
        if (!el.value.trim()) { ok = false; el.style.borderColor = '#c0392b'; }
      });
      if (!ok) { e.preventDefault(); alert('Bitte füllen Sie die Pflichtfelder aus (Name, Telefon, E-Mail, Serviceart, Einsatzort, Beschreibung).'); }
    });
  });
})();
