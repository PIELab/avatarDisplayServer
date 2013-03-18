function insertImage(animationSize) {
	var MAX_AVATARS = 1000;
	for(var avatarN = 1; avatarN < MAX_AVATARS ; avatarN++){
		var newAvatarId = 'avatar'+avatarN;
		if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
			//insert new avatar
			document.getElementById('avatars').innerHTML+="<image id='"+newAvatarId+"' src='images/"+animationSize+"/running/0.png' />";

			//schedule first frame change
			//var newAvatarElement = document.getElementById(newAvatarId);
			keepTimeHandle[avatarN] = setInterval(function(){nextFrame(newAvatarId)},animationSpeed[avatarN]);
//			scheduleNextFrame(newAvatarElement);// call animation nextFrame scheduler
			console.log(newAvatarId + " added");
			break;	//exit the for loop
		}
	}
}

function insertAvatars(){
	var nAvatars = 1;
	for(var i = 0; i < nAvatars ; i++){
		insertImage(animationSize);
	}
}
