/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Functions for loading tweets

//steralizes user input
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweets = (tweets) => {
  if (tweets.length > 1) {
    for (const tweet of tweets) {
      $("#tweets-container").append(createTweetElement(tweet));
    }
  } else {
    $("#tweets-container").append(createTweetElement(tweets));
  }
};

const createTweetElement = (data) => {
  let $tweet = `
  <article class="tweet-display">
  <header>
  <img class="user-avatar" src="${data.user.avatars}" alt="user avatar">
    <p class="tweet-name">${data.user.name}</p>
  </header>
  <h5 class="tweet-handle">${data.user.handle}</h5>
  <p class="tweet-body">${escape(data.content.text)}</p>
  <footer>
    <p>${(new Date(data.created_at)).toString().slice(4, 15)}</p>
    <p>🆒 🆗 📶</p>
  </footer>
  </article>
  `;
  return $tweet;
};


$(document).ready(function() {

  // renders tweets
  const loadTweets = () => {
    $.get('/tweets', function(data) {
      renderTweets(data);
    }, "json");
  };

  loadTweets();

  //loads last made tweet
  const loadLastTweet = () => {
    $.get('/tweets', function(data) {
      renderTweets(data[data.length - 1]);
    }, "json");
  };

  // posts tweets to database
  $(".new-tweet").find("form").submit(function(event) {
    event.preventDefault();
    if (parseInt($(this).closest(".new-tweet").find(".counter").val()) < 0) {
      $(this).closest(".new-tweet").find(".error-message").html('<h5>Your tweet is too long!</h5>').show('regular');
    } else if (parseInt($(this).closest(".new-tweet").find(".counter").val()) === 140) {
      $(this).closest(".new-tweet").find(".error-message").html('<h5>Nothing to tweet!</h5>').show('regular');
    } else {
      let serializedTweet = $(this).serialize();
      $.post('/tweets', serializedTweet).then(
        $(this).closest(".new-tweet").find(".error-message ").slideUp('fast'),
        $(this).closest(".new-tweet").find("textarea").val(''),
        $(this).closest(".new-tweet").find(".counter").val(140))
        .then(loadLastTweet())
    }
  });

  // Removes error messages if they are no longer valid
  $(function() {
    $("#tweet-text").keyup(function(e) { 
      if (parseInt($(this).closest(".new-tweet").find(".counter").val()) >= 0 && parseInt($(this).closest(".new-tweet").find(".counter").val()) < 140) {
        $(this).closest(".new-tweet").find(".error-message").slideUp('fast');
      } 
    }) 
  })

});

