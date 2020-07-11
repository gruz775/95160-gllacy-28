// Форма обратной связи

var feedbackLink = document.querySelector('.feedback-button');
var feedbackPopup = document.querySelector('.feedback');
var feedbackClose = feedbackPopup.querySelector('.button-close');
var feedbackForm = feedbackPopup.querySelector('.feedback-form');
var feedbackLogin = feedbackPopup.querySelector('.feedback-login');
var feedbackEmail = feedbackPopup.querySelector('.feedback-email');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (!feedbackPopup.classList.contains('feedback-show')) {
    feedbackPopup.classList.add('feedback-show');
  }
    if(storage) {
      feedbackLogin.value = storage;
      feedbackEmail.focus();
    } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener('click', function (event) {
  event.preventDefault();
  feedbackPopup.classList.add('feedback-close');
  setTimeout(function() {
    if (feedbackPopup.classList.contains('feedback-close')) {
      feedbackPopup.classList.remove('feedback-close');
    }
    if (feedbackPopup.classList.contains('feedback-show')) {
      feedbackPopup.classList.remove('feedback-show');
    }
  }, 500);
});

feedbackForm.addEventListener('submit', function(event) {
  if(!feedbackLogin.value || !feedbackEmail.value) {
    event.preventDefault();
    feedbackPopup.classList.remove('feedback-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('feedback-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', feedbackLogin.value);
    }
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    feedbackPopup.classList.add('feedback-close');
    setTimeout(function() {
      if (feedbackPopup.classList.contains('feedback-show')) {
        feedbackPopup.classList.remove('feedback-show');
      }
      if (feedbackPopup.classList.contains('feedback-close')) {
        feedbackPopup.classList.remove('feedback-close');
      }
    }, 600);
  }
});

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
  if (wrapper.classList.contains('site-wrapper-2')) {
    wrapper.classList.remove('site-wrapper-2');
    wrapper.classList.add('site-wrapper-1');
    sbtn2.classList.remove('button-current');
    sbtn1.classList.add('button-current');
    slide2.classList.remove('slide-current');
    slide1.classList.add('slide-current');
  } else if (wrapper.classList.contains('site-wrapper-3')) {
    wrapper.classList.remove('site-wrapper-3');
    wrapper.classList.add('site-wrapper-1');
    sbtn3.classList.remove('button-current');
    sbtn1.classList.add('button-current');
    slide3.classList.remove('slide-current');
    slide1.classList.add('slide-current');
  }
});

sbtn2.addEventListener('click', function(event) {
  event.preventDefault();
  if (wrapper.classList.contains('site-wrapper-1')) {
    wrapper.classList.remove('site-wrapper-1');
    wrapper.classList.add('site-wrapper-2');
    sbtn1.classList.remove('button-current');
    sbtn2.classList.add('button-current');
    slide1.classList.remove('slide-current');
    slide2.classList.add('slide-current');
  } else if (wrapper.classList.contains('site-wrapper-3')) {
    wrapper.classList.remove('site-wrapper-3');
    wrapper.classList.add('site-wrapper-2');
    sbtn3.classList.remove('button-current');
    sbtn2.classList.add('button-current');
    slide3.classList.remove('slide-current');
    slide2.classList.add('slide-current');
  }
});

sbtn3.addEventListener('click', function(event) {
  event.preventDefault();
  if (wrapper.classList.contains('site-wrapper-2')) {
    wrapper.classList.remove('site-wrapper-2');
    wrapper.classList.add('site-wrapper-3');
    sbtn2.classList.remove('button-current');
    sbtn3.classList.add('button-current');
    slide2.classList.remove('slide-current');
    slide3.classList.add('slide-current');
  } else if (wrapper.classList.contains('site-wrapper-1')) {
    wrapper.classList.remove('site-wrapper-1');
    wrapper.classList.add('site-wrapper-3');
    sbtn1.classList.remove('button-current');
    sbtn3.classList.add('button-current');
    slide1.classList.remove('slide-current');
    slide3.classList.add('slide-current');
  }
});