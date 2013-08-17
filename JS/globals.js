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
	ANIMATION_ACTIVITY[i] = getAnimationName(i);
}

// get animation name for given avatar number
function getAnimationName(avatarN){
	var activeMax = 150;
	var sedentaryMax = 280;
	var sleepingMax = 300;

	var animationName = "";
	if(animationSpeed[avatarN] <= activeMax){
		animationName = randomAnim("active");
	} else if(animationSpeed[avatarN] <= sedentaryMax){
		animationName = randomAnim("passive");
//			} else if(animationSpeed[avatarN] < sleepingMax){
///				animationName = randomAnim("sleeping");
	} else {
		console.warn("animationSpeed out of range");
		animationName = "sleeping";
	}
	return animationName;
}

// return random animation name for given activity type
function randomAnim(type){
	var animationName = "";
	var randomNumber = Math.floor((Math.random()*3)+1);	//get random between 1 & 3
	if(type == "active"){
		if(randomNumber == 1){
			animationName = 'running';
		}else if(randomNumber ==2){
			animationName = 'basketball';
		}else if(randomNumber ==3){
			animationName = 'bicycling';
		}
	} else if (type == "passive"){
		if(randomNumber == 1){
			animationName = 'onComputer';
		}else if(randomNumber ==2){
			animationName = 'watchingTV';
		}else if(randomNumber ==3){
			animationName = 'videoGames';
		}
	} else if (type == "sleeping"){
		animationName = 'sleeping';
	} else{
		console.warn("animation type not recognized");
	}
	return animationName;
}
