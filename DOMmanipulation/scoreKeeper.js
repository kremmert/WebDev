var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var maxScore = 5;
var numInput = document.querySelector("input[type=number]")

var gameOver = false;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Display.textContent = ++p1Score;
		if(p1Score === maxScore) {
			gameOver = true;
			p1Display.classList.add("winner");
		}
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Display.textContent = ++p2Score;
		if(p2Score === maxScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
	}
});

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    maxScore = Number(this.value);
    reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}