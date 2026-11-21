/* Small, dependency-free site behaviour (replaces the jQuery-based theme bundle). */
(function () {
  'use strict';

  // Kramdown puts an empty permalink <a> at the start of each heading; move it to
  // the end so the link icon follows the heading text (as the theme script did).
  document.querySelectorAll(':is(.page__content, .archive) :is(h1, h2, h3, h4, h5, h6)[id]').forEach(function (heading) {
    var link = heading.firstElementChild;
    if (link && link.matches("a[href^='#']:empty") && link.getAttribute('href') === '#' + heading.id) {
      link.classList.add('heading-permalink');
      link.setAttribute('aria-label', 'Permalink');
      heading.appendChild(link);
    }
  });

  // Sidebar "Follow" button: on narrow screens the theme hides the profile links
  // behind this button. Toggle them, and keep the state readable by screen readers.
  document.querySelectorAll('.author__urls-wrapper').forEach(function (wrapper) {
    var button = wrapper.querySelector('button');
    var list = wrapper.querySelector('.author__urls');
    if (!button || !list) return;

    if (!list.id) list.id = 'author-links';
    button.setAttribute('aria-controls', list.id);
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.classList.toggle('open', open);
      list.style.display = open ? 'block' : '';
    });
  });

  // Before/after comparison sliders: the range input drives the --pos variable.
  document.querySelectorAll('[data-compare]').forEach(function (box) {
    var range = box.querySelector('input[type=range]');
    if (!range) return;
    var update = function () { box.style.setProperty('--pos', range.value + '%'); };
    range.addEventListener('input', update);
    update();
  });

  // "Copy BibTeX" buttons.
  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.addEventListener('click', function () {
      var source = document.querySelector(button.getAttribute('data-copy'));
      if (!source || !navigator.clipboard) return;
      navigator.clipboard.writeText(source.textContent).then(function () {
        var label = button.textContent;
        button.textContent = 'Copied';
        setTimeout(function () { button.textContent = label; }, 1500);
      });
    });
  });
})();
