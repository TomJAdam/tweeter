// Functions for design and page interaction

$(document).ready(function() {

  //Write tweet scrolls to compose
  $(".scroll-down").click(function() {
    $('html, body').animate({
      scrollTop: $(".main-header").offset().top
    }, 500);
  });

});