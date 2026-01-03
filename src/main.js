function openMenu() {
  var menuBtn = document.getElementById("menu");

  if (!menuBtn) return;

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

const sections = document.querySelectorAll("main.wrapper > div");
const navLinks = document.querySelectorAll("header nav a");

let isClickingNav = false;

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isClickingNav = true;

    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    setTimeout(() => {
      isClickingNav = false;
    }, 500);
  });
});

function scrollActive() {
  if (isClickingNav) return;

  const scrollY = window.scrollY;
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => link.classList.remove("active"));

  if (currentSectionId) {
    const activeLink = document.querySelector(
      `header nav a[href="#${currentSectionId}"]`
    );
    if (activeLink) activeLink.classList.add("active");
  }
}

window.addEventListener("scroll", scrollActive);
