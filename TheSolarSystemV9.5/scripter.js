var content = document.getElementsByClassName('content')[0];
var width = content.offsetWidth;
var height = content.offsetHeight;
var verticalKaificent = 0.2;
	deltaMerc = 0;
	deltaVenus = 0;
	deltaEarth = 0;
	deltaMars = 0;
	deltaJupiter = 0;
	deltaSaturn = 0;
	deltaUranus = 0;
	deltaNeptune = 0;
	deltaMoon = 0;
	n = 100;
spacePosition();
drawCircles();
scaleHandler();
$(window).scrollTop($(window).height());
$(window).scrollLeft($(window).width()/2);


//  updated slider
var speedSlider = document.getElementById('speedSlider');
var sliderValue = document.getElementById('sliderValue');

speedSlider.min = 1; // Set the minimum value for the slider
speedSlider.max = 80; // Set the maximum value for the slider
speedSlider.value = 80; // Set the initial value for the slider
sliderValue.textContent = speedSlider.value; // Display the initial value

speedSlider.addEventListener('input', function() {
    n = parseInt(speedSlider.value);
    sliderValue.textContent = n; // Update the displayed value when the slider changes
});
function adjustSlider(change) {
    n = Math.min(80, Math.max(2, n + change)); // Ensure n stays within the range [2, 400]
    speedSlider.value = n;
    sliderValue.textContent = n;
}
var $mercuryContainer = $('.mercury_container').eq(0);
var mercuryX = width/2 - mercuryContainer.offsetWidth /2;
var mercuryY = height/2 - mercuryContainer.offsetHeight /2;
var mercury = $('.shadow_mercury').eq(0);	

var $venusContainer = $('.venus_container').eq(0);
var venusX = width/2 - venusContainer.offsetWidth /2;
var venusY = height/2 - venusContainer.offsetHeight /2;
var venus = $('.shadow_venus').eq(0);	

var $earthMoonContainer = $('.earth_moon_container').eq(0);
var earthX = width/2 - earthMoonContainer.offsetWidth /2;
var earthY = height/2 - earthMoonContainer.offsetHeight /2;
var earth = $('.shadow_earth').eq(0);	

var $moon = $('.moon').eq(0);
var moonX = earthMoonContainer.offsetWidth /2  - moon.offsetWidth/2;
var moonY = earthMoonContainer.offsetHeight /2 - moon.offsetHeight/2;

var $marsContainer = $('.mars_container').eq(0);
var marsX = width/2 - marsContainer.offsetWidth /2;
var marsY = height/2 - marsContainer.offsetHeight /2;
var mars = $('.shadow_mars').eq(0);	

var $jupiterContainer = $('.jupiter_container').eq(0);
var jupiterX = width/2 - jupiterContainer.offsetWidth /2;
var jupiterY = height/2 - jupiterContainer.offsetHeight /2;
var jupiter = $('.shadow_jupiter').eq(0);	


var $saturnRingContainer = $('.saturn_ring_container').eq(0);
var saturnX = width/2 - saturnRingContainer.offsetWidth /2;
var saturnY = height/2 - saturnRingContainer.offsetHeight /2;
var saturn = $('.shadow_saturn').eq(0);	

var $ringContainer = $('.ring_container').eq(0);

var $uranusContainer = $('.uranus_container').eq(0);
var uranusX = width/2 - uranusContainer.offsetWidth /2;
var uranusY = height/2 - uranusContainer.offsetHeight /2;
var uranus = $('.shadow_uranus').eq(0);	

var $neptuneContainer = $('.neptune_container').eq(0);
var neptuneX = width/2 - neptuneContainer.offsetWidth /2;
var neptuneY = height/2 - neptuneContainer.offsetHeight /2;
var neptune = $('.shadow_neptune').eq(0);	

