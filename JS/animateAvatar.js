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
			nextFrame(currentAvatar);
		}
	}
}

// move given image one frame
function nextFrame(avatarIdToChange){
	//get old src (Maxus leading '?/images/animations/' (len=18) and file extension (len=4))
	//var fullOldSrc = avatarElement.src.split("/images/animations/")[1]; 
	var avatarElementToChange = document.getElementById(avatarIdToChange);
	var splitSrc = avatarElementToChange.src.split("/");
	//console.log(splitSrc);
	//[0] = "http:",
	//[1] = "",
	//[2] = "localhost:8000",
	//[3] = "images",
	//[4] = "ani_vSmall",
	//[5] = "running",
	//[6] = "0.png"
	//I don't really need 0-2, 3-5 need to stay the same, 6 needs to be changed
	var oldFrameN = splitSrc[6].substr(0,splitSrc[6].length-4);	//remove extension
	var newFrameN = parseInt(oldFrameN) + 1;



	var newSrc = splitSrc[3] +'/'+ splitSrc[4] +'/'+ splitSrc[5] +'/'+ newFrameN + ".png";

	if ( ! UrlExists(newSrc,newFrameN) ){	//if animation not found
		 newSrc = splitSrc[3] +'/'+ splitSrc[4] +'/'+ splitSrc[5]+'/'+"0.png";//reset to 0 animation
	}
	avatarElementToChange.src=newSrc;
	//console.log(avatarElementToChange.id + " frame changed to " + avatarElementToChange.src);
} 

// check for file exists at url
function UrlExists(url, frameN){
	//this is a quick hack which works much better:
	var animationName = url.split("/")[2];
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
		console.warn("animationName '" + animationName +"' not recognized; from "+url.split("/") );
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

