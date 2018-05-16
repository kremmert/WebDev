$("h1").text("New Text!");

$("h2").html("<strong>Now this is bold!</strong>");

$("img:first-of-type").attr("src", "https://cdn.bulbagarden.net/upload/thumb/7/75/Ash_Turtwig.png/210px-Ash_Turtwig.png");

var newAttrs = {
	src: "https://cdn.bulbagarden.net/upload/thumb/7/75/Ash_Turtwig.png/210px-Ash_Turtwig.png",
	title: "found on internet"
};

$("img").attr(newAttrs);

//gets/sets value inside input
$("input").val("Hello!");

//gets value of drop down menu
$("select").val();

$("h1").addClass("correct");

$("h2").addClass("wrong");

$("h1").removeClass("correct");

$("li").toggleClass("done");