function spacePosition(){
  sun = document.getElementsByClassName('sun')[0];

  sun.style.top = (height/2 - sun.offsetHeight /2 ) + 'px';
  sun.style.left = (width/2 - sun.offsetWidth /2 ) + 'px';

  mercuryContainer = document.getElementsByClassName('mercury_container')[0];
  Rmercury = 90;
  mercuryContainer.style.top = (height/2 - mercuryContainer.offsetHeight /2 ) + 'px';
  mercuryContainer.style.left = (width/2 - mercuryContainer.offsetWidth /2 + Rmercury ) + 'px';

  venusContainer = document.getElementsByClassName('venus_container')[0];
  Rvenus = 130;
  venusContainer.style.top = (height/2 - venusContainer.offsetHeight /2 ) + 'px';
  venusContainer.style.left = (width/2 - venusContainer.offsetWidth /2 + Rvenus ) + 'px';

  earthMoonContainer = document.getElementsByClassName('earth_moon_container')[0];
  Rearth = 185;
  earthMoonContainer.style.top = (height/2 - earthMoonContainer.offsetHeight /2 ) + 'px';
  earthMoonContainer.style.left = (width/2 - earthMoonContainer.offsetWidth /2 + Rearth ) + 'px';
  
  moon = document.getElementsByClassName('moon')[0];
  Rmoon = 28;
  moon.style.top = (earthMoonContainer.offsetHeight /2  - moon.offsetHeight/2) + 'px';
  moon.style.left = (earthMoonContainer.offsetWidth /2 - moon.offsetWidth/2 + Rmoon ) + 'px';

  marsContainer = document.getElementsByClassName('mars_container')[0];
  Rmars = 240;
  marsContainer.style.top = (height/2 - marsContainer.offsetHeight /2 ) + 'px';
  marsContainer.style.left = (width/2 - marsContainer.offsetWidth /2 + Rmars ) + 'px';

  jupiterContainer = document.getElementsByClassName('jupiter_container')[0];
  Rjupiter = 320;
  jupiterContainer.style.top = (height/2 - jupiterContainer.offsetHeight /2 ) + 'px';
  jupiterContainer.style.left = (width/2 - jupiterContainer.offsetWidth /2 + Rjupiter ) + 'px';

  Rsaturn = 430;
  saturnRingContainer = document.getElementsByClassName('saturn_ring_container')[0];
  saturnRingContainer.style.top = (height/2 - saturnRingContainer.offsetHeight /2 ) + 'px';
  saturnRingContainer.style.left = (width/2 - saturnRingContainer.offsetWidth /2 + Rsaturn ) + 'px';
  Rring = 60;

  uranusContainer = document.getElementsByClassName('uranus_container')[0];
  Ruranus = 510;
  uranusContainer.style.top = (height/2 - uranusContainer.offsetHeight /2 ) + 'px';
  uranusContainer.style.left = (width/2 - uranusContainer.offsetWidth /2 + Ruranus ) + 'px';

  neptuneContainer = document.getElementsByClassName('neptune_container')[0];
  Rneptune = 560;
  neptuneContainer.style.top = (height/2 - neptuneContainer.offsetHeight /2 ) + 'px';
  neptuneContainer.style.left = (width/2 - neptuneContainer.offsetWidth /2 + Rneptune ) + 'px';
}
var timerId;

var start = document.getElementById('start');
start.onclick = function() {
    clearInterval(timerId); // Clear any existing interval
    timerId = setInterval(move, 20);
};


var stop = document.getElementById('stop');
stop.onclick = function() {
    clearInterval(timerId); // Clear the interval when stop is clicked
};


function move(){
	moveEarth();
	moveMercury();
	moveVenus();
	moveMars();
	moveJupiter();
	moveSaturn();
	moveUranus();
	moveNeptune();
	moveMoon();	
}
//-------------------------------------------------------------
// Ajoutez une référence à l'élément Mercure
var $soleil = $('.sun').eq(0);
var deltaSoleil = 0;

function moveSoleil() {
    var alpha = Math.PI * deltaSoleil / 180;
    sun.style.top = (height / 2 - sun.offsetHeight / 2) + Rsoleil * Math.sin(alpha) * verticalKaificent + 'px';
    sun.style.left = (width / 2 - sun.offsetWidth / 2) + Rsoleil * Math.cos(alpha) + 'px';
    deltaSoleil += 5 / n;
    if (deltaSoleil > 360) {
        deltaSoleil -= 360;
    }
}
$soleil.on('click', function () {
    window.location.href = 'Planetes/sun.html';
});

//-------------------------------------------------------------
// Ajoutez une référence à l'élément Mercure
var $mercury = $('.mercury_container').eq(0);

