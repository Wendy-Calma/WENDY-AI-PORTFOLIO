// Mobile navigation toggle and current-page highlight.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });

    // Close the menu after choosing a link (useful for same-page anchors).
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  // Mark the link for the current page. Works on GitHub Pages sub-paths
  // (e.g. /portfolio/about.html) and on the root URL (/portfolio/).
  var file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    if (a.getAttribute('href') === file) a.setAttribute('aria-current', 'page');
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
