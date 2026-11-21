(() => {
  const map = document.querySelector('[data-map-reveal]');
  if (!map) return;
  const hint = map.querySelector('[data-map-hint]');
  const touchOnly = window.matchMedia('(hover: none)').matches;
  if (touchOnly && hint) hint.textContent = 'Tap anywhere on the map to reveal contours';
  const setSpot = (event) => {
    const rect = map.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    map.style.setProperty('--gl-x', `${x}px`);
    map.style.setProperty('--gl-y', `${y}px`);
  };
  map.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    setSpot(event);
    map.classList.add('is-revealing');
  });
  map.addEventListener('pointerleave', () => {
    if (!touchOnly) map.classList.remove('is-revealing');
  });
  map.addEventListener('pointerdown', (event) => {
    setSpot(event);
    if (event.pointerType === 'touch') {
      map.classList.toggle('is-revealing');
    } else {
      map.classList.add('is-revealing');
    }
  });
})();
