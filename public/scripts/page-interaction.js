// Functions for design and page interaction

$(document).ready(function() {

  //Write tweet scrolls to compose
  $(".nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $(".main-header").offset().top
    }, 500);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $(".to-top").slideDown()
      $("nav").slideUp()
    } else if ($(window).scrollTop() < 400) {
      $(".to-top").slideUp()
      $("nav").slideDown('fast')
    }
  })

  $(".to-top").click(function() {
    $('html, body').animate({
      scrollTop: $(".main-header").offset().top
    }, 500, function() { $("#tweet-text").focus() });

  });

  $(".error-message ").click(function() {
    $(this).slideUp('fast');
  })

});