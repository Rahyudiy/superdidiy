const ourText = new SplitType(".text", { types: "chars" });
const chars = ourText.chars;
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;
});

function hitungLoading() {
  var hitung = setInterval(function () {
    var a = 0;
    a = parseInt($(".hitung").text());
    $(".hitung").text((++a).toString());
    if (a == 100) {
      clearInterval(hitung);
      $(".hitung").addClass("hide");
      $(".preloader").addClass("active");
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
        }
      );
    }
  }, 25);
}
hitungLoading();

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  gsap.to("#about", {
    x: 100,
    duration: 5,
    opacity: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "top center",
      scrub: 2,
    },
  });
  gsap.to("#me", {
    x: 100,
    duration: 5,
    opacity: 1,
    scrollTrigger: {
      trigger: "#me",
      start: "top 80%",
      end: "top center",
      scrub: 2,
    },
  });
  gsap.to("#end", {
    y: 100,
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#footer",
      start: "top 50%",
      end: "top center",
      scrub: 5,
    },
  });
  gsap.to("#say-hi", {
    y: 100,
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#quote",
      start: "top 70%",
      end: "top 60%",
      scrub: 5,
    },
  });
  gsap.to("#contact", {
    y: 500,
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%",
      end: "top 30%",
      scrub: 5,
    },
  });
 
});

const currentYear = new Date().getFullYear();

// Display the current year in the 'year' paragraph
document.getElementById("year").textContent = `${currentYear}`;
