// Basic interactivity and simple GSAP animations (GSAP loaded from CDN in HTML)

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Smooth scroll for internal links (works even if browser doesn't support scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple form submission feedback (non-functional placeholder)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! This sample form is not connected to a backend. Replace action with your endpoint or use a form service.');
    form.reset();
  });

  // GSAP entry animations (will run only if gsap is present)
  if(window.gsap){
    gsap.from('.brand', {y:-10, opacity:0, duration:0.8, delay:0.2});
    gsap.from('.hero-inner h1', {y:30, opacity:0, duration:0.9, delay:0.4});
    gsap.from('.hero-inner .lead', {y:20, opacity:0, duration:0.9, delay:0.6});
    gsap.from('.project-card', {y:20, opacity:0, duration:0.8, stagger:0.12, delay:0.2});
  }
});
