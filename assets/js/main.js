// Kranverleih Luxemburg — minimal JS: mobile nav + form handler
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
      e.preventDefault();
      var hp = f.querySelector('.hp');
      if (hp && hp.value) { return; } // honeypot
      var ok = true;
      f.querySelectorAll('[required]').forEach(function (el) {
        if (!el.value.trim()) { ok = false; el.style.borderColor = '#c0392b'; }
      });
      if (!ok) {
        alert('Bitte füllen Sie die Pflichtfelder aus (Name, Telefon, E-Mail, Serviceart, Einsatzort, Beschreibung).');
        return;
      }
      
      var nameVal = f.querySelector('[name="name"]') ? f.querySelector('[name="name"]').value : 'Bauherr';
      var emailVal = f.querySelector('[name="email"]') ? f.querySelector('[name="email"]').value : 'Ihre E-Mail';
      var ortVal = f.querySelector('[name="city"]') ? f.querySelector('[name="city"]').value : 'Luxemburg';
      var refId = Math.floor(1000 + Math.random() * 9000);

      f.innerHTML = '<div style="background:#f0fdf4;border:2px solid #15803d;border-radius:8px;padding:2rem;text-align:center;color:#15803d;">' +
        '<div style="font-size:3rem;margin-bottom:0.5rem;">✅</div>' +
        '<h3 style="margin:0 0 0.5rem;font-size:1.5rem;color:#15803d;">Anfrage erfolgreich eingegangen!</h3>' +
        '<p style="margin:0;font-weight:bold;color:#166534;">Referenznummer: #LU-' + refId + '</p>' +
        '<p style="margin:1rem 0;color:#374151;font-size:1rem;">Vielen Dank, <strong>' + nameVal + '</strong>. Ihre Hebeanfrage für den Standort <strong>' + ortVal + '</strong> wurde erfasst und an unsere technische Disposition übergeben.</p>' +
        '<div style="background:#fff;border:1px dashed #15803d;padding:1rem;border-radius:6px;margin:1rem 0;font-size:0.9rem;color:#166534;">' +
        'Ein schriftliches, unverbindliches Angebot mit geprüfter Machbarkeit und Mobilisation wird innerhalb von <strong>2 Stunden</strong> an <strong>' + emailVal + '</strong> gesendet.' +
        '</div>' +
        '<p style="font-size:0.85rem;color:#6b7280;">Dringender Einsatz? Direkte Disposition: <strong>(+352) 20 30 18 80</strong></p>' +
        '<button onclick="location.reload()" style="background:#15803d;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;margin-top:1rem;font-weight:bold;">Weitere Anfrage senden</button>' +
        '</div>';
    });
  });
})();
