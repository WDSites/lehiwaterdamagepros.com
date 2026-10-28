(function () {
  var BP = 768;
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var toggle = document.getElementById('mob-toggle');
  var closeBtn = document.getElementById('drawer-close');
  function openDrawer() {
    drawer.classList.add('open'); overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeDrawer() {
    drawer.classList.remove('open'); overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    drawer.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeDrawer(); });
    window.addEventListener('resize', function () { if (window.innerWidth > BP) closeDrawer(); });
  }
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (it) {
    var q = it.querySelector('.faq-q');
    var a = it.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = it.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  });
})();
