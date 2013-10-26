function embiggenAvatar(avatarId){
	//console.log(avatarId);
	var avatarCanvas = document.getElementById(avatarId);
	if (avatarCanvas.width == SMALL){
		avatarCanvas.width  = BIG;
		avatarCanvas.height = BIG;
	} else {
		avatarCanvas.width  = SMALL;
		avatarCanvas.height = SMALL;
	}
}
