var maxAvatars = 1000;

// this function moves all avatars forward one frame
function oneFrameAll() {
	for (var i=1 ; i < maxAvatars ; i++){
		var currentAvatarID = "avatar" + i;
		//console.log(currentAvatarID);
		var currentAvatar = document.getElementById(currentAvatarID); 
		//console.log(currentAvatar);
		if( currentAvatar == null ) {
			//console.log("all avatars animated");
			return;
		} else {
			//currentAvatar.src = "images/animations/running/0.png";
			nextFrame(currentAvatarID,i);
		}
	}
}

// move given avatar one frame
function nextFrame(avatarIdToChange,avatarN){
//	console.log(avatarIdToChange);
//	console.log(avatarN);
	var canvas=document.getElementById(avatarIdToChange);
	var ctx=canvas.getContext('2d');

	CURRENT_FRAME[avatarN] += 1;
	if ( ! UrlExists(ANIMATION_ACTIVITY[avatarN],CURRENT_FRAME[avatarN]) ){
		CURRENT_FRAME[avatarN] = 0;
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
	drawAvatar(ctx, avatarN, getAnimationFrameSource(avatarN,CURRENT_FRAME[avatarN]));
} 

// check for file exists at url
function UrlExists(animationName, frameN){
	//this is a quick hack which works much better:
	var maxFrames = 5;
	if (animationName == "running"){
		maxFrames = 11;
	}else if(animationName == "basketball" ){
		maxFrames = 9;
	}else if(animationName == "bicycling" ){
		maxFrames = 9;
	}else if(animationName == "onComputer"){
		maxFrames = 5;
	}else if(animationName == "videoGames" ){
		maxFrames = 3;
	}else if(animationName == "watchingTV" ){
		maxFrames = 9;
	}else if(animationName == "sleeping"){
		maxFrames = 9;
	}else{
		console.warn("animationName '" + animationName +"' not recognized;" );
		maxFrames = 3;	//min of all
	}

	if (frameN > maxFrames){	//TODO: can get this from url (as well as animation if desired)
		return false;
	} else{
		return true;
	}
	//this is the generalized way:
/*
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
*/
}

