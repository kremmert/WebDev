function greet() {
	var userName = prompt("What is your name?");
	alert("Nice to meet you, " + userName);
	console.log("Also great to meet you, " + userName);
}

function aboutMe() {
	var name = prompt("What is your name?");
	var last = prompt("What is your last name?");
	var age = prompt("What is your age?");
	console.log("Your full name is " + name + " " + last);
	console.log("You are " + age + " years old");
}

function ageCalc() {
    var age = prompt("What is your age?");
    var days = age * 365.25;
    alert(age + " years is roughly " + days + " days");
}

function conditionals() {
	var age = prompt("What is your age?");
	if(age < 0) {
		alert("Error");
	}
	if(age === 21) {
		alert("Happy 21st birthday!");
	}
	if(age % 2 === 1) {
		alert("Your age is odd!");
	}
	if(Math.sqrt(age) % 1 === 0) {
		alert("Perfect square!");
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function guessingGame() {
	//var secretNumber = getRandomInt(3);
	var secretNumber = 2;
	var guess = Number(prompt("Guess a number"));
	if(guess < secretNumber) {
		alert("Too low!")
	}
	else if(guess > secretNumber) {
		alert("Too high!")
	}
	else if(guess === secretNumber){
		alert("You got it!")
	}
}

function whileLoops() {
	console.log("Print all numbers between -10 and 19")
	var p1 = -10;
	while(p1 < 20) {
		console.log(p1);
		p1++;
	}
	console.log("Print all even numbers between 10 and 40")
	var p2 = 10;
	while(p2 < 41) {
		console.log(p2)
		p2+=2;
	}
	console.log("Print all odd numbers between 300 and 333")
	var p3 = 300;
	while(p3 < 334) {
		if(p3 % 2 === 1) {
			console.log(p3);
		}
		p3++;
	}
	console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
	var p4 = 5;
	while(p4 < 51) {
		if(p4 % 5 === 0 && p4 % 3 === 0) {
			console.log(p4);
		}
		p4++;
	}
}

function areWeThereYet() {
	var answer = prompt("Are we there yet?")
	while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
		answer = prompt("Are we there yet?")
	}
	alert("Yay we made it!")
}

function forLoops() {
	console.log("Print all numbers between -10 and 19")
	for(var i = -10; i < 20; i++) {
		console.log(i);
	}
	console.log("Print all even numbers between 10 and 40")
	for(var i = 10; i < 41; i+=2) {
		console.log(i);
	}
	console.log("Print all odd numbers between 300 and 333")
	for(var i = 300; i < 334; i++) {
		if(i % 2 === 1) {
			console.log(i);
		}
	}
	console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
	for(var i = 5; i < 51; i++) {
		if(i % 5 === 0 && i % 3 === 0) {
			console.log(i);
		}
	}
}

function isEven(num) {
	return num % 2 === 0
}

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

function kebabToSnake(word) {
    return word.replace(/-/g, "_");
}

function todoList() {
	// list, new, delete, or quit
	var todos = [];
	window.setTimeout(function() {
        // put all of your JS code from the lecture here
        var input = prompt("What would you like to do?");
        while(input !== "quit") {
	        switch(input) {
	        	case "list":
	        		todos.forEach(function(elem, i) {console.log(i + ": " + elem)});
	        		break;
	        	case "new":
	        		var newTodo = prompt("Enter new todo");
	        		todos.push(newTodo);
	        		break;
	        	case "delete":
	        	    var index = prompt("Enter index to delete");
	        	    todos.splice(index, 1);
	        	    console.log("Item deleted");
	        		break;
	        	default:
	        		console.log("Enter list, new, delete or quit");
	        }
	        input = prompt("What would you like to do?");
    	}
    }, 1000);
}

function arrayReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	for(var i = 0; i < arr.length - 1; i++) {
		if(arr[i] !== arr[i+1]) {
			return false;
		}
	}
	return true;
}

/*
Object
var dog = {
	name: "Lucky",
	breed: doodle
}
These mean same thing
dog.name === dog["name"]
*/
