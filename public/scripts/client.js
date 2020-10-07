/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $("#tweets-container").append(createTweetElement(tweet))
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
  <p class="tweet-body">${data.content.text}</p>
  <footer>
    <p>${(new Date(data.created_at)).toString().slice(4, 15)}</p>
    <p>🆒 🆗 📶</p>
  </footer>
  </article>
  `
return $tweet;
};

$(document).ready(function() {

  $(".new-tweet").find("form").submit(function(event) {
    event.preventDefault();
    if (parseInt($(this).closest(".new-tweet").find(".counter").val()) < 0) {
      alert('Your Tweet is too long!');
    } else if (parseInt($(this).closest(".new-tweet").find(".counter").val()) === 140) {
      alert('There is no tweet here?')
    } else {
      let serializedTweet = $(this).serialize();
      $.post('/tweets', serializedTweet);
    }
  });

  const loadTweets = () => {
    $.get('/tweets', function(data) {
      renderTweets(data)
    }, "json");
  };

  loadTweets();

});

