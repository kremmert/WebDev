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
    alert(age + " years is roughly " + days + " days")
}