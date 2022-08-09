const navBar = document.querySelector(".navigation-bar");
const menuBtn = document.querySelector(".nav_menuBtn");
const menu = document.querySelector(".nav-manu");
const icons = document.querySelector(".nav-icons");
const abtMyself = document.querySelector(".nav-manu li:first-Child");
const viewAbtMyself = document.querySelector(".content-wrap");
const project = document.querySelector(".nav-manu li:nth-Child(2)");
const viewProject = document.querySelector(".projects");
const experience = document.querySelector(".nav-manu li:nth-Child(3)");
const viewExperience = document.querySelector(".work-experience");
const education = document.querySelector(".nav-manu li:last-child");
const viewEducation = document.querySelector(".education");
const HamburgerIcon = document.querySelector(".nav_menuBtn");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 1080) {
    menu.style.display = "block";
    icons.style.display = "flex";
  }
});

navBar.addEventListener("mouseleave", () => {
  if (window.innerWidth <= 1080) {
    menu.style.display = "none";
    icons.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  if (window.innerWidth <= 1080) {
    icons.style.display = "none";
    menu.style.display = "none";
  }
});

menu.addEventListener("touchstart", () => {
  menu.style.display = "none";
  icons.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1081) {
    menu.style.display = "flex";
    icons.style.display = "flex";
  }
});

document.addEventListener("touchstart", () => {
  if (menu.style.display === "block" && icons.style.display === "flex") {
    menu.style.display = "none";
    icons.style.display = "none";
  }
});

abtMyself.addEventListener("click", () => {
  viewAbtMyself.scrollIntoView({ behavior: "smooth" });
});

abtMyself.addEventListener("touchstart", () => {
  viewAbtMyself.scrollIntoView({ behavior: "smooth" });
});

project.addEventListener("click", () => {
  viewProject.scrollIntoView({ behavior: "smooth" });
});

project.addEventListener("touchstart", () => {
  viewProject.scrollIntoView({ behavior: "smooth" });
});

experience.addEventListener("click", () => {
  viewExperience.scrollIntoView({ behavior: "smooth" });
});

experience.addEventListener("touchstart", () => {
  viewExperience.scrollIntoView({ behavior: "smooth" });
});

education.addEventListener("click", () => {
  viewEducation.scrollIntoView({ behavior: "smooth" });
});

education.addEventListener("touchstart", () => {
  viewEducation.scrollIntoView({ behavior: "smooth" });
});
