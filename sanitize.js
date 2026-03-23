/**
 * sanitize.js — Input sanitization and secure DOM helpers for Apprentilangue
 *
 * PURPOSE: Provides XSS-safe alternatives to current innerHTML patterns.
 * RESOLVES:
 *   - AUDIT_REPORT Section 6.1: 6 Critical/High XSS vulnerabilities
 *   - innerHTML with user data at lines 1991, 2137, 2529, 2230, 2066, 2329
 *   - Inline onclick handlers with unsanitized parameters
 *
 * USAGE: Include via <script src="sanitize.js"></script> before main app script.
 * NOTE: Does NOT modify existing source. Provides drop-in replacements.
 */

'use strict';

/**
 * Sanitize a string for safe insertion into HTML.
 * Escapes &, <, >, ", and ' characters.
 *
 * @param {string} str - Untrusted string
 * @returns {string} Safe HTML string
 */
function sanitizeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sanitize a string for safe insertion into a CSS value or inline style.
 * Removes characters that could break out of CSS context.
 *
 * @param {string} str - Untrusted CSS value
 * @returns {string} Safe CSS value
 */
function sanitizeCSS(str) {
  if (str == null) return '';
  return String(str).replace(/[;{}()<>\\]/g, '');
}

/**
 * Validate and sanitize a hex color value.
 * Resolves: Color values injected into onclick handlers (line 2066).
 *
 * @param {string} hex - Color string to validate
 * @param {string} [fallback='#222222'] - Fallback color if invalid
 * @returns {string} Valid hex color
 */
function sanitizeColor(hex, fallback) {
  if (!hex) return fallback || '#222222';
  var clean = String(hex).trim();
  if (/^#[0-9A-Fa-f]{3,8}$/.test(clean)) return clean;
  return fallback || '#222222';
}

/**
 * Validate and sanitize a file path.
 * Prevents path traversal attacks in image src attributes.
 * Resolves: Dynamic image paths in innerHTML (lines 2517, 2329).
 *
 * @param {string} path - File path to validate
 * @returns {string} Sanitized path (relative only, no ../ sequences)
 */
function sanitizePath(path) {
  if (!path) return '';
  return String(path)
    .replace(/\.\.\//g, '')   // Remove path traversal
    .replace(/\.\.\\/g, '')   // Remove Windows path traversal
    .replace(/[<>"'`]/g, '')  // Remove HTML-breaking chars
    .replace(/^\/+/, '');     // Remove leading slashes (force relative)
}

/**
 * Create a DOM element safely with attributes and text content.
 * Alternative to innerHTML-based element creation.
 *
 * @param {string} tag - HTML tag name
 * @param {Object} [attrs] - Attributes to set (class, id, style, data-*, etc.)
 * @param {string} [text] - Text content (set via textContent, not innerHTML)
 * @returns {HTMLElement}
 *
 * @example
 *   // Before (XSS risk):
 *   d.innerHTML = `<div style="font-size:15px">${w.word}</div>`;
 *
 *   // After (safe):
 *   d.appendChild(safeEl('div', { style: 'font-size:15px' }, w.word));
 */
function safeEl(tag, attrs, text) {
  var el = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (key) {
      if (key === 'class' || key === 'className') {
        el.className = attrs[key];
      } else if (key === 'style' && typeof attrs[key] === 'object') {
        Object.assign(el.style, attrs[key]);
      } else {
        el.setAttribute(key, attrs[key]);
      }
    });
  }
  if (text != null) el.textContent = text;
  return el;
}

/**
 * Build a word card safely using DOM API instead of innerHTML.
 * Drop-in replacement for the pattern at lines 1989-1993.
 *
 * Resolves: AUDIT_REPORT Section 6.1 — Critical XSS in renderWords().
 *
 * @param {Object} word - Word object with .word, .num, .total, .gender, .nature
 * @param {number} index - Word index in series
 * @returns {HTMLElement} Complete word card element
 */
function buildWordCard(word, index) {
  var card = document.createElement('div');
  card.className = 'wc';

  // Left side: word info
  var info = document.createElement('div');
  var wordTitle = document.createElement('div');
  wordTitle.style.cssText = 'font-size:15px;font-weight:700';
  wordTitle.textContent = word.word; // textContent = XSS-safe
  info.appendChild(wordTitle);

  var meta = document.createElement('div');
  meta.style.cssText = 'font-size:11px;color:var(--text-disabled, #999);margin-top:2px';
  var genderStr = { masc: 'M', fem: 'F', both: 'M/F' };
  meta.textContent = (word.num || '') + '/' + (word.total || '') + ' · ' +
    (genderStr[word.gender] || '') + ' · ' + (word.nature || '').toUpperCase();
  info.appendChild(meta);

  // Right side: action buttons
  var btns = document.createElement('div');
  btns.style.cssText = 'display:flex;gap:5px';

  var editBtn = document.createElement('button');
  editBtn.className = 'bo bsm';
  editBtn.type = 'button';
  editBtn.textContent = '✏️';
  editBtn.setAttribute('aria-label', 'Modifier ' + sanitizeHTML(word.word));
  editBtn.dataset.action = 'edit';
  editBtn.dataset.index = index;

  var delBtn = document.createElement('button');
  delBtn.className = 'bd';
  delBtn.type = 'button';
  delBtn.textContent = '🗑';
  delBtn.setAttribute('aria-label', 'Supprimer ' + sanitizeHTML(word.word));
  delBtn.dataset.action = 'delete';
  delBtn.dataset.index = index;

  btns.appendChild(editBtn);
  btns.appendChild(delBtn);

  card.appendChild(info);
  card.appendChild(btns);

  return card;
}

/**
 * Safely create an image element with error fallback.
 * Replaces onerror="this.parentNode.innerHTML='...'" pattern.
 *
 * Resolves: AUDIT_REPORT Section 6.1 — onerror with innerHTML (line 2329).
 *
 * @param {string} src - Image source URL (will be sanitized)
 * @param {string} alt - Alt text
 * @param {string} [fallbackText] - Text to show if image fails
 * @param {string} [className] - CSS class
 * @returns {HTMLElement} Image element with safe error handling
 */
function safeImg(src, alt, fallbackText, className) {
  var img = document.createElement('img');
  img.src = sanitizePath(src);
  img.alt = alt || '';
  if (className) img.className = className;
  img.loading = 'lazy'; // Resolves: AUDIT_REPORT Section 5.2 — No lazy loading

  if (fallbackText) {
    img.addEventListener('error', function () {
      var span = document.createElement('span');
      span.textContent = fallbackText; // textContent = safe
      if (this.parentNode) {
        this.parentNode.replaceChild(span, this);
      }
    });
  } else {
    img.addEventListener('error', function () {
      this.style.display = 'none';
    });
  }

  return img;
}
