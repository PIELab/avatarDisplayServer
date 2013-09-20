//animation image size:
//var animationSize = "ani_vSmall";
//var animationSize = "anim_small";
var ANIMATION_SIZE = "animations";

// handles for animation delays:
var TIMER_HANDLE = new Array();

//animation speeds:
var ANIMATION_SPEED = new Array();

//animation current frame numbers:
var CURRENT_FRAME = new Array();

//animation activity names
var ANIMATION_ACTIVITY = new Array();

//avatar face image locations
var FACE_IMAGE = new Array();

//generates randomized avatars for demo purposes
function generateRandomAvatars(){
	for( var i = 0; i < 1000 ; i++){
		ANIMATION_SPEED[i] = Math.floor((Math.random()*300)+10);
		CURRENT_FRAME[i] = 0;
		ANIMATION_ACTIVITY[i] = getAnimationName(i);
		FACE_IMAGE[i] = 'images/faces/default.png';
	}
}

// get animation name for given avatar number
function getAnimationName(avatarN){
	var activeMax = 150;
	var sedentaryMax = 280;
	var sleepingMax = 300;

	var animationName = "";
	if(ANIMATION_SPEED[avatarN] <= activeMax){
		animationName = randomAnim("active");
	} else if(ANIMATION_SPEED[avatarN] <= sedentaryMax){
		animationName = randomAnim("passive");
//			} else if(ANIMATION_SPEED[avatarN] < sleepingMax){
///				animationName = randomAnim("sleeping");
	} else {
		console.warn(avatarN+" ANIMATION_SPEED "+ANIMATION_SPEED[avatarN]+" out of range");
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
