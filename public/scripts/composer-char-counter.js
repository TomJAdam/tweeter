// Char counter JS

$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    const charCount = $(this).val().length;

    $(this).closest(".new-tweet").find(".counter").text(140 - charCount);

    if (parseInt($(this).closest(".new-tweet").find(".counter").val()) < 0) {
      $(this).closest(".new-tweet").find(".counter").css("color", "red");
    } else {
      $(this).closest(".new-tweet").find(".counter").css("color", "black");
    }
  }); 
});