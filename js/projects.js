let bootProg = 0;
var timer = setInterval(function(){fillBootBar()},150);


//Boot Sequence
function fillBootBar(){
	let dotString = "..........";
	for (var i = 0; i < 10; i++){
		let fillString = "";
		for (let j = 0; j < bootProg; j++){
			fillString = fillString + "\\";
			console.log(fillString);
		}
		dotString = dotString.substr(bootProg, 10);
		$("#boot-seq-prog").text("" + fillString + dotString);
	}
	bootProg++;
	if (bootProg >= 10){
		clearInterval(timer);
		$("#intro-overlay").fadeOut();
	}
}



//Game, Web, Software, Other
const projectQuantities = [5,2,2,2];

function createDots(index){
	var distBetweenDots = 100 / (projectQuantities[index] - 1);
	for (var i = 0; i < projectQuantities[index]; i++){
		$("#bottom-bar").append($("<div>").addClass("project-dot").css({"left": (i * distBetweenDots) + "%"}));
		console.log(i * distBetweenDots);
	}
}

createDots(0);