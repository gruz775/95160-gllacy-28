// Форма обратной связи

let link = document.querySelector('.feedback-button');
let popup = document.querySelector('.feedback');
let close = popup.querySelector(".button-close");

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('feedback-show');
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  if (popup.classList.contains("feedback-show")) {
    popup.classList.remove("feedback-show");
  }
});

// Слайдер

let sbtn1 = document.querySelector('.slider-button-1');
let sbtn2 = document.querySelector('.slider-button-2');
let sbtn3 = document.querySelector('.slider-button-3');
let wrapper = document.querySelector('.site-wrapper');
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');

sbtn1.addEventListener('click', function(event) {
  event.preventDefault();
  if (wrapper.classList.contains("site-wrapper-2")) {
    wrapper.classList.remove("site-wrapper-2");
    wrapper.classList.add("site-wrapper-1");
    sbtn2.classList.remove("current");
    sbtn1.classList.add("current");
    slide2.classList.remove("slide-current");
    slide1.classList.add("slide-current");
  } else if (wrapper.classList.contains("site-wrapper-3")) {
    wrapper.classList.remove("site-wrapper-3");
    wrapper.classList.add("site-wrapper-1");
    sbtn3.classList.remove("current");
    sbtn1.classList.add("current");
    slide3.classList.remove("slide-current");
    slide1.classList.add("slide-current");
  }
});

sbtn2.addEventListener('click', function(event) {
  event.preventDefault();
  if (wrapper.classList.contains("site-wrapper-1")) {
    wrapper.classList.remove("site-wrapper-1");
    wrapper.classList.add("site-wrapper-2");
    sbtn1.classList.remove("current");
    sbtn2.classList.add("current");
    slide1.classList.remove("slide-current");
    slide2.classList.add("slide-current");
  } else if (wrapper.classList.contains("site-wrapper-3")) {
    wrapper.classList.remove("site-wrapper-3");
    wrapper.classList.add("site-wrapper-2");
    sbtn3.classList.remove("current");
    sbtn2.classList.add("current");
    slide3.classList.remove("slide-current");
    slide2.classList.add("slide-current");
  }
});

sbtn3.addEventListener('click', function(event) {
  event.preventDefault();
  if (wrapper.classList.contains("site-wrapper-2")) {
    wrapper.classList.remove("site-wrapper-2");
    wrapper.classList.add("site-wrapper-3");
    sbtn2.classList.remove("current");
    sbtn3.classList.add("current");
    slide2.classList.remove("slide-current");
    slide3.classList.add("slide-current");
  } else if (wrapper.classList.contains("site-wrapper-1")) {
    wrapper.classList.remove("site-wrapper-1");
    wrapper.classList.add("site-wrapper-3");
    sbtn1.classList.remove("current");
    sbtn3.classList.add("current");
    slide1.classList.remove("slide-current");
    slide3.classList.add("slide-current");
  }
});
