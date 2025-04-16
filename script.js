const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");

// Move cursor on mouse move
document.body.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.2,
    ease: "power2.out",
  });
});

// Scale up when mouse enters #main
main.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 5,
    duration: 0.3,
    ease: "power2.out",
    scrub:2
    
  });
});

// Scale back down when mouse leaves #main
main.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 2,
    duration: 0.3,
    ease: "power2.out",
  });
});
