// Форма обратной связи

var feedbackLink = document.querySelector('.feedback-button');
var feedbackPopup = document.querySelector('.feedback');
var feedbackClose = feedbackPopup.querySelector(".button-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackLogin = feedbackPopup.querySelector(".feedback-login");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (!feedbackPopup.classList.contains("feedback-show")) {
    feedbackPopup.classList.add('feedback-show');
  }
    if(storage) {
      feedbackLogin.value = storage;
      feedbackEmail.focus();
    } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (feedbackPopup.classList.contains("feedback-show")) {
    feedbackPopup.classList.remove("feedback-show");
    feedbackPopup.classList.remove("feedback-error");
  }
});

feedbackForm.addEventListener("submit", function(event) {
  if(!feedbackLogin.value || !feedbackEmail.value) {
    event.preventDefault();
    feedbackPopup.classList.remove("feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("feedback-show")) {
      event.preventDefault()
      feedbackPopup.classList.remove("feedback-show");
      feedbackPopup.classList.remove("feedback-error");
    }
  }
})

// Слайдер

var sbtn1 = document.querySelector('.slider-button-1');
var sbtn2 = document.querySelector('.slider-button-2');
var sbtn3 = document.querySelector('.slider-button-3');
var wrapper = document.querySelector('.site-wrapper');
var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');

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

// Интерактивная карта

ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
        center: [59.939330, 30.329490],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.svg',
        iconImageSize: [80, 140],
        iconImageOffset: [-333, -80]
    });

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable('scrollZoom');

myMap.geoObjects
    .add(myPlacemark)
});