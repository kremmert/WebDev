function basics() {
	var h1 = document.querySelector("h1");

	h1.style.color = "purple";

	var body = document.querySelector("body");
	var isBlue = false;

	function changeColor() {
		if(isBlue) {
			body.style.background = "white";
		} else {
			body.style.background = "blue";
		}
		isBlue = !isBlue;
	}

	setInterval(changeColor, 1000);
}

function selectors() {
	/*
		document.getElementById() get the element with ID
		document.getElementsByClassName() get the elements with the class
		document.getElementsByTagName() gets a node list of all elements that match
		document.querySelector() gets the first instance in the document with CSS-style selector
		document.querySelectorAll() gets all elements that match with CSS-style selector
	*/

	var id = document.getElementById("highlight");
	id.style.background = "yellow";
	var classNodeList = document.getElementsByClassName("bolded");
	var allCasesOfHTMLTag = document.getElementsByTagName("h1");
	var cssSelectClass = document.querySelector(".bolded");
	var cssSelectID = document.querySelector("#highlight");
	var cssSelectElem = document.querySelector("h1");
}

function selectorsExercise() {
	var p11 = document.getElementById("first");
	var p12 = document.getElementsByClassName("special");
	var p13 = document.querySelector(".special");
	var p14 = document.getElementsByTagName("p")[0];
}

function changingStyle() {
	var tag = document.getElementById("highlight");
	/*tag.style.color = "blue";
	tag.style.border = "10px solid red";
	tag.style.fontSize = "70px";
	tag.style.background = "yellow";
	tag.style.marginTop = "200px";*/
	
	tag.classList.add("some-class");
	//tag.classList.remove("some-class");
	//tag.classList.toggle("some-class");
	
	tag.textContent = "blah blah blah";
	tag.innerHTML //keeps html tags intact

	var link = document.querySelector("a");

	//link.getAttribute("href") get the attr
	link.setAttribute("href", "https://www.google.com");
}

function listen() {
	var button = document.querySelector("button");
	button.addEventListener("click", function() {
		document.body.classList.toggle("background-toggle");
	});
}