const revealElements = document.querySelectorAll('.reveal');
const timelineCards = document.querySelectorAll('.timeline-card');
const projectCards = document.querySelectorAll('.project-card');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  }
);

revealElements.forEach((el) => observer.observe(el));

// Add subtle stagger by animation delay for timeline cards.
timelineCards.forEach((card, index) => {
  card.style.transitionDelay = `${Math.min(index * 75, 380)}ms`;
  card.classList.add('reveal');
  observer.observe(card);
});

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${Math.min(index * 95, 300)}ms`;
  card.classList.add('reveal');
  observer.observe(card);
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
