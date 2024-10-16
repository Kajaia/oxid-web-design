"use strict";

// AOS animation instantiation
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// SwiperJS
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  autoplay: {
    delay: 30000000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Show and hide order now
function showOrderNow(event) {
  const currentElement = event.currentTarget;
  const button = currentElement.querySelector("button");

  if (button.classList.contains("d-none")) {
    button.classList.remove("d-none");
  }
}

function hideOrderNow(event) {
  const currentElement = event.currentTarget;
  const button = currentElement.querySelector("button");

  if (!button.classList.contains("d-none")) {
    button.classList.add("d-none");
  }
}

// FAQ
function collapseQuestion(event) {
  const currentElement = event.currentTarget;

  const faqList = document.querySelectorAll(".faq-card");
  faqList.forEach((faq) => {
    if (faq !== currentElement) {
      const faqAnswer = faq.querySelectorAll("span")[1];
      const faqPaths = faq.querySelectorAll("path");

      faqAnswer.classList.add("d-none");
      faqPaths[0].classList.remove("d-none");
      faqPaths[1].classList.add("d-none");
    }
  });

  const answer = currentElement.querySelectorAll("span")[1];
  const paths = currentElement.querySelectorAll("path");

  if (answer.classList.contains("d-none")) {
    answer.classList.remove("d-none");
    paths[0].classList.add("d-none");
    paths[1].classList.remove("d-none");
  } else {
    answer.classList.add("d-none");
    paths[0].classList.remove("d-none");
    paths[1].classList.add("d-none");
  }
}
