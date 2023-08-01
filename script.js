// toogle navbar rsponve ===========================

let toogle = document.querySelector(".toogle");

let navbar = document.querySelector(".nav-part2");

toogle.addEventListener("click", function () {
  if (toogle.firstElementChild.classList.contains("fa-bars")) {
    toogle.firstElementChild.classList.replace("fa-bars", "fa-times");
  } else {
    toogle.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
  navbar.classList.toggle("show-slide");
});
// ↟↟ navbar toogel end =============

// ↓↓↓ locomotive scrool start =========================
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

// gaspa naimation start =====================================
gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "60%",
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top -60%",
    end: "top -40%",
    scrub: 3,
  },
});
tl2.to("  .page2,.page3 ", {
  backgroundColor: "#fff",
  color: "black",
});

gsap.from(".page4 h2", {
  y: -100,

  opacity: 0,
  stagger: 0.5,
  duration: 2,
  repeat: 90,
});

var boxes = document.querySelectorAll(".boxes");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var a = elem.getAttribute("data-image");
    crsr.style.width = "400px";
    crsr.style.height = "300px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${a})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.backgroundColor = "#0f0d0d";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

let page = document.querySelector(".page2");

// let navbar = document.querySelector(".nav-part2");

// page.addEventListener("click", function () {
//   if (page.classList.contains(".page2")) {
//     page.classList.replace(".page2", ".active");
//   } else {
//     page.classList.replace(".active", ".page2");
//   }
// });
