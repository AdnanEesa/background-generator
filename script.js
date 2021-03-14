var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function backgroundGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
css.textContent = body.style.background + ";";
}
	
backgroundGradient();

function setGradient() {
	backgroundGradient();
}

var button = document.createElement("button");
var randomGradient = document.createTextNode("Random Gradient");
button.appendChild(randomGradient);
body.appendChild(button);

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s)  + ')';
}

function randomButton() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ random_rgb() 
	+ "," 
	+ random_rgb() 
	+ ")";
	css.textContent = body.style.background + ";";
	
}

button.addEventListener("click", randomButton)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);