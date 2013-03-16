function insertImage() {
	for(var i = 1; i < 1000 ; i++){
		var newAvatarId = 'avatar'+i;
		if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
			//insert new avatar
			document.getElementById('avatars').innerHTML+="<image id='"+newAvatarId+"' src='images/animations/running/0.png' />";
			break;	//exit the for loop
		}
	}
}
