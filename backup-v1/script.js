const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
