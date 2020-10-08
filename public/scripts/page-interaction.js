// Functions for design and page interaction

$(document).ready(function() {

  //Write tweet scrolls to compose
  $(".nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $(".main-header").offset().top
    }, 500, function() { $("#tweet-text").focus() });
  });

  //navbar hide/show
  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $(".to-top").slideDown();
      $("nav").slideUp();
    } else if ($(window).scrollTop() < 400) {
      $(".to-top").slideUp();
      $("nav").slideDown('fast');
    }
  })

  //to-top button
  $(".to-top").click(function() {
    $('html, body').animate({
      scrollTop: $(".main-header").offset().top
    }, 500, function() { $("#tweet-text").focus() });
  });

  //error poppup removal
  $(".error-message ").click(function() {
    $(this).slideUp('fast');
  })

  //allows enter key to submit tweet
  $(function() {
    $("#tweet-text").keypress(function(e) {
      let code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        $(this).closest(".new-tweet").find("form").submit();
      }
    })
  })

});