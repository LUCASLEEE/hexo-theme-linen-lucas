(function () {
  var MODES = ['auto', 'light', 'dark'];
  var LABELS = { auto: '跟随系统', light: '浅色', dark: '深色' };
  var root = document.documentElement;

  function isDarkPreferred() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function currentMode() {
    var mode = root.getAttribute('data-theme-mode');
    return MODES.indexOf(mode) > -1 ? mode : 'auto';
  }

  function paintButton(mode) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('data-mode', mode);
    btn.setAttribute('aria-label', '明暗主题：' + LABELS[mode] + '，点击切换');
    btn.title = '明暗主题：' + LABELS[mode] + '（点击切换）';
  }

  function apply(mode, persist) {
    var effective = mode === 'auto' ? (isDarkPreferred() ? 'dark' : 'light') : mode;
    root.setAttribute('data-theme', effective);
    root.setAttribute('data-theme-mode', mode);
    if (persist !== false) {
      try { localStorage.setItem('theme', mode); } catch (e) {}
    }
    paintButton(mode);
  }

  function mount() {
    // 按钮已由模板输出（header.ejs），这里只负责补上事件与初始状态
    var btn = document.getElementById('theme-toggle');
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var next = MODES[(MODES.indexOf(currentMode()) + 1) % MODES.length];
        apply(next);
      });
    }
    apply(currentMode(), false);
  }

  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq) {
    var onSystemChange = function () {
      if (currentMode() === 'auto') apply('auto', false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
