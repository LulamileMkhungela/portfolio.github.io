// Tilt folder artwork only; never transform the draggable project button itself.
(() => {
  const layer = document.getElementById('project-layer');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!layer) return;

  layer.addEventListener('pointermove', (event) => {
    if (motion.matches || event.pointerType !== 'mouse' || event.buttons) return;
    const folder = event.target.closest('.project-icon');
    if (!folder) return;
    const bounds = folder.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    folder.style.setProperty('--depth-x', `${(-y * 18).toFixed(1)}deg`);
    folder.style.setProperty('--depth-y', `${(x * 24).toFixed(1)}deg`);
  });
  layer.addEventListener('pointerout', (event) => {
    const folder = event.target.closest('.project-icon');
    if (!folder || folder.contains(event.relatedTarget)) return;
    folder.style.removeProperty('--depth-x');
    folder.style.removeProperty('--depth-y');
  });
})();
