let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 17)];
	}
	return color;
  }
  
  function setRandomColor(){
	  color1.value = getRandomColor(); 
	  color2.value = getRandomColor();
	  setGradient();
  }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);