function moveMercury(){
    var alpha = Math.PI*deltaMerc/180;
 	$mercuryContainer.css('top', mercuryY + Rmercury * Math.sin(alpha)* verticalKaificent);
 	$mercuryContainer.css('left', mercuryX + Rmercury * Math.cos(alpha));
	mercury.css('transform','rotate(' + deltaMerc + 'deg)');
	if (deltaMerc<180) {
	 	$mercuryContainer.css('z-index', 11);
	}else{
		$mercuryContainer.css('z-index', 9);
	}
 	deltaMerc+=47.87/n;	
 	if(deltaMerc>360){deltaMerc-=360;}
}
// Ajoutez un gestionnaire d'événements de clic à l'élément Mercure
$mercury.on('click', function () {
    window.location.href = 'Planetes/mercury.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
// Ajoute une référence à l'élément Venus
var $venus = $('.venus_container').eq(0);

function moveVenus(){
    var alpha = Math.PI*deltaVenus/180;
 	$venusContainer.css('top', venusY + Rvenus * Math.sin(alpha)* verticalKaificent);
 	$venusContainer.css('left', venusX + Rvenus * Math.cos(alpha));

	venus.css('transform','rotate(' + deltaVenus + 'deg)');
	if (deltaVenus<180) {
	 	$venusContainer.css('z-index', 12);
	}else{
		$venusContainer.css('z-index', 8);
	}
 	deltaVenus+=35.02/n;	
 	if(deltaVenus>360){deltaVenus-=360;}
}

// Ajoutez un gestionnaire d'événements de clic à l'élément Venus
$venus.on('click', function () {
    window.location.href = 'Planetes/venus.html';
});
$(document).ready(function(){
    start.click();
});

//-------------------------------------------------------------
// Ajoute une référence à l'élément Earth
var $earth = $('.earth_moon_container').eq(0);

function moveEarth(){
    var alpha = Math.PI*deltaEarth/180;
 	$earthMoonContainer.css('top', earthY + Rearth * Math.sin(alpha)* verticalKaificent);
 	$earthMoonContainer.css('left', earthX + Rearth * Math.cos(alpha));
	earth.css('transform','rotate(' + deltaEarth + 'deg)');
	if ((deltaEarth<180)) {
	 	$earthMoonContainer.css('z-index', 13);
	}else{
		$earthMoonContainer.css('z-index', 7);
	}
 	deltaEarth+=29.78/n;	
 	if(deltaEarth>360){deltaEarth-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Earth
$earth.on('click', function () {
    window.location.href = 'Planetes/earth.html';
});
$(document).ready(function(){
    start.click();
});
// Ajoute une référence à l'élément Earth
var $moon = $('.moon').eq(0);
function moveMoon(){
    var alpha = Math.PI*deltaMoon/180;
 	$moon.css('top', moonY + Rmoon * Math.sin(alpha)* verticalKaificent);
 	$moon.css('left', moonX + Rmoon * Math.cos(alpha));
	if (deltaMoon<180) {
	 	$moon.css('z-index', 11);
	}else{
		$moon.css('z-index', 9);
	}
 	deltaMoon += 340/n;
 	if(deltaMoon>360){deltaMoon-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Earth
$moon.on('click', function () {
    window.location.href = 'Planetes/moon.html';
});
$(document).ready(function(){
    start.click();
});

//-------------------------------------------------------------
// Ajoute une référence à l'élément Mars
var $mars = $('.mars_container').eq(0);
function moveMars(){
    var alpha = Math.PI*deltaMars/180;
 	$marsContainer.css('top', marsY + Rmars * Math.sin(alpha)* verticalKaificent);
 	$marsContainer.css('left', marsX + Rmars * Math.cos(alpha));
	mars.css('transform','rotate(' + deltaMars + 'deg)');
	if (deltaMars<180) {
	 	$marsContainer.css('z-index', 14);
	}else{
		$marsContainer.css('z-index', 6);
	}
 	deltaMars+=24.077/n;	
	if(deltaMars>360){deltaMars-=360;}
}

// Ajoute un gestionnaire d'événements de clic à l'élément Mars
$mars.on('click', function () {
    window.location.href = 'Planetes/mars.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
// Ajoute une référence à l'élément Jupiter
var $jupiter= $('.jupiter_container').eq(0);

function moveJupiter(){
	var obj = $('.jupiter_container').eq(0);	
    var alpha = Math.PI*deltaJupiter/180;
 	$jupiterContainer.css('top', jupiterY + Rjupiter * Math.sin(alpha)* verticalKaificent);
 	$jupiterContainer.css('left', jupiterX + Rjupiter * Math.cos(alpha));
	jupiter.css('transform','rotate(' + deltaJupiter + 'deg)');
	if (deltaJupiter<180) {
	 	$jupiterContainer.css('z-index', 15);
	}else{
		$jupiterContainer.css('z-index', 5);
	}
	deltaJupiter += 13.07/n;	
 	if(deltaJupiter>360){deltaJupiter-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Jupiter
$jupiter.on('click', function () {
    window.location.href = 'Planetes/jupiter.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
// Ajoute une référence à l'élément Saturn
var $saturn = $('.saturn_container').eq(0);

function moveSaturn(){
    var alpha = Math.PI*deltaSaturn/180;
 	$saturnRingContainer.css('top', saturnY + Rsaturn * Math.sin(alpha)* verticalKaificent);
 	$saturnRingContainer.css('left', saturnX + Rsaturn * Math.cos(alpha));
	saturn.css('transform','rotate(' + deltaSaturn + 'deg)');
 	if (deltaSaturn<180){
	 	$saturnRingContainer.css('z-index', 16);
	}else{
		$saturnRingContainer.css('z-index', 4);
	}
 	deltaSaturn += 9.69/n;	
	if(deltaSaturn>360){deltaSaturn-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Saturn
$saturn.on('click', function () {
    window.location.href = 'Planetes/saturn.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
// Ajoute une référence à l'élément Uranus
var $uranus = $('.uranus_container').eq(0);

function moveUranus(){
    var alpha = Math.PI*deltaUranus/180;
 	$uranusContainer.css('top', uranusY + Ruranus * Math.sin(alpha)* verticalKaificent);
 	$uranusContainer.css('left', uranusX + Ruranus * Math.cos(alpha));
	uranus.css('transform','rotate(' + deltaUranus + 'deg)');
	if (deltaUranus<180){
	 	$uranusContainer.css('z-index', 17);
	}else{
		$uranusContainer.css('z-index', 3);
	}
 	deltaUranus+=6.81/n;	
	if(deltaUranus>360){deltaUranus-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Uranus
$uranus.on('click', function () {
    window.location.href = 'Planetes/uranus.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
// Ajoute une référence à l'élément Neptune
var $neptune = $('.neptune_container').eq(0);

function moveNeptune(){
    var alpha = Math.PI*deltaNeptune/180;
 	$neptuneContainer.css('top', neptuneY + Rneptune * Math.sin(alpha)* verticalKaificent);
 	$neptuneContainer.css('left', neptuneX + Rneptune * Math.cos(alpha));
	uranus.css('transform','rotate(' + deltaNeptune + 'deg)');
	if (deltaNeptune<180){
	 	$neptuneContainer.css('z-index', 17);
	}else{
		$neptuneContainer.css('z-index', 3);
	}
 	deltaNeptune+=5.43/n;	
	if(deltaNeptune>360){deltaNeptune-=360;}
}
// Ajoute un gestionnaire d'événements de clic à l'élément Neptune
$neptune.on('click', function () {
    window.location.href = 'Planetes/neptune.html';
});
$(document).ready(function(){
    start.click();
});
//-------------------------------------------------------------
function drawCircles(){
	var mercuryCircle = $('.mercury_circle').eq(0);
	mercuryCircle.css('left', width/2 - Rmercury);
	mercuryCircle.css('top', height/2 - Rmercury*verticalKaificent);
	mercuryCircle.css('width', Rmercury*2);
	mercuryCircle.css('height', Rmercury*2*verticalKaificent);

	var venusCircle = $('.venus_circle').eq(0);
	venusCircle.css('left', width/2 - Rvenus);
	venusCircle.css('top', height/2 - Rvenus*verticalKaificent);
	venusCircle.css('width', Rvenus*2);
	venusCircle.css('height', Rvenus*2*verticalKaificent);

	var earthCircle = $('.earth_circle').eq(0);
	earthCircle.css('left', width/2 - Rearth);
	earthCircle.css('top', height/2 - Rearth*verticalKaificent);
	earthCircle.css('width', Rearth*2);
	earthCircle.css('height', Rearth*2*verticalKaificent);

	var marsCircle = $('.mars_circle').eq(0);
	marsCircle.css('left', width/2 - Rmars);
	marsCircle.css('top', height/2 - Rmars*verticalKaificent );
	marsCircle.css('width', Rmars*2);
	marsCircle.css('height', Rmars*2*verticalKaificent);

	var jupiterCircle = $('.jupiter_circle').eq(0);
	jupiterCircle.css('left', width/2 - Rjupiter);
	jupiterCircle.css('top', height/2 - Rjupiter*verticalKaificent);
	jupiterCircle.css('width', Rjupiter*2);
	jupiterCircle.css('height', Rjupiter*2*verticalKaificent);

	var saturnCircle = $('.saturn_circle').eq(0);
	saturnCircle.css('left', width/2 - Rsaturn);
	saturnCircle.css('top', height/2 - Rsaturn*verticalKaificent);
	saturnCircle.css('width', Rsaturn*2);
	saturnCircle.css('height', Rsaturn*2*verticalKaificent);
	
	var saturnRing = $('.gif_ring').eq(0);
	saturnRing.css('height', Rring*2* verticalKaificent);

	var uranusCircle = $('.uranus_circle').eq(0);
	uranusCircle.css('left', width/2 - Ruranus);
	uranusCircle.css('top', height/2 - Ruranus*verticalKaificent);
	uranusCircle.css('width', Ruranus*2);
	uranusCircle.css('height', Ruranus*2*verticalKaificent);

	var neptuneCircle = $('.neptune_circle').eq(0);
	neptuneCircle.css('left', width/2 - Rneptune);
	neptuneCircle.css('top', height/2 - Rneptune*verticalKaificent);
	neptuneCircle.css('width', Rneptune*2);
	neptuneCircle.css('height', Rneptune*2*verticalKaificent);
}

function scaleHandler(){
	
 var currentMousePos = { x: -1, y: -1 };
 var isDragged = false;

 $(document).mousemove(function(event) {
    if(!isDragged){
       	currentMousePos.x = event.pageX;
       	currentMousePos.y = event.pageY;
   	}
   	else{
   		delta = (event.pageY - currentMousePos.y)/10000 + verticalKaificent;
   		if( delta <= 1 && delta >=0 ){
			verticalKaificent = delta;}
    	drawCircles();
		$mercuryContainer.css('top', mercuryY + Rmercury * Math.sin(Math.PI*deltaMerc/180)* verticalKaificent);
		$venusContainer.css('top', venusY + Rvenus * Math.sin(Math.PI*deltaVenus/180)* verticalKaificent);
		$earthMoonContainer.css('top', earthY + Rearth * Math.sin(Math.PI*deltaEarth/180)* verticalKaificent);
		$moon.css('top', moonY + Rmoon * Math.sin(Math.PI*deltaMoon/180)* verticalKaificent);

	 	$marsContainer.css('top', marsY + Rmars * Math.sin(Math.PI*deltaMars/180)* verticalKaificent);
	 	$jupiterContainer.css('top', jupiterY + Rjupiter * Math.sin(Math.PI*deltaJupiter/180)* verticalKaificent);
	 	$saturnRingContainer.css('top', saturnY + Rsaturn * Math.sin(Math.PI*deltaSaturn/180)* verticalKaificent);
	 	$uranusContainer.css('top', uranusY + Ruranus * Math.sin(Math.PI*deltaUranus/180)* verticalKaificent);
	 	$neptuneContainer.css('top', neptuneY + Rneptune * Math.sin(Math.PI*deltaNeptune/180)* verticalKaificent);
    }
});

$(document).mousedown(function() { 	
	isDragged = true;
	$('body').css('cursor','-webkit-grabbing');
});

$(document).mouseup(function() {
	isDragged = false;
	$('body').css('cursor','-webkit-grab');
});
};
$(document).ready(function(){
  start.click();
});

// Ajout du script JavaScript pour la barre latérale ici

function toggleSidebar() {
    var sidebar = document.querySelector('.sidenav');
    sidebar.classList.toggle('active');
}




