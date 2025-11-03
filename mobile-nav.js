// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const dropdowns = document.querySelectorAll('.dropdown');

if (navToggle && navList) {
  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
  });

  // Mobile dropdown toggle
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-list a:not(.dropdown-toggle)');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navToggle.classList.remove('active');
      navList.classList.remove('active');
    }
  });
}
