// i18n — language switching for static site
(function() {
    let translations = null;
    const STORAGE_KEY = 'lang';

    function getLang() {
        // URL param takes priority
        const params = new URLSearchParams(window.location.search);
        if (params.has('lang')) return params.get('lang');
        // Then localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        // Default
        return 'en';
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        if (lang === 'zh') {
            applyTranslations();
        } else {
            revertToEnglish();
        }
        updateToggle(lang);
    }

    function applyTranslations() {
        if (!translations) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                // Store original English text on first switch
                if (!el.hasAttribute('data-i18n-en')) {
                    el.setAttribute('data-i18n-en', el.textContent);
                }
                el.textContent = translations[key];
            }
        });
    }

    function revertToEnglish() {
        document.querySelectorAll('[data-i18n-en]').forEach(el => {
            el.textContent = el.getAttribute('data-i18n-en');
        });
    }

    function updateToggle(lang) {
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    }

    // Load Chinese translations, then apply if needed
    async function init() {
        const lang = getLang();
        try {
            const resp = await fetch('lang/zh.json');
            translations = await resp.json();
        } catch (e) {
            console.warn('Failed to load translations', e);
        }
        if (lang === 'zh') setLang('zh');
        else updateToggle('en');

        // Toggle button
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const current = getLang();
                const next = current === 'zh' ? 'en' : 'zh';
                setLang(next);
                // Update URL without reload
                const url = new URL(window.location);
                url.searchParams.set('lang', next);
                history.replaceState(null, '', url);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
