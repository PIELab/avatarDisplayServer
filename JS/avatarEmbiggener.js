function embiggenAvatar(avatarId){
	console.log(avatarId);
	var BIG = '500';
	var SMALL = '300';
	var avatarCanvas = document.getElementById(avatarId);
	if (avatarCanvas.width == SMALL){
		avatarCanvas.width  = BIG;
		avatarCanvas.height = BIG;
	} else {
		avatarCanvas.width  = SMALL;
		avatarCanvas.height = SMALL;
	}
}
