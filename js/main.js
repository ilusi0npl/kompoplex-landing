/*=============== SHOW/HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add('active-link');
    } else {
      link?.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/*=============== HERO CANVAS ANIMATION ===============*/
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;
  let particles = [];
  let time = 0;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > width) this.x = 0;
      if (this.x < 0) this.x = width;
      if (this.y > height) this.y = 0;
      if (this.y < 0) this.y = height;
    }

    draw() {
      ctx.fillStyle = `rgba(74, 144, 226, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(74, 144, 226, 0.05)');
    gradient.addColorStop(1, 'rgba(26, 31, 46, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Animated wave
    time += 0.01;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)';
    ctx.lineWidth = 2;
    ctx.moveTo(0, height / 2);

    for (let x = 0; x < width; x++) {
      const y = height / 2 + Math.sin(x * 0.01 + time) * 50 + Math.sin(x * 0.02 + time * 0.5) * 30;
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.strokeStyle = `rgba(74, 144, 226, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    init();
  });

  init();
  animate();
}

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe ensemble cards
document.querySelectorAll('.ensemble__card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
  observer.observe(card);
});

// Observe kalendarz events
document.querySelectorAll('.kalendarz__event').forEach((event, index) => {
  event.style.transitionDelay = `${index * 0.2}s`;
  observer.observe(event);
});

// Observe galeria items
document.querySelectorAll('.galeria__item').forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(item);
});

/*=============== ENSEMBLE STATS COUNTER ===============*/
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.ensemble__stat-number');

      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            stat.textContent = target + '+';
            clearInterval(counter);
          } else {
            stat.textContent = Math.floor(current) + '+';
          }
        }, 16);
      });

      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const ensembleStats = document.querySelector('.ensemble__stats');
if (ensembleStats) {
  statsObserver.observe(ensembleStats);
}

/*=============== REPERTUAR FILTER ===============*/
const filterButtons = document.querySelectorAll('.repertuar__filter');
const repertuarCards = document.querySelectorAll('.repertuar__card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    repertuarCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'wszystko' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/*=============== GALERIA LIGHTBOX ===============*/
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');
const galeriaItems = document.querySelectorAll('.galeria__item');

let currentImageIndex = 0;
const images = Array.from(galeriaItems).map(item => {
  const img = item.querySelector('.galeria__image');
  return {
    src: img.src,
    alt: img.alt
  };
});

function openLightbox(index) {
  currentImageIndex = index;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const image = images[currentImageIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

galeriaItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNextImage();
  if (e.key === 'ArrowLeft') showPrevImage();
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.kontakt__submit');
    const submitText = submitButton.querySelector('.kontakt__submit-text');
    const submitLoader = submitButton.querySelector('.kontakt__submit-loader');

    // Show loading state
    submitText.style.display = 'none';
    submitLoader.style.display = 'block';
    submitButton.disabled = true;

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission (replace with actual API call)
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success
      formMessage.textContent = 'Wiadomość została wysłana! Odezwiemy się wkrótce.';
      formMessage.classList.remove('error');
      formMessage.classList.add('success');
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('success');
      }, 5000);

    } catch (error) {
      // Error
      formMessage.textContent = 'Wystąpił błąd. Spróbuj ponownie później.';
      formMessage.classList.remove('success');
      formMessage.classList.add('error');

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('error');
      }, 5000);
    } finally {
      // Hide loading state
      submitText.style.display = 'block';
      submitLoader.style.display = 'none';
      submitButton.disabled = false;
    }
  });
}

/*=============== SCROLL TO TOP ===============*/
const scrollTop = document.getElementById('scroll-top');

function toggleScrollTop() {
  if (this.scrollY >= 800) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleScrollTop);

scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/*=============== PARALLAX EFFECT ===============*/
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero__visual');

  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/*=============== LOG ON LOAD ===============*/
console.log('%c✨ Ensemble Kompopolex ✨', 'font-size: 24px; font-weight: bold; color: #4a90e2;');
console.log('%cStrona stworzona z pasją do muzyki 🎵', 'font-size: 14px; color: #c0c5ce;');
