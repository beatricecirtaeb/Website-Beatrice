// BACKGROUND
function randomBG (){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);

	var rgb = "rgb(" + r + ", " + g + "," + b + ")";
	document.body.style.backgroundColor = rgb;
}

// HEADER
function header(){
	var dati = ["Beatrice Gorelli", "beatrice.gorelli@gmail.com", "SWITZERLAND", "GRAPHIC DESIGNER", "2019"];
	var selezione = Math.floor(Math.random()*dati.length);
	document.querySelector(".dati").textContent = dati[selezione].toUpperCase();
}

// IMMAGINI
function loadImmagine(){
	var numImmagini = 3;
	var xs = document.querySelectorAll(".immagine");
	for(var i = 0; i < 10; i++){
		var indice = Math.floor(Math.random() * numImmagini) + 1;	
		xs[i].src = "src/img/img0" + indice +  ".jpg";
	}
	console.log(indice);
}

// CHIAMARE LE FUNZIONI 
randomBG();

window.setInterval(function(){
  loadImmagine();
  header();
}, 200);







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
	
	//indice = indice + 1;

	/* IF ELSE 
	// BOOLEANA: TRUE  / FALSE 
	if ( indice >= 3 ) { 		
		indice = 1;
	} else {
		indice++;
	}
	*/

	//console.log(indice);
