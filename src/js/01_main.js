const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#openModal");
const showContactsBtn = document.querySelector("#goToContacts");

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

showContactsBtn.addEventListener("click", (e) => {
  window.scrollTo(0, document.body.scrollHeight);
});

openModalBtn.addEventListener("click", (e) => {
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
