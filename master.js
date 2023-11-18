const dropIcon = document.querySelector(".drop-icon");
const navBar = document.querySelector("nav ul");
const menuCategories = document.querySelectorAll(".menu ul li");
const menuBoxes = document.querySelectorAll(".menu-content > div");
const goTop = document.querySelector(".go-top");
let bullets = document.querySelector(".bullets");
let menuLinks = document.querySelectorAll("nav ul li a");
let allSections = document.querySelectorAll(".sc");

// Drop Down Nav
dropIcon.addEventListener("click", () => {
  navBar.classList.toggle("drop-down");
});

// Set Food Categories
menuCategories.forEach((e) => {
  e.addEventListener("click", () => {
    setClass(menuCategories, e, "active");
    menuBoxes.forEach((el) => {
      tog(el, "disable", "active");
      if (e.textContent.trim() == el.dataset.menu) {
        tog(el, "active", "disable");
      } else if (e.textContent.trim() == "all") {
        tog(el, "active", "disable");
      }
    });
  });
});

// Set goTop icon
goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Create Bullets

let myUl = document.createElement("ul");
menuLinks.forEach((e) => {
  createLinksBl(myUl, e.getAttribute("href"));
});
bullets.appendChild(myUl);
let bulletsLinks = document.querySelectorAll(".bullets ul li a");

// Disable bullets on small screnn in start

window.onresize = function () {
  if (document.body.offsetWidth < 767) {
    bullets.classList.add("disable");
  } else {
    bullets.classList.remove("disable");
  }
};

window.onscroll = () => {
  if (scrollY > document.documentElement.clientHeight) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }

  // Show and Hide Bullets

  if (scrollY > document.documentElement.clientHeight) {
    bullets.classList.add("show");
  } else {
    bullets.classList.remove("show");
  }

  // Set Active Bullet

  allSections.forEach((e) => {
    if (
      scrollY > e.offsetTop - 300 &&
      scrollY < e.offsetTop + e.offsetHeight + 300
    ) {
      bulletsLinks.forEach((el) => {
        if (el.dataset.section === e.classList[0]) {
          setClass(bulletsLinks, el, "active");
        }
      });
    }
  });
};
bulletsLinks[0].addEventListener("click", () => {
  goTop.click();
});

// Functions

function setClass(arr, el, cl) {
  arr.forEach((e) => {
    e.classList.remove(cl);
  });
  el.classList.add(cl);
}

function tog(el, cl, cl1) {
  el.classList.add(cl);
  el.classList.remove(cl1);
}

function createLinksBl(ul, link) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("data-section", link.substr(1));
  if (link != "#home") {
    a.href = link;
  }
  li.appendChild(a);
  ul.appendChild(li);
}
