var animals = [];


function renderButtons(){  //generates the buttons for the animals choosen
    console.log("rendering animal buttons");
    $("#animal-button").empty();
    for (var i = 0; i < animals.length; i++){
        var a = $("<button>");
        a.addClass("animals");
        a.attr("data-class", animals[i]);
        a.text(animals[i]);
        $("#animal-button").append(a);
        console.log(animals[i]);
    }
}

$(document).on(function (){
    $("#add-animal").on("click", function (event){
        console.log("adding animal is working");
        event.preventDefault();
        var creatures = $("#animal-input").val().trim();
        animals.push(creatures);
        renderButtons();
    });
    renderButtons();
});
