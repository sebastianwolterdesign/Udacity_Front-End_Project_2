// Adding the navbar dynamically

var navItems = ["Typography", "Design", "Image", "Grid"];
var ulClass = "navbar navbar__list";
var liClass = "navbar navbar__list__item";

var ul = document.createElement("ul");
ul.className = ulClass;

for (var i = 0; i < navItems.length; i++) {
  var li = document.createElement("li");
  li.className = liClass;

  var a = document.createElement("a");
  a.href = "#" + navItems[i].toLowerCase();
  a.innerHTML = navItems[i];

  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById("nav-container").appendChild(ul);

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
        .classList.add("active");
    } else {
      document
        .querySelector(`.navbar__list__item a[href="#${item.toLowerCase()}"]`)
        .classList.remove("active");
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
