var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// -------Display the initial CSS linear gradient property on page load.-------

css.textContent = document.body.style.backgroundColor = "Background colors: " +
color1.value +" " + color2.value;

// -------Random button which generates two random colour inputs.-------

const button = document.querySelector('.btn');

function setRandom() {
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";

 	var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + a + "," + b + "," + c + ")";

 	body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor1 
	+ ", " 
	+ bgColor2 
	+ ")";

css.textContent = document.body.style.backgroundColor = "Background colors: " +
bgColor1 +" " + bgColor2;
} 

button.addEventListener('click', setRandom);

