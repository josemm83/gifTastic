var topics = [];
var animate = $("<img>");
var nonanimate = $("<img>");

function topicView() {
    var userInput = $(this).attr("creature");
    console.log("User input: " + userInput);
    var APIKey = "3DZNtITUTjlK4z3n8a5ecTyDtezwC3R9";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput +
        "&api_key=" + APIKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i ++) {
            var gifDiv = $("<div>");
            gifDiv.addClass("gif");
            var rating = results[i].rating;
            var text = $("<p>").text("Rating: " + rating);
            var gifImg = $("<img>");
            nonanimate.attr("src", results[i].images.fixed_height_still.url);
            gifImg.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(text);
            gifDiv.append(gifImg);
            $("#gif-info").prepend(gifDiv);
        }
    });
}

function renderButtons() {  //generates the buttons for the animals choosen
    $("#topic-button").empty();
    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        a.addClass("topics");
        a.attr("creature", topics[i]);
        a.text(topics[i]);
        $("#topic-button").append(a);
        console.log(topics[i]);
    }
}

$(document).ready(function () {
    $("#add-topic").on("click", function (event){
            event.preventDefault();
            var beasts = $("#topic-input").val().trim();
            console.log(beasts);
            topics.push(beasts);
            $("#topic-input").val("");
            renderButtons();
    });
});
$(document).on("click", ".topics", topicView);
renderButtons();

$(".gif").on("click", function (){

});