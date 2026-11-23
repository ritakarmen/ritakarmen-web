(function () {
  'use strict';
  const config = window.RITAKARMEN_CONFIG || {};
  const menuToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    mobileNav.hidden = true;
  };
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
      mobileNav.hidden = expanded;
    });
    mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeMenu(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const form = document.getElementById('quote-form');
  const feedback = document.getElementById('form-feedback');
  const options = document.getElementById('form-send-options');
  const kind = document.getElementById('project-kind');
  document.querySelectorAll('[data-plan]').forEach((link) => {
    link.addEventListener('click', () => { if (kind) kind.value = link.getAttribute('data-plan') || kind.value; });
  });
  if (!form || !feedback || !options) return;
  const clean = (value, max) => String(value || '').trim().slice(0, max);
  const email = clean(config.contactEmail, 160);
  let requestText = '';
  const makeAction = (label, url, cssClass) => {
    const a = document.createElement('a');
    a.href = url;
    a.className = 'btn ' + cssClass;
    a.textContent = label;
    if (url.startsWith('https:')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    return a;
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(requestText);
      feedback.textContent = 'Solicitud copiada. Puedes pegarla en un mensaje.';
      feedback.hidden = false;
    } catch (_) {
      const box = document.createElement('textarea');
      box.value = requestText;
      box.className = 'copy-fallback';
      box.setAttribute('aria-label','Solicitud lista para copiar manualmente');
      options.appendChild(box);
      box.focus(); box.select();
      feedback.textContent = 'Selecciona y copia el texto que aparece debajo.';
      feedback.hidden = false;
    }
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const senderName = clean(fields.get('name'), 90);
    const senderMail = clean(fields.get('email'), 160);
    const business = clean(fields.get('business'), 120);
    const plan = clean(fields.get('plan'), 120);
    const details = clean(fields.get('details'), 1500);
    requestText = [
      'Hola, me gustaría solicitar una cotización a ritakarmen.',
      '',
      'Nombre: ' + senderName,
      'Negocio: ' + (business || 'No indicado'),
      'Correo: ' + senderMail,
      'Servicio: ' + plan,
      'Proyecto: ' + details,
    ].join('\n');
    options.replaceChildren();
    options.hidden = false;
    feedback.hidden = false;
    if (email) {
      const subject = 'Consulta web: ' + plan + ' - ' + senderName;
      const url = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(requestText);
      options.appendChild(makeAction('Enviar por correo ↗', url, 'btn-primary'));
    }
    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'btn btn-outline';
    copyButton.textContent = 'Copiar solicitud';
    copyButton.addEventListener('click', copy);
    options.appendChild(copyButton);
    if (!email) {
      feedback.textContent = 'El correo de contacto todavía no está configurado. Puedes copiar tu solicitud, pero aún no se enviará a nadie.';
    } else {
      feedback.textContent = 'Tu solicitud está preparada para enviarla por correo. Pulsa «Enviar por correo» y confirma el envío desde tu aplicación de correo; aún no se ha enviado.';
    }
    options.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();
