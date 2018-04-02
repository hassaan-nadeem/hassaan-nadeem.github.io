$(document).ready(function(){
	$('.slider').slider();
});

window.onload = function(){
	document.getElementById("portal").addEventListener("click", NavigateToPortfolio);
}

function NavigateToPortfolio(){
	window.location.replace("https://ece.uwaterloo.ca/~mfnadeem/hassaanportfolio/Portfolio.html");
}