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

/*=============== PARTICLE CANVAS CLASS ===============*/
class ParticleCanvas {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.time = 0;

    // Options with defaults - optimized for performance
    this.options = {
      subtle: options.subtle || false,
      particleCount: options.subtle ? 30 : 50,  // Zmniejszono liczbę cząstek
      particleSize: options.subtle ? 2 : 3,
      particleSpeed: options.subtle ? 0.3 : 0.5,
      particleOpacity: options.subtle ? 0.4 : 0.5,
      connectionOpacity: options.subtle ? 0.15 : 0.3,
      connectionDistance: options.subtle ? 120 : 150,  // Ograniczono dystans połączeń
      shadowBlur: options.subtle ? 4 : 8,  // Zmniejszono blur dla lepszej wydajności
      showWaves: options.subtle ? false : (options.showWaves !== false),  // Wyłączono fale dla subtle
      showGradient: options.subtle ? false : (options.showGradient !== false),  // Wyłączono gradient dla subtle
      waveOpacity: options.subtle ? 0.15 : 0.25,
      waveStep: options.subtle ? 3 : 2,  // Co ile pikseli rysować falę (więcej = szybciej)
      gradientOpacity: options.subtle ? 0.03 : 0.05
    };

    // White color for particles
    this.colors = [
      { r: 255, g: 255, b: 255 }  // białe
    ];

    // Colorful palette for connections
    this.connectionColors = [
      { r: 134, g: 45, b: 89 },   // #862d59 bordowy
      { r: 255, g: 102, b: 153 }, // #ff6699 różowy
      { r: 153, g: 0, b: 255 },   // #9900ff fioletowy
      { r: 0, g: 153, b: 153 },   // #009999 turkusowy
      { r: 255, g: 0, b: 102 },   // #ff0066 ciemny różowy
      { r: 102, g: 0, b: 204 }    // #6600cc ciemny fioletowy
    ];

    this.setCanvasSize();
    this.init();
    this.animate();

    // Handle resize with debounce for performance
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.setCanvasSize();
        this.init();
      }, 250);
    });
  }

  setCanvasSize() {
    this.width = this.canvas.width = this.canvas.offsetWidth;
    this.height = this.canvas.height = this.canvas.offsetHeight;
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: Math.random() * this.options.particleSize + 1,
      speedX: Math.random() * this.options.particleSpeed - this.options.particleSpeed / 2,
      speedY: Math.random() * this.options.particleSpeed - this.options.particleSpeed / 2,
      opacity: Math.random() * this.options.particleOpacity + 0.3,
      colorIndex: Math.floor(Math.random() * this.colors.length),
      connectionColorIndex: Math.floor(Math.random() * this.connectionColors.length)
    };
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  updateParticle(particle) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x > this.width) particle.x = 0;
    if (particle.x < 0) particle.x = this.width;
    if (particle.y > this.height) particle.y = 0;
    if (particle.y < 0) particle.y = this.height;
  }

  drawParticle(particle) {
    const color = this.colors[particle.colorIndex];
    this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${particle.opacity})`;

    // Add glow effect
    this.ctx.shadowBlur = this.options.shadowBlur;
    this.ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;

    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.shadowBlur = 0;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Animated gradient background (optional)
    if (this.options.showGradient) {
      const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
      const t = this.time * 0.5;
      const baseOpacity = this.options.gradientOpacity;

      gradient.addColorStop(0, `rgba(134, 45, 89, ${baseOpacity + Math.sin(t) * 0.03})`);
      gradient.addColorStop(0.3, `rgba(153, 0, 255, ${baseOpacity + Math.cos(t * 1.3) * 0.04})`);
      gradient.addColorStop(0.6, `rgba(0, 153, 153, ${baseOpacity + Math.sin(t * 0.8) * 0.03})`);
      gradient.addColorStop(1, `rgba(102, 0, 204, ${baseOpacity + Math.cos(t * 1.1) * 0.03})`);

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }

    this.time += 0.01;

    // Multiple animated waves (optional) - optimized
    if (this.options.showWaves) {
      const waveOpacity = this.options.waveOpacity;
      const step = this.options.waveStep;

      // Wave 1 - Pink
      this.ctx.beginPath();
      this.ctx.strokeStyle = `rgba(255, 102, 153, ${waveOpacity + Math.sin(this.time * 2) * 0.1})`;
      this.ctx.lineWidth = 2;
      this.ctx.moveTo(0, this.height / 2);
      for (let x = 0; x < this.width; x += step) {
        const y = this.height / 2 + Math.sin(x * 0.01 + this.time) * 50 + Math.sin(x * 0.02 + this.time * 0.5) * 30;
        this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Wave 2 - Purple
      this.ctx.beginPath();
      this.ctx.strokeStyle = `rgba(153, 0, 255, ${waveOpacity * 0.8 + Math.cos(this.time * 1.5) * 0.1})`;
      this.ctx.lineWidth = 2;
      this.ctx.moveTo(0, this.height / 2 + 50);
      for (let x = 0; x < this.width; x += step) {
        const y = this.height / 2 + 50 + Math.sin(x * 0.015 + this.time * 1.2) * 40 + Math.cos(x * 0.025 + this.time * 0.7) * 25;
        this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Wave 3 - Cyan (pomijamy dla dodatkowej wydajności)
      // this.ctx.beginPath();
      // this.ctx.strokeStyle = `rgba(0, 153, 153, ${waveOpacity * 0.6 + Math.sin(this.time * 1.8) * 0.1})`;
      // this.ctx.lineWidth = 1.5;
      // this.ctx.moveTo(0, this.height / 2 - 50);
      // for (let x = 0; x < this.width; x += step) {
      //   const y = this.height / 2 - 50 + Math.cos(x * 0.012 + this.time * 0.9) * 35 + Math.sin(x * 0.018 + this.time * 1.3) * 20;
      //   this.ctx.lineTo(x, y);
      // }
      // this.ctx.stroke();
    }

    // Update and draw particles
    this.particles.forEach(particle => {
      this.updateParticle(particle);
      this.drawParticle(particle);
    });

    // Draw connections - optimized
    const maxDist = this.options.connectionDistance;
    this.particles.forEach((a, i) => {
      this.particles.slice(i + 1).forEach(b => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        // Quick distance check przed sqrt (szybsze)
        const distSq = dx * dx + dy * dy;
        const maxDistSq = maxDist * maxDist;

        if (distSq < maxDistSq) {
          const distance = Math.sqrt(distSq);
          const colorA = this.connectionColors[a.connectionColorIndex];
          const colorB = this.connectionColors[b.connectionColorIndex];
          const r = (colorA.r + colorB.r) / 2;
          const g = (colorA.g + colorB.g) / 2;
          const blue = (colorA.b + colorB.b) / 2;

          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${blue}, ${this.options.connectionOpacity * (1 - distance / maxDist)})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.stroke();
        }
      });
    });

    requestAnimationFrame(() => this.animate());
  }
}

/*=============== INITIALIZE CANVAS ANIMATIONS ===============*/
// Wait for page to be fully loaded
window.addEventListener('load', () => {
  // All canvases with subtle effect (optimized)
  new ParticleCanvas('hero-canvas', { subtle: true });
  new ParticleCanvas('ensemble-canvas', { subtle: true });
  new ParticleCanvas('repertuar-canvas', { subtle: true });
  new ParticleCanvas('kalendarz-canvas', { subtle: true });
  new ParticleCanvas('galeria-canvas', { subtle: true });
  new ParticleCanvas('fundacja-canvas', { subtle: true });
  new ParticleCanvas('kontakt-canvas', { subtle: true });
});

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

// Observe ensemble members
document.querySelectorAll('.ensemble__member').forEach((member, index) => {
  member.style.transitionDelay = `${index * 0.15}s`;
  observer.observe(member);
});

/*=============== ENSEMBLE MEMBERS 3D PARALLAX ===============*/
document.querySelectorAll('.ensemble__member').forEach(member => {
  const imageWrapper = member.querySelector('.ensemble__member-image-wrapper');

  if (imageWrapper) {
    member.addEventListener('mousemove', (e) => {
      const rect = member.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      imageWrapper.style.transform = `
        translateY(-10px)
        scale(1.02)
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    member.addEventListener('mouseleave', () => {
      imageWrapper.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
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

// Add ensemble member images to lightbox
const ensembleMemberWrappers = document.querySelectorAll('.ensemble__member-image-wrapper');
ensembleMemberWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const img = wrapper.querySelector('.ensemble__member-image');
    // Find index in images array or add if not present
    let imageIndex = images.findIndex(image => image.src === img.src);
    if (imageIndex === -1) {
      // Add to images array temporarily
      imageIndex = images.length;
      images.push({
        src: img.src,
        alt: img.alt
      });
    }
    openLightbox(imageIndex);
  });
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

