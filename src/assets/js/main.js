import AOS from 'aos';

const stickyClassesContainer = [
  "shadow-[0px_1px_4px_0_rgba(0,0,0,0.3)]",
  "bg-[#1C1C1A]/95",
  "border-[#2A2A28]",
  "backdrop-blur-md",
];
const unstickyClassesContainer = [
  "shadow-none",
  "border-[#2A2A28]",
  "bg-[#1C1C1A]",
];

let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  stickyHeaderFunctionality();
  applyMenuItemClasses();
  evaluateHeaderPosition();

  AOS.init({
    duration: 400,
    easing: 'ease-out-cubic',
    once: true,
    offset: 20,
    delay: 0,
  });
});

window.stickyHeaderFunctionality = () => {
  window.addEventListener("scroll", () => {
    evaluateHeaderPosition();
  });
};

// keep the old typo name in case anything references it
window.stickyHeaderFuncionality = window.stickyHeaderFunctionality;

window.evaluateHeaderPosition = () => {
  if (!headerElement) return;
  if (window.scrollY > 48) {
    headerElement.firstElementChild.classList.add(...stickyClassesContainer);
    headerElement.firstElementChild.classList.remove(...unstickyClassesContainer);
  } else {
    headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
    headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
  }
};

window.applyMenuItemClasses = () => {
  const menuItems = document.querySelectorAll("#menu a");
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].pathname === window.location.pathname) {
      menuItems[i].classList.add("text-[#E8E2D6]");
      menuItems[i].classList.remove("text-[#888]");
    }
  }
};

window.openMobileMenu = () => {
  document.getElementById("openMenu")?.classList.add("hidden");
  document.getElementById("closeMenu")?.classList.remove("hidden");
  document.getElementById("menu")?.classList.remove("hidden");
  const bg = document.getElementById("mobileMenuBackground");
  if (bg) {
    bg.classList.add("opacity-0");
    bg.classList.remove("hidden");
    setTimeout(() => bg.classList.remove("opacity-0"), 1);
  }
};

window.closeMobileMenu = () => {
  document.getElementById("closeMenu")?.classList.add("hidden");
  document.getElementById("openMenu")?.classList.remove("hidden");
  document.getElementById("menu")?.classList.add("hidden");
  document.getElementById("mobileMenuBackground")?.classList.add("hidden");
};