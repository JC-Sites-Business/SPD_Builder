// Simple carousel pause on hover (optional enhancement)
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelector('.slides');

  let paused = false;

  carousel.addEventListener('mouseenter', () => {
    slides.style.animationPlayState = 'paused';
  });

  carousel.addEventListener('mouseleave', () => {
    slides.style.animationPlayState = 'running';
  });