/*=============== ENHANCED HERO ANIMATIONS ===============*/
const heroSection = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero__title');
const heroSubtitle = document.querySelector('.hero__subtitle');
const heroTagline = document.querySelector('.hero__tagline');
const heroButton = document.querySelector('.hero__button');

if (heroSection) {
  // Mouse parallax effect
  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroSection;

    const moveX = (clientX / offsetWidth - 0.5) * 30;
    const moveY = (clientY / offsetHeight - 0.5) * 30;

    if (heroTitle) {
      heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    if (heroSubtitle) {
      heroSubtitle.style.transform = `translate(${-moveX * 0.5}px, ${-moveY * 0.5}px)`;
    }
    if (heroTagline) {
      heroTagline.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    if (heroTitle) heroTitle.style.transform = 'translate(0, 0)';
    if (heroSubtitle) heroSubtitle.style.transform = 'translate(0, 0)';
    if (heroTagline) heroTagline.style.transform = 'translate(0, 0)';
  });

  // Typing effect for tagline
  if (heroTagline) {
    const originalText = heroTagline.textContent;
    heroTagline.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < originalText.length) {
        heroTagline.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    // Start typing after a delay
    setTimeout(typeWriter, 1000);
  }

  // Particle effect on button hover
  if (heroButton) {
    heroButton.addEventListener('mouseenter', function() {
      for (let i = 0; i < 10; i++) {
        createParticle(this);
      }
    });
  }

  function createParticle(element) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = 'rgba(255, 102, 153, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';

    const rect = element.getBoundingClientRect();
    particle.style.left = rect.left + Math.random() * rect.width + 'px';
    particle.style.top = rect.top + Math.random() * rect.height + 'px';
    particle.style.transition = 'all 1s ease-out';

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
      particle.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Rainbow text effect on title
  if (heroTitle) {
    let rainbowHue = 0;
    setInterval(() => {
      rainbowHue = (rainbowHue + 1) % 360;
      heroTitle.style.textShadow = `
        0 0 30px hsla(${rainbowHue}, 100%, 70%, 0.5),
        0 0 60px hsla(${(rainbowHue + 60) % 360}, 100%, 70%, 0.3),
        0 0 90px hsla(${(rainbowHue + 120) % 360}, 100%, 70%, 0.2)
      `;
    }, 50);
  }
}

/*=============== LOG ON LOAD ===============*/
console.log('%c✨ Ensemble Kompopolex ✨', 'font-size: 24px; font-weight: bold; color: #4a90e2;');
console.log('%cStrona stworzona z pasją do muzyki 🎵', 'font-size: 14px; color: #c0c5ce;');
