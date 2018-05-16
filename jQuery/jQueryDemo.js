var styles = {
	background: "purple",
	color: "red"
};

$("#test").css("border", "2px solid red");
$("#test").css(styles);

$("li").css("color", "blue");

$("div").css("background-color", "purple");
$("div.highlight").css("width", "200px");
$(".highlight").css("height", "200px");
$("#third").css("border", "4px solid orange");
$("div").first().css("color", "pink");
$("div:first-of-type").css("font-size", "20px"); //better option