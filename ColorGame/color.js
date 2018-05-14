var size = 6;
var colors;
var winningColor;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

start();
for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Hard" ? size = 6 : size = 3;
		start();
	}) 
}

for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", colorPicked);
}

resetButton.addEventListener("click", function() {
	start();
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
});

function start() {
	selectWinningColor();

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function selectWinningColor() {
	colors = generateColors(size);
	winningColor = pickColor();
	colorDisplay.textContent = winningColor;
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