const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#openModal");
const showContactsBtn = document.querySelector("#goToContacts");

const openMenuBtn = document.querySelector("#menuOpen");
const closeMenuBtn = document.querySelector("#menuClose");
const navigationEl = document.querySelector(".nav");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

openMenuBtn.addEventListener("click", () => {
  navigationEl.classList.add("nav_active");
  document.body.classList.add("no-scroll");
});

closeMenuBtn.addEventListener("click", () => {
  navigationEl.classList.remove("nav_active");
  document.body.classList.remove("no-scroll");
});

showContactsBtn.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal_open");
});

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".modal__close") || target === modal) {
    modal.classList.remove("modal_open");
  }
});

modal.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("modal_open");
});
