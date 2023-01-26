// Swiper Carousel

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 50,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});


// MENU
let navlist = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");

navlist.addEventListener("click", function () {
  menu.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("active");
};


