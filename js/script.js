// GSAP ScrollTrigger Animations

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate header navigation links
  gsap.from('.nav-link', {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 0.6,
    ease: 'power2.out',
  });

  // Home section animations
  gsap.from('.home-text h1', {
    scrollTrigger: {
      trigger: '.home-text h1',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.home-text p', {
    scrollTrigger: {
      trigger: '.home-text p',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    delay: 0.3,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.btn-primary', {
    scrollTrigger: {
      trigger: '.btn-primary',
      start: 'top 80%',
    },
    opacity: 0,
    scale: 0.8,
    delay: 0.6,
    duration: 0.8,
    ease: 'back.out(1.7)',
  });

  gsap.from('.home-image img', {
    scrollTrigger: {
      trigger: '.home-image img',
      start: 'top 80%',
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
  });

  // Features section animations
  gsap.utils.toArray('.feature-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,
      delay: i * 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });
  });

  // About section animation
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });


  // Contact form animation
  gsap.from('.contact-content', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });

  // 3D rotation effect on home-image
  const homeImage = document.querySelector('.home-image img');
  const container = document.querySelector('.home-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the container
    const y = e.clientY - rect.top;  // y position within the container

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15; // max 15 degrees rotation
    const rotateY = ((x - centerX) / centerX) * 15;

    homeImage.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    homeImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// Smooth scrolling on nav-link clicks
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// GSAP typing animation for slogan text
const sloganText = document.getElementById('slogan-text');
if (sloganText) {
  const text = sloganText.textContent;
  sloganText.textContent = '';
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  // Create a span for each character
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    sloganText.appendChild(span);
    tl.to(span, { opacity: 1, duration: 0.05 }, i * 0.1);
  });
}
