// draw avatar canvas & start animation
function drawAvatarAnim(){
	avatarN = 0;
	var newAvatarId = 'avatar'+avatarN;

	var canvas=document.getElementById(newAvatarId);
	var ctx=canvas.getContext('2d');

	drawAvatar(ctx,avatarN,getInitialAnimationFrameSource(avatarN));

	//schedule first frame change
	keepTimeHandle[avatarN] = setInterval(function(){nextFrame(newAvatarId)},animationSpeed[avatarN]);

	ctx.fillStyle='#FF0000';
	ctx.fillRect(1,5,80,100);
}

// draw avatar onto given canvas
function drawAvatar(ctx,avatarN,source){
	var newAvatarId = 'avatar'+avatarN;

	var imageObj = new Image();
   imageObj.onload = function() {
     ctx.drawImage(imageObj,0, 0);
   };
	imageObj.src = source;
}

// insert avatar image into document
function insertImage(animationSize) {
	var MAX_AVATARS = 1000;
	for(var avatarN = 0; avatarN < MAX_AVATARS ; avatarN++){
		var newAvatarId = 'avatar'+avatarN;
		if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
			// === check for animationSpeed low enough to be passive and set alternative to splitSrc[5]

			//insert new avatar
			document.getElementById('avatars').innerHTML+=
			     "<image id='"+newAvatarId+"' src='"+getInitialAnimationFrameSource(avatarN)+"' title = '"+newAvatarId+"'/>";
		
			//schedule first frame change
			keepTimeHandle[avatarN] = setInterval(function(){nextFrame(newAvatarId)},animationSpeed[avatarN]);

			//console.log(newAvatarId + " added");
			break;	//exit the for loop
		}
	}
}

// get file source for first frame of animation
function getInitialAnimationFrameSource(avatarN){
	return getAnimationFrameSource(avatarN,0);
}

// get file source for given frame of animation
function getAnimationFrameSource(avatarN,frameN){
	return "images/"+animationSize+"/"+ANIMATION_ACTIVITY[avatarN]+"/"+frameN+".png";
}

// insert given number of avatars into document
function insertNAvatars(nAvatars){
	for(var i = 0; i < nAvatars ; i++){
		insertImage(animationSize);
	}
}

// insert hard-coded number of avatars into document
function insertAvatars(){
	var nAvatars = 200;
	insertNAvatars(200);
}

function insertCountlyAvatars(){
	/*can maybe connect with something like: 
	mongo --host ec2-54-234-225-144.compute-1.amazonaws.com
	for manual operations

	get info via countly interface with:
	http://testsubdomain.socialvinesolutions.com/o?api_key=AAA & app_id=BBB & method=CCC &

	which is...
	for count & sum:
	http://testsubdomain.socialvinesolutions.com/o?api_key=f9260de6b6495ee559b8f951109d3959&app_id=510892b53f3f90f302000001&method=events&event=brittany%20mackey&action=refresh

	for segmented count & sum (the most recent version):
http://testsubdomain.socialvinesolutions.com/o?api_key=f9260de6b6495ee559b8f951109d3959&app_id=510892b53f3f90f302000001&method=events&event=physicalActivity&action=refresh
*/

}



