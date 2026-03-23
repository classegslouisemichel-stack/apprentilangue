/**
 * utils.js — Shared utility functions for Apprentilangue
 *
 * PURPOSE: Eliminates duplicated code patterns identified in AUDIT_REPORT.md
 * RESOLVES:
 *   - Section 4.3: Repeated .split(';').map().filter() pattern
 *   - Section 4.3: Repeated getElementById().value= sequences in modal init
 *   - Section 4.5: Missing error handling on silent returns
 *   - Section 4.6: innerHTML with user-controlled data (provides safe alternatives)
 *   - Section 4.2: Global state overload (provides namespace structure)
 *
 * USAGE: Include via <script src="utils.js"></script> before main app script.
 * NOTE: This file does NOT modify existing source files. It provides helpers
 *       to be adopted incrementally during refactoring.
 */

'use strict';

// ================================================================
// DOM HELPERS
// ================================================================

/**
 * Short alias for document.getElementById with optional null-safe warning.
 * Replaces 46+ direct getElementById calls scattered throughout the codebase.
 *
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
function $el(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn('[Apprentilangue] Element not found: #' + id);
  }
  return el;
}

/**
 * Safely set textContent on an element (XSS-safe alternative to innerHTML).
 * Resolves AUDIT_REPORT Section 6.1: XSS via innerHTML with user data.
 *
 * @param {string} id - Element ID
 * @param {string} text - Text content to set
 */
function $text(id, text) {
  const el = $el(id);
  if (el) el.textContent = text;
}

/**
 * Set multiple form field values from a map.
 * Resolves AUDIT_REPORT Section 4.3: Modal form initialization repeated 4 times.
 *
 * Before (repeated 4x in openNewSeriesModal, openSeriesSettingsModal, etc.):
 *   document.getElementById('es-name').value = s.name;
 *   document.getElementById('es-color').value = s.color || '#7ab648';
 *   document.getElementById('es-font').value = s.font || 'MDIEcole';
 *
 * After:
 *   setFormValues({ 'es-name': s.name, 'es-color': s.color || '#7ab648', ... });
 *
 * @param {Object<string, string|number>} fieldMap - Map of element ID → value
 */
function setFormValues(fieldMap) {
  Object.entries(fieldMap).forEach(function ([id, val]) {
    const el = $el(id);
    if (el) el.value = val != null ? val : '';
  });
}

/**
 * Read multiple form field values into an object.
 * Complements setFormValues for consistent form data extraction.
 *
 * @param {Object<string, string>} fieldMap - Map of property name → element ID
 * @returns {Object} Map of property name → trimmed value
 */
function getFormValues(fieldMap) {
  const result = {};
  Object.entries(fieldMap).forEach(function ([prop, id]) {
    const el = $el(id);
    result[prop] = el ? el.value.trim() : '';
  });
  return result;
}

// ================================================================
// STRING UTILITIES
// ================================================================

/**
 * Split a delimited string, trim each part, remove empties.
 * Resolves AUDIT_REPORT Section 4.3: .split(';').map().filter() repeated 4+ times.
 *
 * Before (repeated at lines 1950, 2011, 3052, 3088):
 *   document.getElementById('ns-decos').value.split(';').map(s=>s.trim()).filter(Boolean)
 *
 * After:
 *   splitClean(document.getElementById('ns-decos').value, ';')
 *
 * @param {string} str - Input string
 * @param {string} [sep=';'] - Separator
 * @returns {string[]} Cleaned array of non-empty strings
 */
function splitClean(str, sep) {
  if (!str) return [];
  return str.split(sep || ';').map(function (s) { return s.trim(); }).filter(Boolean);
}

/**
 * Escape HTML special characters to prevent XSS when inserting into templates.
 * Resolves AUDIT_REPORT Section 6.1: User data injected into innerHTML.
 *
 * @param {string} str - Raw string (potentially containing HTML)
 * @returns {string} HTML-escaped string safe for innerHTML use
 */
