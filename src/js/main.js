import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../scss/style.scss";

(() => {
  const nav = document.querySelector(".header__nav");

  document
    .querySelector(".header__box-burger, .header__box-burger-light")
    ?.addEventListener("click", () => {
      nav.classList.add("active");
    });

  document
    .querySelector(".header__nav-close")
    ?.addEventListener("click", () => {
      nav.classList.remove("active");
    });
})();

(() => {
  const tabs = document.querySelectorAll(".tabs__links-item");
  const content = document.querySelectorAll(".tabs__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      content.forEach((item) => {
        item.classList.remove("active");
      });

      tabs[index].classList.add("active");
      content[index].classList.add("active");
    });
  });
})();

(() => {
  const teamSwiper = document.querySelector(".team__swiper");

  if (!teamSwiper) return;

  const swiper = new Swiper(".team__swiper", {
    modules: [Pagination, Autoplay],

    loop: true,
    autoplay: {
      delay: 6000,
    },

    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
    },
  });
})();

// document
//   .querySelector("#open-form")
//   .addEventListener("click", () =>
//     document.querySelector("#contact-form").showModal(),
//   );
