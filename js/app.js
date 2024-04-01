// Scroll smooth

window.addEventListener("scroll", highlightSection);
document.querySelectorAll(".navbar__list__item a").forEach((a) => {
  a.addEventListener("click", smoothScroll);
});

function highlightSection() {
  navItems.forEach((item) => {
    const element = document.getElementById(item.toLowerCase());
    const rect = element.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      document
        .querySelector(`.navbar__list__item a[href="#${item.toLowerCase()}"]`)
        .classList.add("navbar__list__item__active");
    } else {
      document
        .querySelector(`.navbar__list__item a[href="#${item.toLowerCase()}"]`)
        .classList.remove("navbar__list__item__active");
    }
  });
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

// Navigation Sticky
window.onscroll = function () {
  myFunction();
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
