// Handle preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 2000); // Show preloader for 2 seconds
});

// Handle navbar scroll effect
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}); 