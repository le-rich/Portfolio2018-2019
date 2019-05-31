$(document).ready(function(){
	let b = baffle('#rl-logo', {
		characters: '>/</ ▓█░|'
	}).start();
	b.reveal(1500,0);

	let b2 = baffle("#prof-label", {
		characters: '>/</ ▓█░|'
	}).start();
	b2.reveal(3000,0);
});


$("#resume-nav").click(function(){
	showResume();
});

$("#up-arrow").click(function(){
	hideResume();
});


function showResume(){
	$("#background").css({"transform":"translateY(-50%)"});
	$("#ui-overlay-container").css({"transform": "translateY(-100%)", "opacity": "0"});
	$("#resume-container").css({"top":"0%", "opacity": "1", "visibility":"visible"});
	$("#up-arrow").css({"cursor": "pointer"});
}

function hideResume(){
	$("#background").css({"transform":"translateY(0%)"});
	$("#ui-overlay-container").css({"transform": "translateY(0)", "opacity": "1"});
	$("#resume-container").css({"top":"50%", "opacity": "0", "visibility":"hidden"});
	$("#up-arrow").css({"cursor": "cursor"});
}

const labels = ["SOFTWARE DEVELOPER", "GAME DEVELOPER", "FULL STACK DEVELOPER", "DESIGNER (?)"]
let currentLabel = 0;
setInterval(function(){switchLabel()}, 2000);

function switchLabel(){
	currentLabel = (currentLabel + 1) % labels.length;
	$("#prof-label").text(labels[currentLabel]);
	let labelBaffle = baffle("#prof-label", {
		characters: '>/</ ▓█░|'
	}).start();
	$("#prof-label").text(labels[currentLabel]);
	labelBaffle.reveal(500,0);
}
