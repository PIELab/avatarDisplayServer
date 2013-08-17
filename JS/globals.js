//animation image size:
//var animationSize = "ani_vSmall";
//var animationSize = "anim_small";
var animationSize = "animations";

// handles for animation delays:
var keepTimeHandle = new Array();

//animation speeds:
var animationSpeed = new Array();

//animation current frame numbers:
var animationFrame = new Array();

//animation activity names
var ANIMATION_ACTIVITY = new Array();

for( var i = 0; i < 1000 ; i++){
	animationSpeed[i] = Math.floor((Math.random()*300)+10);
	animationFrame[i] = 0;
	ANIMATION_ACTIVITY[i] = "sleeping";
}
