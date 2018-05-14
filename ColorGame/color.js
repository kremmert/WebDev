var size = 6;

var colors;
var winningColor;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");

start();

resetButton.addEventListener("click", function() {
	start();
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
});

function start() {
	colors = generateColors(size);
	winningColor = pickColor();
	colorDisplay.textContent = winningColor;

	for(var i = 0; i < squares.length; i++) {
		//add initial colors
		squares[i].style.backgroundColor = colors[i];

		//add click listeners
		squares[i].addEventListener("click", colorPicked);
	}
}

function colorPicked() {
	var clickedColor = this.style.backgroundColor;

	if(clickedColor === winningColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor)
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	var arr = [];

	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}