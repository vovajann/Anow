$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .header').toggleClass('active');
      $('body').toggleClass('lock');
   });
});