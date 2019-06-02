let bootProg = 0;
var timer = setInterval(function(){fillBootBar()},100);

$('.tilt-js').tilt({
	scale: 1.2
});

const bootSeqFiles = ['game_dev.ini', 'web_portfolio0.exe', 'initSoftware.ini', 'otherPrj.png', 'ld_effects.exe', 'the_sauce.json', '8008135', 'OwO_OS.init()', 'plsHireMe', 'all done'];

//Boot Sequence
function fillBootBar(){
	let dotString = "..........";
	for (var i = 0; i < 10; i++){
		let fillString = "";
		for (let j = 0; j < bootProg; j++){
			fillString = fillString + "\\";
		}
		dotString = dotString.substr(bootProg, 9);
		$("#boot-seq-prog").text("" + (fillString + dotString));
		$('#boot-seq-res').text(bootSeqFiles[bootProg]);
	}
	bootProg++;
	if (bootProg >= 10){
		clearInterval(timer);
		$("#intro-overlay").fadeOut();
		$("#project-cat-nav").css({"visibility": "visible", "display": "flex"}).fadeIn();
	}
}

// //Game, Web, Software, Other
// LEGACY STYLE CODE
// const projectQuantities = [5,2,2,2];

// function createDots(index){
// 	var distBetweenDots = 100 / (projectQuantities[index] - 1);
// 	for (var i = 0; i < projectQuantities[index]; i++){
// 		$("#bottom-bar").append($("<div>").addClass("project-dot").css({"left": (i * distBetweenDots) + "%"}));
// 		console.log(i * distBetweenDots);
// 	}
// }

// createDots(0);