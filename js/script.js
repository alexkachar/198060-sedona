var navList = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle--open');
var navClose = document.querySelector('.main-nav__toggle--close');

navList.classList.add('main-nav__list--hide');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('main-nav__list--hide')) {
    navList.classList.remove('main-nav__list--hide');
  } else {
    navList.classList.add('main-nav__list--hide');
  }
});

navClose.addEventListener('click', function() {
  navList.classList.add('main-nav__list--hide');
});
