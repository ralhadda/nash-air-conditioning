// Trigger logo animation when form section is scrolled into view
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.contact-logo-spin');
  const formSection = document.querySelector('#content');

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the form section is in view
      if (entry.isIntersecting) {
        // Add the animate class to trigger the animation
        logo.classList.add('animate');
        // Optional: Unobserve after animation triggers once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of the section is visible
  });

  // Start observing the form section
  if (formSection) {
    observer.observe(formSection);
  }
});
