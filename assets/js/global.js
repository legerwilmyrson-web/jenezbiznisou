/* ============================================
   JENEZBIZNISSOU — global.js
   REDPRINT SOLUTION
   Vanilla JS sèlman — pa gen dependency
   ============================================ */

'use strict';

/* ─────────────────────────────────────────
   1. FORMATAJ LAJAN / NOMB
───────────────────────────────────────── */

/**
 * Formatar lajan HTG
 * @param {number} amount
 * @returns {string} "HTG 1,250.00"
 */
function formatHTG(amount) {
  if (isNaN(amount)) return 'HTG 0.00';
  return 'HTG ' + parseFloat(amount).toLocaleString('fr-HT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * Formatar USD
 * @param {number} amount
 * @returns {string} "$1,250.00"
 */
function formatUSD(amount) {
  if (isNaN(amount)) return '$0.00';
  return '$' + parseFloat(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * Formatar pousantaj
 * @param {number} value
 * @param {number} decimals
 * @returns {string} "25.50%"
 */
function formatPercent(value, decimals = 2) {
  if (isNaN(value)) return '0%';
  return parseFloat(value).toFixed(decimals) + '%';
}

/**
 * Formatar nomb senp
 * @param {number} value
 * @param {number} decimals
 * @returns {string}
 */
function formatNumber(value, decimals = 2) {
  if (isNaN(value)) return '0';
  return parseFloat(value).toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Parse input valo — retire espas, virgul, lèt
 * @param {string} val
 * @returns {number}
 */
function parseInput(val) {
  if (!val) return 0;
  const cleaned = String(val).replace(/[^\d.,\-]/g, '').replace(',', '.');
  return parseFloat(cleaned) || 0;
}


/* ─────────────────────────────────────────
   2. CLIPBOARD — KOPYE REZILTA
───────────────────────────────────────── */

/**
 * Kopye tèks nan clipboard
 * @param {string} text - Tèks pou kopye
 * @param {HTMLElement} btn - Bouton klike a (opsyonèl)
 */
function copyToClipboard(text, btn = null) {
  if (!text) return;

  const fallback = () => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(fallback);
  } else {
    fallback();
  }

  // Feedback vizil sou bouton
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Kopye!';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
    }, 2000);
  }

  showToast('Kopye nan clipboard!', 'success');
  trackEvent('result_copied', { text: text.substring(0, 50) });
}

/**
 * Bouton kopye senp — itilize sou yon eleman ki gen data-copy
 * <button class="btn btn-sm btn-secondary" onclick="copyText(this)" data-copy="valè pou kopye">Kopye</button>
 */
function copyText(btn) {
  const text = btn.getAttribute('data-copy') || btn.closest('[data-copy]')?.getAttribute('data-copy');
  if (text) copyToClipboard(text, btn);
}


/* ─────────────────────────────────────────
   3. SHOW / HIDE REZILTA
───────────────────────────────────────── */

/**
 * Montre yon eleman rezilta avèk animasyon
 * @param {string|HTMLElement} el - ID oswa eleman
 */
function showResult(el) {
  const elem = typeof el === 'string' ? document.getElementById(el) : el;
  if (!elem) return;
  elem.style.display = 'block';
  elem.classList.remove('hidden');
  elem.classList.add('animate-in');
  elem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Kache yon eleman
 * @param {string|HTMLElement} el
 */
function hideResult(el) {
  const elem = typeof el === 'string' ? document.getElementById(el) : el;
  if (!elem) return;
  elem.style.display = 'none';
  elem.classList.add('hidden');
}

/**
 * Ranje valè nan yon eleman rezilta
 * @param {string} id - ID eleman
 * @param {string} value - Valè pou afiche
 */
function setResult(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


/* ─────────────────────────────────────────
   4. VALIDASYON FORM
───────────────────────────────────────── */

/**
 * Valide yon input — montre erè si vid
 * @param {HTMLElement} input
 * @param {string} message
 * @returns {boolean}
 */
function validateInput(input, message = 'Champ obligatoire') {
  const val = input.value.trim();
  const errorId = input.id + '-error';
  let errorEl = document.getElementById(errorId);

  if (!val || val === '0') {
    input.classList.add('error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.id = errorId;
      errorEl.className = 'form-error';
      input.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
    input.focus();
    return false;
  }

  input.classList.remove('error');
  if (errorEl) errorEl.remove();
  return true;
}

/**
 * Valide plizyè inputs ann yon sèl fwa
 * @param {Array} inputs - [{el: HTMLElement, message: string}]
 * @returns {boolean}
 */
function validateAll(inputs) {
  let valid = true;
  inputs.forEach(({ el, message }) => {
    if (!validateInput(el, message)) valid = false;
  });
  return valid;
}

/**
 * Retire tout erè validasyon nan yon fòmilè
 * @param {HTMLElement} form
 */
function clearErrors(form) {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => el.remove());
}


/* ─────────────────────────────────────────
   5. TOAST NOTIFICATIONS
───────────────────────────────────────── */

/**
 * Montre yon notifikasyon toast
 * @param {string} message
 * @param {'success'|'error'|'info'} type
 * @param {number} duration - milisegond
 */
function showToast(message, type = 'info', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(16px)';
    toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, duration);
}


/* ─────────────────────────────────────────
   6. PRINT / PDF (pou Facture, Devis, Reçu)
───────────────────────────────────────── */

/**
 * Enprime yon seksyon kòm PDF
 * @param {string} sectionId - ID seksyon pou enprime
 */
function printSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const originalBody = document.body.innerHTML;
  const printContent = section.innerHTML;

  document.body.innerHTML = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #000; background: #fff;">
      ${printContent}
    </div>
  `;

  window.print();
  document.body.innerHTML = originalBody;
  window.location.reload();
}

/**
 * Deklanche window.print() dirèkteman
 */
function printDocument() {
  window.print();
  trackEvent('document_printed');
}


/* ─────────────────────────────────────────
   7. GOOGLE ANALYTICS — TRACKING
───────────────────────────────────────── */

/**
 * Track yon evènman Google Analytics 4
 * @param {string} eventName
 * @param {Object} params
 */
function trackEvent(eventName, params = {}) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  } catch(e) {
    // Silently fail si GA pa chaje
  }
}

// Evènman standard pou track otomatikman
const EVENTS = {
  TOOL_USED:         'tool_used',
  KOLONIH_CLICK:     'cta_kolonih_click',
  WHATSAPP_CLICK:    'whatsapp_click',
  RESULT_COPIED:     'result_copied',
  DOCUMENT_PRINTED:  'document_printed',
  FORM_SUBMITTED:    'form_submitted'
};


/* ─────────────────────────────────────────
   8. NAVIGATION MOBILE
───────────────────────────────────────── */

function initMobileMenu() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu   = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fèmen menu lè klike sou yon lyen
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


/* ─────────────────────────────────────────
   9. SCROLL REVEAL
───────────────────────────────────────── */

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  // Pa itilize scroll event — IntersectionObserver pi pèfòman
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────
   10. TRACKING KOLONIH + WHATSAPP CTAs
───────────────────────────────────────── */

function initCTATracking() {
  // Kolonih CTA
  document.querySelectorAll('a[href*="kolonih.com"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent(EVENTS.KOLONIH_CLICK, {
        page: window.location.pathname
      });
    });
  });

  // WhatsApp CTA
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent(EVENTS.WHATSAPP_CLICK, {
        page: window.location.pathname
      });
    });
  });
}


/* ─────────────────────────────────────────
   11. UTILITE JENERAL
───────────────────────────────────────── */

/**
 * Debounce yon fonksyon (pou input events)
 * @param {Function} fn
 * @param {number} delay
 */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Jwenn dat jodi a formaté
 * @returns {string} "15 janvier 2025"
 */
function getTodayFormatted() {
  return new Date().toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

/**
 * Jenere yon ID unik senp
 * @returns {string}
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

/**
 * Verifye si yon valè se yon nomb valid
 * @param {any} val
 * @returns {boolean}
 */
function isValidNumber(val) {
  return val !== '' && val !== null && !isNaN(parseFloat(val)) && isFinite(val);
}


/* ─────────────────────────────────────────
   12. INIT — Lance tout lè DOM prèt
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initCTATracking();
});


/* ─────────────────────────────────────────
   EXPORTS (pou reutilizasyon)
───────────────────────────────────────── */
// Fonksyon disponib globalman — pa bezwen import
// formatHTG, formatUSD, formatPercent, formatNumber, parseInput
// copyToClipboard, copyText
// showResult, hideResult, setResult
// validateInput, validateAll, clearErrors
// showToast
// printSection, printDocument
// trackEvent, EVENTS
// debounce, getTodayFormatted, generateId, isValidNumber
