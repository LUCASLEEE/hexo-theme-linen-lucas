(function () {
  try {
    var fallback = document.documentElement.getAttribute('data-theme-default') || 'auto';
    if (['auto', 'light', 'dark'].indexOf(fallback) < 0) fallback = 'auto';
    var saved = localStorage.getItem('theme');
    var mode = saved === 'light' || saved === 'dark' || saved === 'auto' ? saved : fallback;
    var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var effective = mode === 'auto' ? (dark ? 'dark' : 'light') : mode;
    var root = document.documentElement;
    root.setAttribute('data-theme', effective);
    root.setAttribute('data-theme-mode', mode);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-theme-mode', 'auto');
  }
})();
