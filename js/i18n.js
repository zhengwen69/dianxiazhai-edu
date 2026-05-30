/**
 * CDU GuFei Demo - i18n Translation Engine
 * Supports: zh (Chinese, default), en (English), th (Thai)
 * Version 1.0 · 2026.05.31
 */
(function () {
  'use strict';

  var I18N = {
    current: 'zh',
    data: {},

    init: function () {
      // 1. Determine language: URL param > localStorage > default zh
      var params = new URLSearchParams(window.location.search);
      var lang = params.get('lang') || localStorage.getItem('cdu-gufei-lang') || 'zh';

      if (lang === 'zh') {
        this.current = 'zh';
        document.documentElement.lang = 'zh-CN';
        this.updateSwitcher();
        return;
      }

      if (lang !== 'en' && lang !== 'th') {
        lang = 'zh';
        this.current = 'zh';
        document.documentElement.lang = 'zh-CN';
        this.updateSwitcher();
        return;
      }

      // Hide body to prevent flicker
      document.documentElement.style.visibility = 'hidden';

      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'lang/' + lang + '.json', true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          try {
            self.data = JSON.parse(xhr.responseText);
            self.current = lang;
            document.documentElement.lang = lang === 'th' ? 'th' : 'en';
            self.translate();
          } catch (e) {
            console.warn('i18n: JSON parse error', e);
            self.current = 'zh';
          }
        }
        document.documentElement.style.visibility = 'visible';
        self.updateSwitcher();
      };
      xhr.onerror = function () {
        console.warn('i18n: Failed to load ' + lang + '.json');
        document.documentElement.style.visibility = 'visible';
        self.current = 'zh';
        self.updateSwitcher();
      };
      xhr.send();
    },

    translate: function () {
      if (this.current === 'zh') return;

      // data-i18n: replace textContent
      var textEls = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < textEls.length; i++) {
        var key = textEls[i].getAttribute('data-i18n');
        var val = this.get(key);
        if (val !== undefined) {
          textEls[i].textContent = val;
        }
      }

      // data-i18n-html: replace innerHTML
      var htmlEls = document.querySelectorAll('[data-i18n-html]');
      for (var j = 0; j < htmlEls.length; j++) {
        var hkey = htmlEls[j].getAttribute('data-i18n-html');
        var hval = this.get(hkey);
        if (hval !== undefined) {
          htmlEls[j].innerHTML = hval;
        }
      }

      // data-i18n-placeholder
      var phEls = document.querySelectorAll('[data-i18n-placeholder]');
      for (var k = 0; k < phEls.length; k++) {
        var pkey = phEls[k].getAttribute('data-i18n-placeholder');
        var pval = this.get(pkey);
        if (pval !== undefined) {
          phEls[k].placeholder = pval;
        }
      }

      // data-i18n-title
      var tEls = document.querySelectorAll('[data-i18n-title]');
      for (var m = 0; m < tEls.length; m++) {
        var tkey = tEls[m].getAttribute('data-i18n-title');
        var tval = this.get(tkey);
        if (tval !== undefined) {
          tEls[m].title = tval;
        }
      }

      // document title
      var docTitleKey = document.documentElement.getAttribute('data-i18n-title');
      if (docTitleKey) {
        var dtVal = this.get(docTitleKey);
        if (dtVal !== undefined) {
          document.title = dtVal;
        }
      }

      // Dispatch event for pages with dynamic content
      try {
        window.dispatchEvent(new CustomEvent('i18n:translated', { detail: { lang: this.current } }));
      } catch (e) {}
    },

    get: function (key) {
      var parts = key.split('.');
      var obj = this.data;
      for (var i = 0; i < parts.length; i++) {
        if (obj === null || obj === undefined) return undefined;
        obj = obj[parts[i]];
      }
      return obj;
    },

    switchLang: function (lang) {
      localStorage.setItem('cdu-gufei-lang', lang);
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.location.href = url.toString();
    },

    updateSwitcher: function () {
      var btns = document.querySelectorAll('.lang-switch-btn');
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].getAttribute('data-lang') === this.current) {
          btns[i].classList.add('active');
        } else {
          btns[i].classList.remove('active');
        }
      }
    }
  };

  window.I18N = I18N;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { I18N.init(); });
  } else {
    I18N.init();
  }
})();
