
// draw avatar canvas & start animation
function drawAvatarAnim(avatarN){
	var newAvatarId = 'avatar'+avatarN;

	var canvas=document.getElementById(newAvatarId);
	var ctx=canvas.getContext('2d');

	drawAvatar(ctx,avatarN,getAnimationFrameSource(avatarN,0));

	//schedule first frame change
	TIMER_HANDLE[avatarN] = setInterval(function(){nextFrame(newAvatarId,avatarN)},ANIMATION_SPEED[avatarN]);
}

// draw avatar onto given canvas
function drawAvatar(canvas,avatarN,source,avatarName){
	var ctx=canvas.getContext('2d');
	var newAvatarId = 'avatar'+avatarN;
	var pad = 30;	//size of padding aroud starting text

	var imageObj = new Image();
   imageObj.onload = function() {
		ctx.clearRect(0, 0, SMALL, SMALL); //clear canvas
   	ctx.drawImage(imageObj,0, 0);
		ctx.fillStyle = "black";
		ctx.font = "bold 20px Arial";
		var texSize = 20; //for spacing, should match above in ctx.font
		var newlPad = 5;	//spacing between lines of text
		var x = pad;
		var y = SMALL-pad;
		ctx.fillText(avatarName, x, y);
		y += texSize + newlPad;
		ctx.fillText(" activity: "+ACTIVITY_LEVEL[avatarN], x, y);
   };
	imageObj.src = source;
}

// inserts an avatar with given id if does not already exist, and uses avatar number to fetch from global data
function insertAvatarCanvas(newAvatarId,avatarN){
	if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
		var newHTML = '<canvas id="'+newAvatarId+'" height="300" width="300" onLoad="drawAvatarAnim('+avatarN+')" title="'+newAvatarId+'" onClick=embiggenAvatar("'+newAvatarId+'") </canvas>';
		//console.log(newHTML);
		//insert new avatar
		document.getElementById('avatars').innerHTML+= newHTML;
		//schedule first frame change
		TIMER_HANDLE[avatarN] = setInterval(function(){nextFrame(newAvatarId,avatarN)},ANIMATION_SPEED[avatarN]);

		//console.log(newAvatarId + " added");
	}
}

// get file source for given frame of animation
function getAnimationFrameSource(avatarN,frameN){
	return "images/"+ANIMATION_SIZE+"/"+ANIMATION_ACTIVITY[avatarN]+"/"+frameN+".png";
}

// insert given number of avatars into document
function insertNAvatars(nAvatars){
	for(var i = 0; i < nAvatars ; i++){
		//insertImage();
		insertAvatarCanvas("avatar"+i,i);
	}
}

// insert hard-coded number of avatars into document
function insertAvatars(){
	var nAvatars = 20;
	insertNAvatars(nAvatars);
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



