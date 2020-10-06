/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $("#tweets-container").append(createTweetElement(tweet))
  } 
};

const createTweetElement = (data) => {
let $tweet = `
  <article class="tweet-display">
  <header>
  <img src="${data.user.avatars}" alt="user avatar">
    <p class="tweet-name">${data.user.name}</p>
  </header>
  <h5 class="tweet-handle">${data.user.handle}</h5>
  <p class="tweet-body">${data.content.text}</p>
  <footer>
    <p>${(new Date(data.created_at)).toString().slice(4, 15)}</p>
    <p>🆒</p>
  </footer>
  </article>
  `
return $tweet;
};

$(document).ready(function() {

  renderTweets(data);

  $(".new-tweet").find("form").submit(function(event) {
    event.preventDefault();
  });
  
});

