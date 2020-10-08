// Functions for design and page interaction

$(document).ready(function() {


  //Write tweet scrolls to compose
  $(".nav-link").click(function() {
    if ($(window).width() > 1024) {
      if ($(window).scrollTop() > 100) {
        $('html, body').animate({
          scrollTop: $(".new-tweet").offset().top
        }, 500, function() {
          $("#tweet-text").focus();
        });
      } else {
        $('html, body').animate({
          scrollTop: $(".nav-link").offset().top
        }, 500, function() {
          $("#tweet-text").focus();
        });
      }
    } else {
      $('html, body').animate({
        scrollTop: $(".main-header").offset().top
      }, 500, function() {
        $("#tweet-text").focus();
      });
    }
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
  });

  //to-top buttons
  $(".to-top").click(function() {
    if ($(window).width() > 1024) {
      $('html, body').animate({
        scrollTop: $("nav").offset().top
      }, 500, function() {
        $("#tweet-text").focus();
      });
    } else {
      $('html, body').animate({
        scrollTop: $(".main-header").offset().top
      }, 500, function() {
        $("#tweet-text").focus();
      });
    }
  });

  //error poppup removal on click
  $(".error-message").click(function() {
    $(this).slideUp('fast');
  });

  // Removes error messages if they are no longer valid
  $(function() {
    $("#tweet-text").keyup(function() {
      if (parseInt($(this).closest(".new-tweet").find(".counter").val()) >= 0 && parseInt($(this).closest(".new-tweet").find(".counter").val()) < 140) {
        $(this).closest(".new-tweet").find(".error-message").slideUp('fast');
      }
    });
  });
  
  //allows enter key to submit tweet
  $(function() {
    $("#tweet-text").keypress(function(e) {
      let code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        e.preventDefault();
        $(this).closest(".new-tweet").find("form").submit();
      }
    });
  });

});