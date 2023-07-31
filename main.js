gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".hero .btn", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".feature", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".features",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".cta h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".cta",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".btn-footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".cta",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".testimonial", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".about-us h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".about-us p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".about-us",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
