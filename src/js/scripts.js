
function randomBG (){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);

	/*
	if(Math.random() < 0.5){
		r = 255;
		g = 255;
		b = 255;
	} else {
		r = 0;
		g = 0;
		b = 0;
	}
	*/


	var rgb = "rgb(" + r + ", " + g + "," + b + ")";
	document.body.style.backgroundColor = rgb;



}

randomBG();

function header(){

	var dati = ["Beatrice Gorelli", "beatrice.gorelli@gmail.com", "079 239 19 19", "mi piace il rosso"];
	var selezione = Math.floor(Math.random()*dati.length);
	document.querySelector(".dati").textContent = dati[selezione];
	document.querySelector(".dati1").textContent = dati[selezione];
	document.querySelector(".dati2").textContent = dati[selezione];
	document.querySelector(".dati3").textContent = dati[selezione];
	document.querySelector(".dati4").textContent = dati[selezione];
}

window.setInterval(function(){
  header();
}, 100);

window.setInterval(function(){
  randomBG();
}, 400);