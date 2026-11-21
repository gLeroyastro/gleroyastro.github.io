(function () {
  const reveal = document.getElementById('map-reveal');
  if (!reveal) return;

  function setFromEvent(event) {
    const rect = reveal.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    reveal.style.setProperty('--reveal-x', `${Math.max(0, Math.min(100, x))}%`);
    reveal.style.setProperty('--reveal-y', `${Math.max(0, Math.min(100, y))}%`);
  }

  reveal.addEventListener('mouseenter', function (event) {
    reveal.classList.add('is-active');
    setFromEvent(event);
  });

  reveal.addEventListener('mousemove', setFromEvent);

  reveal.addEventListener('mouseleave', function () {
    reveal.classList.remove('is-active');
  });

  reveal.addEventListener('touchstart', function () {
    reveal.classList.add('is-active');
  }, { passive: true });
})();
