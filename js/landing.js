let b = baffle('#rl-logo', {
	characters: '>/</ ▓█░|'
}).start();
b.reveal(1500,0);

let b2 = baffle("#prof-label", {
	characters: '>/</ ▓█░|'
}).start();
b2.reveal(3000,0);


$("#resume-nav").click(function(){
	$("#background").css({"transform":"translateY(-50%)"});
});
