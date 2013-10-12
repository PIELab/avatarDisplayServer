var maxAvatars = 1000;
/*
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
*/

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
	drawFace(ctx,avatarN);
} 

// draw face onto given avatar
function drawFace(context, avatarN){
	//TODO: these values (except rotation) should be scaled by ANIMATION_SIZE
	var xLoc = 0;
	var yLoc = 0;
	var s = 40;	//size (in px)	
	var r = 0; //rotation (in radians)
	var DEG2RAD = 3.1415/360.0;	//conversion factor for deg to radians

	var center = 150;	

	// === ACTIVE ===
	if(ANIMATION_ACTIVITY[avatarN] == "running"){
		xLoc = center-32;
		yLoc = center-106;
		s = 84;
		//static location for all frames
	} else if(ANIMATION_ACTIVITY[avatarN] == "basketball"){
		//load location based on current frame of body animation
		//find body animation
		switch (CURRENT_FRAME[avatarN]){
			case 0:
			case 1:
			case 2:
				xLoc = center+20;
				yLoc = center+31;
				s = 40;
				break;
			case 3:
				xLoc = center+20;
				yLoc = center+21;
				s = 40;
				break;
			case 4:
				xLoc = center+21;
				yLoc = center+16;
				s = 40;
				r = -10.0 * DEG2RAD;
				break;
			case 5:
				xLoc = center+20;
				yLoc = center+21;
				s = 40;
				break;
			case 6:
				xLoc = center+21;
				yLoc = center+29;
				s = 40;
				break;
			case 7:
			case 8:
			case 9:
				xLoc = center+21;
				yLoc = center+29;
				s = 40;
				break;
			default:
				cosole.warn('animateAvatar.drawFace has bad frame #:'+CURRENT_FRAME[avatarN]);
				break;
			}
		} else if(ANIMATION_ACTIVITY[avatarN] == "bicycling"){
			xLoc = center-33;
			yLoc = center-90;
			s = 90;
			r = -7.0 * DEG2RAD;
		// === ASLEEP ===
		} else if(ANIMATION_ACTIVITY[avatarN] == "sleeping"){
			s = 0;	//size 0 so it won't show
		// === PASSIVE ===
		} else if(ANIMATION_ACTIVITY[avatarN] == "onComputer"){
			xLoc = center+37;
			yLoc = center-62;
			s = 79;
		} else if(ANIMATION_ACTIVITY[avatarN] == "videoGames"){
			xLoc = center+108;
			yLoc = center-50;
			s = 50;
		} else if(ANIMATION_ACTIVITY[avatarN] == "watchingTV"){
			xLoc = center+26;
			yLoc = center-107;
			s = 84;
			// === DEFAULT === 
		} else {
			console.warn("drawFace() does not recognize activity name"+ANIMATION_ACTIVITY[avatarN])
		}


	var imageObj = new Image();
	
	imageObj.onload = function() {
		context.translate(xLoc-s/2, yLoc-s/2);
		context.rotate(r);
		context.drawImage(imageObj,0, 0, s, s);
		context.rotate(-r);
		context.translate(-xLoc+s/2, -yLoc+s/2);
	};
	imageObj.onerror= function() {
		console.log('using default face');
		FACE_IMAGE[avatarN] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/718smiley-jonathan.svg/600px-718smiley-jonathan.svg.png';
	};
	imageObj.src = FACE_IMAGE[avatarN];
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

