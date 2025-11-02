// Carousel functionality for service pages
document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!carouselTrack || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Function to update carousel position
  function updateCarousel(slideIndex) {
    // Update track position
    const translateX = -slideIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    currentSlide = slideIndex;
  }

  // Function to go to next slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    updateCarousel(nextIndex);
  }

  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
      // Reset the auto-slide timer when manually clicking a dot
      resetAutoSlide();
    });
  });

  // Auto-slide every 3 seconds
  let autoSlideInterval = setInterval(nextSlide, 3000);

  // Function to reset auto-slide timer
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  // Pause auto-slide when hovering over carousel
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 3000);
    });
  }
});
