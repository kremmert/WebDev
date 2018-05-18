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

$("button").click(function() {
	alert("someone clicked a button!");
	$(this).css("background-color", "green");
	console.log("You clicked the button: " + $(this).text());
});

$("h1").click(function() {
	alert("h1 clicked!");
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		console.log("hit enter");
	}
});

$("h2").on("click", function() {
	$(this).css("background-color", "yellow");
});

$("h2").on("dblclick", function() {
	$(this).css("background-color", "purple");
});

$("input").on("keypress", function(event) {
	console.log(event.which);
});

$(".test").on("click", function() {
	$(this).css("background-color", "purple");
});

$(".test").on("mouseenter", function() {
	$(this).css("background-color", "green");
});

$(".test").on("mouseleave", function() {
	$(this).css("background-color", "white");
});

$("#fade").on("click", function() {
	//there's also fadeIn, fadeToggle
	//slideDown/slideUp/slideToggle changes height
	$("div").fadeOut(1000, function() {
		console.log("fade completed");
	});
});

