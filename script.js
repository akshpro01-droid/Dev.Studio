// ========================================
// DEV.STUDIO
// SCRIPT.JS
// ========================================

// ========================================
// PAGE LOADER
// ========================================

const loader = document.querySelector(".loader");
const loaderProgress = document.querySelector(".loader-progress");


window.addEventListener("load", () => {

  const loaderTimeline = gsap.timeline();

  loaderTimeline

    .to(loaderProgress, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    })

    .to(".loader-text", {
      y: -30,
      opacity: 0,
      duration: 0.5
    })

    .to(".loader p", {
      opacity: 0,
      duration: 0.3
    }, "<")

    .to(".loader", {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut"
    })

    .set(".loader", {
      display: "none"
    });

});

// ========================================
// MENU
// ========================================

const menuButton = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-links a");


if (menuButton && menuOverlay && closeMenu) {

  // Open Menu
  menuButton.addEventListener("click", () => {

    menuOverlay.classList.add("active");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
    menuOverlay.setAttribute("aria-hidden", "false");

  });


  // Close Menu
  closeMenu.addEventListener("click", () => {

    menuOverlay.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuOverlay.setAttribute("aria-hidden", "true");

  });


  // Close menu when a link is clicked
  menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

      menuOverlay.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuOverlay.setAttribute("aria-hidden", "true");

    });

  });

}


// ========================================
// GSAP SETUP
// ========================================

gsap.registerPlugin(ScrollTrigger);


// ========================================
// HERO ANIMATION
// ========================================

const heroTimeline = gsap.timeline();


heroTimeline

  .from(".hero-label", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })

  .from(".hero h1", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  }, "-=0.4")

  .from(".hero-description", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")

  .from(".scroll-indicator", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.4");


// ========================================
// SECTION HEADERS ANIMATION
// ========================================

gsap.utils.toArray(".section-header").forEach((header) => {

  gsap.from(header, {

    scrollTrigger: {
      trigger: header,
      start: "top 85%"
    },

    y: 30,

    opacity: 0,

    duration: 0.8,

    ease: "power3.out"

  });

});


// ========================================
// ABOUT ANIMATION
// ========================================

gsap.from(".about h2", {

  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".about-content p", {

  scrollTrigger: {
    trigger: ".about",
    start: "top 65%"
  },

  y: 40,

  opacity: 0,

  duration: 0.8,

  delay: 0.2,

  ease: "power3.out"

});


// ========================================
// SERVICES ANIMATION
// ========================================

gsap.from(".service", {

  scrollTrigger: {
    trigger: ".service-list",
    start: "top 80%"
  },

  y: 50,

  opacity: 0,

  duration: 0.7,

  stagger: 0.12,

  ease: "power3.out"

});


// ========================================
// SKILLS ANIMATION
// ========================================

gsap.from(".skills-title", {

  scrollTrigger: {
    trigger: ".skills-title",
    start: "top 80%"
  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".skill-item", {

  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 85%"
  },

  y: 50,

  opacity: 0,

  duration: 0.7,

  stagger: 0.1,

  ease: "power3.out"

});


// ========================================
// WORK / PROJECTS ANIMATION
// ========================================

gsap.from(".project", {

  scrollTrigger: {
    trigger: ".work-list",
    start: "top 80%"
  },

  y: 70,

  opacity: 0,

  duration: 0.8,

  stagger: 0.15,

  ease: "power3.out"

});


// ========================================
// PROCESS ANIMATION
// ========================================

gsap.from(".process-intro h2", {

  scrollTrigger: {
    trigger: ".process-intro",
    start: "top 80%"
  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".process-item", {

  scrollTrigger: {
    trigger: ".process-list",
    start: "top 80%"
  },

  y: 50,

  opacity: 0,

  duration: 0.7,

  stagger: 0.12,

  ease: "power3.out"

});


// ========================================
// JOURNEY ANIMATION
// ========================================

gsap.from(".journey-title", {

  scrollTrigger: {
    trigger: ".journey-hero",
    start: "top 75%"
  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".journey-description", {

  scrollTrigger: {
    trigger: ".journey-hero",
    start: "top 75%"
  },

  y: 50,

  opacity: 0,

  duration: 0.8,

  delay: 0.2,

  ease: "power3.out"

});


gsap.from(".timeline-item", {

  scrollTrigger: {
    trigger: ".journey-timeline",
    start: "top 80%"
  },

  y: 50,

  opacity: 0,

  duration: 0.7,

  stagger: 0.12,

  ease: "power3.out"

});


// ========================================
// HUMAN × AI ANIMATION
// ========================================

gsap.from(".ai-title", {

  scrollTrigger: {
    trigger: ".ai-content",
    start: "top 75%"
  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".ai-description", {

  scrollTrigger: {
    trigger: ".ai-content",
    start: "top 75%"
  },

  y: 50,

  opacity: 0,

  duration: 0.8,

  delay: 0.2,

  ease: "power3.out"

});


gsap.from(".ai-principle", {

  scrollTrigger: {
    trigger: ".ai-principles",
    start: "top 80%"
  },

  y: 50,

  opacity: 0,

  duration: 0.7,

  stagger: 0.1,

  ease: "power3.out"

});


// ========================================
// CONTACT ANIMATION
// ========================================

gsap.from(".contact h2", {

  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%"
  },

  y: 100,

  opacity: 0,

  duration: 1.2,

  ease: "power4.out"

});


gsap.from(".contact-email", {

  scrollTrigger: {
    trigger: ".contact",
    start: "top 65%"
  },

  y: 30,

  opacity: 0,

  duration: 0.8,

  delay: 0.3,

  ease: "power3.out"

});


// ========================================
// FOOTER ANIMATION
// ========================================

gsap.from(".footer-top", {

  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%"
  },

  y: 50,

  opacity: 0,

  duration: 0.8,

  ease: "power3.out"

});


// ========================================
// SMOOTH SCROLL FOR NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    const target = document.querySelector(targetId);


    // Only prevent default if target exists
    if (target) {

      event.preventDefault();


      target.scrollIntoView({

        behavior: "smooth",

        block: "start"

      });

    }

  });

});


// ========================================
// CONSOLE MESSAGE
// ========================================

console.log("Dev.Studio loaded successfully 🚀");

// ========================================
// CUSTOM CURSOR
// ========================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {

  cursor.style.left = event.clientX + "px";

  cursor.style.top = event.clientY + "px";

});


// Interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .service, .project, .skill-item, .process-item, .timeline-item, .ai-principle"
);


interactiveElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    cursor.classList.add("active");

  });


  element.addEventListener("mouseleave", () => {

    cursor.classList.remove("active");

  });

});

// ========================================
// STICKY NAVBAR
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".menu-links a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >=
      sectionTop - sectionHeight / 3
    ) {
      currentSection = section.getAttribute("id");
    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

});

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================

const magneticButtons = document.querySelectorAll(
  ".menu-btn, .contact-email"
);

magneticButtons.forEach((button) => {

  button.addEventListener("mousemove", (event) => {

    const position = button.getBoundingClientRect();

    const x = event.clientX - position.left;
    const y = event.clientY - position.top;

    const centerX = position.width / 2;
    const centerY = position.height / 2;

    const moveX = (x - centerX) * 0.3;
    const moveY = (y - centerY) * 0.3;

    gsap.to(button, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power3.out"
    });

  });


  button.addEventListener("mouseleave", () => {

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });

  });

});

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  if (documentHeight > 0) {

    const scrollPercentage =
      (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
      scrollPercentage + "%";

  }

});