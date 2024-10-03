var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 8,  // Default for large screens
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px (phones)
      320: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 768px (tablets)
      768: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      // when window width is >= 1024px (desktops)
      1024: {
        slidesPerView: 8,
        spaceBetween: 30
      },
      1536: {
        slidesPerView: 10,
        spaceBetween: 30
      }
    }
});
