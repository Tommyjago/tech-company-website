document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  const yearNode = document.getElementById('year');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    const navLinks = document.querySelectorAll('.main-nav a, .nav-actions a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
