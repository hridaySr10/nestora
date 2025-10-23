//.....................hamburger.............//
let hamburger = document.querySelector(".hamburger");
let offcanvas = document.querySelector(".offcanvas");

hamburger.addEventListener("click", () => {
  offcanvas.classList.toggle("offcanvas-slide-btm");
});
//.....................hero image scroll animation..............//
let heroImgBox = document.querySelector(".hero-image .img-box");
// console.log(heroImgBox);

window.addEventListener("scroll", (e) => {
  let windowScrollPosition = window.scrollY;
  let maxScroll = document.body.clientHeight - window.innerHeight;
  let scrollFraction = windowScrollPosition / maxScroll;

  let minWidth = 70;
  let maxWidth = 650;
  // linear interpolation
  let width = minWidth + (maxWidth - minWidth) * scrollFraction;
  heroImgBox.style.width = `${Math.min(Math.max(width, minWidth), maxWidth)}%`;

  if (window.innerWidth < 768) {
    let minWidth = 85;
    let maxWidth = 500;
    // linear interpolation
    let width = minWidth + (maxWidth - minWidth) * scrollFraction;
    heroImgBox.style.width = `${Math.min(
      Math.max(width, minWidth),
      maxWidth
    )}%`;
  }
});

//..................section recent projects filter btn.............//
let projectFilterBtns = document.querySelectorAll(
  ".section-recent-projects .filter-btns a"
);
let projectBox = document.querySelectorAll(".project-box");

// console.log(projectFilterBtns);
projectFilterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    projectFilterBtns.forEach((btn) => {
      btn.classList.remove("filter-btn-active");
    });
    filterBtn.classList.add("filter-btn-active");

    // project box show
    projectBox.forEach((box) => {
      box.classList.remove("project-box-active");
    });
    let projectId = filterBtn.getAttribute("data-projects");
    let mainProjectBox = document.querySelector(projectId);
    mainProjectBox.classList.add("project-box-active");
  });
});

//...................trust number show.............//

//...................blog post horizontal scroll............//

//..............testimonial slide.................//
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonial-splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    height: "100%",
    arrows: false,
    pagination: false,
    gap: "0",
    keyboard: "global",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });
  splide.mount();
});

//....................blog-splide................//
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".blog-splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    height: "100%",
    arrows: false,
    pagination: false,
    gap: "0",
    keyboard: "global",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });
  splide.mount();

  // Play / Pause buttons
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  playBtn.addEventListener("click", () => splide.Components.Autoplay.play());
  pauseBtn.addEventListener("click", () => splide.Components.Autoplay.pause());
});
//....................hero text animation............//
const sr = ScrollReveal({
  duration: 1500,
  distance: "100px",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  opacity: 1,
  scale: 1,
  viewFactor: 0.15, // start when 15% visible
  reset: false,
  mobile: true,
});

sr.reveal(".hero-text .text-1 h1", {
  origin: "bottom",
  delay: 200,
});
sr.reveal(".hero-text .text-2 h1", {
  origin: "bottom",
  delay: 400,
});
sr.reveal(".hero-text .btm-text p", {
  origin: "bottom",
  delay: 700,
});
sr.reveal(".hero-text .hero-btn", {
  origin: "bottom",
  delay: 700,
});
sr.reveal(".hero-fixed-img .text", {
  origin: "bottom",
  delay: 1500,
  opacity: 0,
});
sr.reveal(".section-cta .cta-img-box", {
  origin: "bottom",
  distance: "200px",
  delay: 400,
  opacity: 1,
  scale: 0.95,
});
sr.reveal(
  ".section-cta .overlay-text h2, .section-cta .overlay-text .cta-btn",
  {
    origin: "bottom",
    delay: 600,
    opacity: 1,
    scale: 0.95,
    interval: 400,
  }
);
sr.reveal(
  ".about-box .mdl-img img , .section-recent-projects #project-box-one .card img, .section-blog .blog-card .img-box img",
  {
    opacity: 1,
    distance: "0px",
    origin: "center",
    delay: 300,
    duration: 800,
    reset: true,
    beforeReveal: function (el) {
      el.classList.add("revealed");
    },
  }
);
