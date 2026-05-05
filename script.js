const header = document.getElementById('site-header');
const menuButton = document.getElementById('menu-button');
const mobilePanel = document.getElementById('mobile-panel');
const year = document.getElementById('year');

function updateHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 20);
}

function closeMenu() {
  menuButton.classList.remove('open');
  mobilePanel.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = menuButton.classList.toggle('open');
  mobilePanel.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
}

year.textContent = new Date().getFullYear();
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
menuButton.addEventListener('click', toggleMenu);
mobilePanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeMenu();
});
