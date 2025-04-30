const humburger = document.querySelector('header .humburger');
const close = document.querySelector('header .close');

humburger.addEventListener('click', function() {
   document.querySelector('header .nav-links').classList.add('open');
});

close.addEventListener('click', function() {
   document.querySelector('header .nav-links').classList.remove('open');
});