var maxAvatars = 1000;

// this function moves all avatars forward one frame
function oneFrameAll() {
	for (var i=1 ; i < maxAvatars ; i++){
		var currentAvatarID = "avatar" + i;
		console.log(currentAvatarID);
		currentAvatar = document.getElementById(currentAvatarID); 
		console.log(currentAvatar);
		if( currentAvatar == null ) {
			console.log("all avatars animated");
			return;
		} else {
			//currentAvatar.src = "images/animations/running/0.png";
			nextFrame(currentAvatar);
		}
	}
}

// move given image one frame
function nextFrame(avatarElement){
	//get old src (minus leading '?/images/animations/' (len=18) and file extension (len=4))
	var fullOldSrc = avatarElement.src.split("/images/animations/")[1]; 
	var oldSrc = fullOldSrc.substr(0,fullOldSrc.length-4);	//remove extension
	var animDir   =          oldSrc.split("/")[0]  + '/';
	var newFrameN = parseInt(oldSrc.split("/")[1]) + 1;
	var newSrc = "images/animations/"+animDir+newFrameN+".png";

	if ( ! UrlExists(newSrc) ){	//if animation not found
		newSrc="images/animations/"+animDir+"0.png";//reset to 0 animation
	}
	avatarElement.src=newSrc;
} 

// check for file exists at url
function UrlExists(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

