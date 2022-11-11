const menuBtn = document.querySelector("#menu-btn");
const body = document.querySelector("body");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    // fadeElems.forEach(function (element) {
    //   element.classList.remove("fade-in");
    //   element.classList.add("fade-out");
    // })
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    // fadeElems.forEach(function (element) {
    //   element.classList.remove("fade-out");
    //   element.classList.add("fade-in");
    // });
  }
});
