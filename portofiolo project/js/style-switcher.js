// ====================switch style=========================

// ============day night change function=============
const dayNightBtn = document.querySelector(".day-night");

dayNightBtn.addEventListener('click' ,() => {
  dayNightBtn.querySelector("i").classList.toggle("fa-sun");
  dayNightBtn.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load" ,() => {
  if(document.body.classList.contains("dark")){
    dayNightBtn.querySelector("i").classList.add("fa-sun ");
  }else{
    dayNightBtn.querySelector("i").classList.add("fa-moon");
  }
})
// ==============menu toggle =================
const menuToggle = document.querySelector(".menu-toggle");
const aside = document.querySelector(".aside");
const closeBtn = document.querySelector(".menu"); // Font Awesome icon element

let isMenuOpen = false;

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    aside.style.left = "0px";
    menuToggle.style.left = "290px";
    closeBtn.classList.replace("fa-bars", "fa-x"); // Change icon to X
  } else {
    aside.style.left = "-270px";
    menuToggle.style.left = "30px";
    closeBtn.classList.replace("fa-x", "fa-bars"); // Change icon back to menu
  }
});

window.addEventListener("click", () => {
  if (isMenuOpen) {
    aside.style.left = "-270px";
    menuToggle.style.left = "30px";
    closeBtn.classList.replace("fa-x", "fa-bars");
    isMenuOpen = false;
  }
});
// ================switch setting======================

const styleSwitchToggle = document.querySelector(".style-switcher-toggle");
const parentDiv = document.querySelector(".style-switcher");

let isOpen = false;

styleSwitchToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent event from bubbling to window
  isOpen = !isOpen;
  parentDiv.style.transform = isOpen ? "translateX(-25%)" : "translateX(100%)";
});

window.addEventListener("click", () => {
  if (isOpen) {
    parentDiv.style.transform = "translateX(100%)";
    isOpen = false;
  }
});

// ==========theme change=======
const alternateStyle = document.querySelectorAll(".alternate-style");

function setactivestyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}






