/*============ SWIPER JS ============*/
let swiperProducts = new Swiper(".products__container", {
  spacebetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*============ SCROLL UP ============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
