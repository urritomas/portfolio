document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;


  const saved = localStorage.getItem('theme'); 
  if (saved) body.classList.toggle('light', saved === 'light');
  else {
  
    body.classList.remove('light');
  }


  const updateIcon = () => {
    toggle.textContent = body.classList.contains('light') ? '🌙' : '☀️';
  };
  updateIcon();

  toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    updateIcon();
  });
});

// touch fallback: toggle .hover class on touch devices so hover shadow appears
if ('ontouchstart' in window) {
  document.querySelectorAll('.current .project').forEach(el => {
    el.addEventListener('touchstart', () => el.classList.add('hover'), { passive: true });
    el.addEventListener('touchend', () => el.classList.remove('hover'));
    el.addEventListener('touchcancel', () => el.classList.remove('hover'));
  });
}