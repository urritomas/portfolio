document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  // start in dark mode to match the screenshot unless user pref saved
  const saved = localStorage.getItem('theme'); // 'dark' or 'light'
  if (saved) body.classList.toggle('light', saved === 'light');
  else {
    // default to dark: ensure no 'light' class
    body.classList.remove('light');
  }

  // set correct icon
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