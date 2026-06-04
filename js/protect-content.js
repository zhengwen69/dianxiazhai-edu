/**
 * CDU GuFei Demo — Content Protection Module
 * Tier 1 (full): CSS user-select + JS anti-copy + anti-print
 * Tier 2 (light): JS anti-copy only
 * Copyright © 黄正文（点暇斋）· 2026
 */
(function () {
  'use strict';
  var level = document.documentElement.getAttribute('data-protect') || 'none';
  if (level === 'none') return;

  // Block right-click
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  // Block drag
  document.addEventListener('dragstart', function (e) { e.preventDefault(); });

  if (level === 'full') {
    // Block keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && ['c', 's', 'p', 'u', 'a'].indexOf(e.key) !== -1) e.preventDefault();
      if (e.key === 'F12') e.preventDefault();
    });
    // Block print
    var style = document.createElement('style');
    style.textContent = '@media print{body{display:none}}';
    document.head.appendChild(style);
    // Block text selection via CSS
    document.documentElement.style.userSelect = 'none';
    document.documentElement.style.webkitUserSelect = 'none';
  }
})();
