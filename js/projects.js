//Game, Web, Software, Other
const projectQuantities = [5,2,2,2];

function createDots(index){
	var distBetweenDots = 100 / (projectQuantities[index] - 1);
	for (var i = 0; i < projectQuantities[index]; i++){
		$("#bottom-bar").append($("<div>").addClass("project-dot").css({"left": (i * distBetweenDots) + "%"}));
		console.log(i * distBetweenDots);
	}
}

createDots(1);