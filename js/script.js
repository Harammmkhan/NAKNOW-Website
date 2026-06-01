// swiper js slider - Directory (Section 2)
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".button-right",
      prevEl: ".button-left",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 3, spaceBetween: 8 },
      480: { slidesPerView: 4, spaceBetween: 8 },
      576: { slidesPerView: 5, spaceBetween: 10 },
      768: { slidesPerView: 6, spaceBetween: 10 },
      1024: { slidesPerView: 8, spaceBetween: 10 },
    }
  });
});

// swiper js slider - Curated List (Section 3)
document.addEventListener("DOMContentLoaded", function () {
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: ".button-right-2",
      prevEl: ".button-left-2",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 4, spaceBetween: 12 },
    }
  });
});

// swiper js slider - Essentials (Section 7)
document.addEventListener("DOMContentLoaded", function () {
  const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".button-right-3",
      prevEl: ".button-left-3",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 8 },
      480: { slidesPerView: 3, spaceBetween: 10 },
      576: { slidesPerView: 3, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 6, spaceBetween: 10 },
    }
  });
});
