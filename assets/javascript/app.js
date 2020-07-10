var topics = [];

function topicView() {
  var userInput = $(this).attr("creature");
  // console.log("User input: " + userInput);
  var APIKey = "3DZNtITUTjlK4z3n8a5ecTyDtezwC3R9";
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    userInput +
    "&api_key=" +
    APIKey +
    "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      var rating = results[i].rating;
      var text = $("<p>").text("Rating: " + rating);
      gifDiv.append(text);

      var gifImg = $("<img>");
      gifImg.attr("src", results[i].images.original_still.url);
      gifImg.attr("data-still", results[i].images.original_still.url);
      gifImg.attr("data-animate", results[i].images.original.url);
      gifImg.attr("data-state", "still");
      gifImg.addClass("gif");
      gifDiv.append(gifImg);
      $("#gif-info").prepend(gifDiv);
    }
  });
}

function renderButtons() {
  //generates the buttons for the animals choosen
  $("#topic-button").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("topics");
    a.attr("creature", topics[i]);
    a.text(topics[i]);
    $("#topic-button").append(a);
    console.log(topics[i]);
  }
}

$(document).ready(function () {
  $("#add-topic").on("click", function (event) {
    event.preventDefault();
    var beasts = $("#topic-input").val().trim();
    // console.log(beasts);
    topics.push(beasts);
    $("#topic-input").val("");
    renderButtons();
  });
});

$(document).on("click", ".topics", topicView);
renderButtons();

$(document).on("click", ".gif", function () {
  var state = $(this).attr("data-state");
  console.log("state = " + state);
  if (state === "still") {
    var animateVal = $(this).attr("data-animate");
    $(this).attr("src", animateVal);
    $(this).attr("data-state", "animate");
  } else {
    var stillVal = $(this).attr("data-still");
    $(this).attr("src", stillVal);
    $(this).attr("data-state", "still");
  }
});
