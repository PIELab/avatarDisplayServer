function insertImage(animationSize) {
	var MAX_AVATARS = 1000;
	for(var avatarN = 0; avatarN < MAX_AVATARS ; avatarN++){
		var newAvatarId = 'avatar'+avatarN;
		if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
			// === check for animationSpeed low enough to be passive and set alternative to splitSrc[5]
			var activeMax = 150;
			var sedentaryMax = 280;
			var sleepingMax = 300;

			var animationName = "";
			if(animationSpeed[avatarN] < activeMax){
				animationName = randomAnim("active");
			} else if(animationSpeed[avatarN] < sedentaryMax){
				animationName = randomAnim("passive");
//			} else if(animationSpeed[avatarN] < sleepingMax){
///				animationName = randomAnim("sleeping");
			} else {
				console.log("animationSpeed out of range");
				animationName = "sleeping";
			}

			//insert new avatar
			document.getElementById('avatars').innerHTML+="<image id='"+newAvatarId+"' src='images/"+animationSize+"/"+animationName+"/0.png' />";
		
			//schedule first frame change
			keepTimeHandle[avatarN] = setInterval(function(){nextFrame(newAvatarId)},animationSpeed[avatarN]);

			console.log(newAvatarId + " added");
			break;	//exit the for loop
		}
	}
}

function insertNAvatars(){
	var nAvatars = 100;
	for(var i = 0; i < nAvatars ; i++){
		insertImage(animationSize);
	}
}

function insertAvatars(){
	insertNAvatars();
}

function insertCountlyAvatars(){
	/*can maybe connect with something like: 
	mongo --host ec2-54-234-225-144.compute-1.amazonaws.com
	for manual operations

	get info via countly interface with:
	http://testsubdomain.socialvinesolutions.com/o?api_key=AAA & app_id=BBB & method=CCC &

	which is...
	http://testsubdomain.socialvinesolutions.com/o?api_key=f9260de6b6495ee559b8f951109d3959&app_id=510892b53f3f90f302000001&method=events&event=brittany%20mackey&action=refresh

*/

}

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
		console.log("animation type not recognized");
	}
	return animationName;
}