function escapeHTML(str) {
  if (!str) return '';
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ================================================================
// DISPLAY HELPERS
// ================================================================

/**
 * Map gender code to display label.
 * Resolves AUDIT_REPORT Section 4.6: nested ternary in innerHTML at line 1991.
 *
 * Before: w.gender==='masc'?'M':w.gender==='fem'?'F':''
 * After: genderLabel(w.gender)
 *
 * @param {string} gender - 'masc', 'fem', 'both', or 'none'
 * @returns {string} Display label
 */
function genderLabel(gender) {
  var labels = { masc: 'M', fem: 'F', both: 'M/F', none: '' };
  return labels[gender] || '';
}

// ================================================================
// VALIDATION HELPERS
// ================================================================

/**
 * Validate a required field and show toast if empty.
 * Resolves AUDIT_REPORT Section 4.5: Missing error handling on silent returns.
 *
 * Before (repeated pattern):
 *   const name = document.getElementById('ns-name').value.trim();
 *   if(!name) { toast('Nom requis'); return; }
 *
 * After:
 *   const name = requireField('ns-name', 'Nom requis');
 *   if (name === null) return;
 *
 * @param {string} id - Form field element ID
 * @param {string} msg - Toast message if empty
 * @returns {string|null} Trimmed value, or null if empty
 */
function requireField(id, msg) {
  var el = $el(id);
  var val = el ? el.value.trim() : '';
  if (!val) {
    if (typeof toast === 'function') toast(msg);
    return null;
  }
  return val;
}

/**
 * Validate that an array index is within bounds.
 * Resolves AUDIT_REPORT Section 4.5: Array access without bounds check (line 2031).
 *
 * @param {Array} arr - Array to check against
 * @param {number} idx - Index to validate
 * @param {string} [msg] - Optional error message for toast
 * @returns {boolean} true if index is valid
 */
function validIndex(arr, idx, msg) {
  if (!arr || idx < 0 || idx >= arr.length) {
    if (msg && typeof toast === 'function') toast(msg);
    return false;
  }
  return true;
}

// ================================================================
// DATA VALIDATION
// ================================================================

/**
 * Validate a shared series object against expected schema.
 * Resolves AUDIT_REPORT Section 6.2: series_partagees.json merged without validation.
 *
 * @param {Object} series - Series object to validate
 * @returns {boolean} true if the series has the minimum required fields
 */
function validateSeriesSchema(series) {
  if (!series || typeof series !== 'object') return false;
  if (!series.id || typeof series.id !== 'string') return false;
  if (!series.name || typeof series.name !== 'string') return false;
  if (!Array.isArray(series.words)) return false;
  // Validate each word has at minimum a 'word' field
  return series.words.every(function (w) {
    return w && typeof w.word === 'string' && w.word.length > 0;
  });
}

/**
 * Validate version string format (YYYYMMDDHHmmss).
 * Resolves AUDIT_REPORT Section 6.3: Version check can redirect to arbitrary URL.
 *
 * @param {string} version - Version string to validate
 * @returns {boolean} true if format matches expected pattern
 */
function isValidVersion(version) {
  return typeof version === 'string' && /^\d{14}$/.test(version);
}

// ================================================================
// VISIBILITY HELPERS
// ================================================================

/**
 * Toggle element visibility using CSS classes instead of inline style.
 * Resolves AUDIT_REPORT Section 5.2 (rendering): inline style.display toggling.
 *
 * Requires CSS: .hidden { display: none !important; }
 *
 * @param {string} id - Element ID
 * @param {boolean} visible - true to show, false to hide
 */
function setVisible(id, visible) {
  var el = $el(id);
  if (el) el.classList.toggle('hidden', !visible);
}

// ================================================================
// EVENT HELPERS
// ================================================================

/**
 * Attach a delegated click handler to a parent element.
 * Resolves AUDIT_REPORT Section 5.2: 100+ inline onclick handlers.
 *
 * Usage:
 *   delegateClick('series-grid', '[data-action="edit"]', function(el) {
 *     openEditor(el.dataset.id);
 *   });
 *
 * @param {string} parentId - Parent element ID
 * @param {string} selector - CSS selector to match on click target
 * @param {function} handler - Callback receiving the matched element
 */
function delegateClick(parentId, selector, handler) {
  var parent = $el(parentId);
  if (!parent) return;
  parent.addEventListener('click', function (e) {
    var target = e.target.closest(selector);
    if (target && parent.contains(target)) {
      handler(target, e);
    }
  });
}

// ================================================================
// PERFORMANCE HELPERS
// ================================================================

/**
 * Debounce a function to prevent excessive calls.
 * Resolves AUDIT_REPORT Section 5.2: Missing debounce on handlers.
 *
 * @param {function} fn - Function to debounce
 * @param {number} ms - Delay in milliseconds
 * @returns {function} Debounced function
 */
function debounce(fn, ms) {
  var timer;
  return function () {
    var ctx = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () { fn.apply(ctx, args); }, ms);
  };
}

/**
 * Only run callback when tab is visible. Wraps setInterval.
 * Resolves AUDIT_REPORT Section 5.4: checkForUpdate polls even when tab hidden.
 *
 * @param {function} fn - Callback to run
 * @param {number} ms - Interval in milliseconds
 * @returns {number} Interval ID (can be cleared with clearInterval)
 */
function visibleInterval(fn, ms) {
  return setInterval(function () {
    if (!document.hidden) fn();
  }, ms);
}
