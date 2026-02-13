import "../scss/style.scss";

(() => {
  const nav = document.querySelector(".header__nav");

  document
    .querySelector(".header__box-burger")
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
