moosic=""
moosic2=""
leftwristX=""
leftwristY=""
RightwristX=""
RightwristY=""
function setup(){
    canvas=createCanvas(400,300)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}
function preload(){
    moosic=loadSound("Darkside.mp3")
    moosic2=loadSound("Elektronomia.mp3")
}
function draw(){
    image(video,0,0,400,300)
}
function modelLoaded(){
    console.log("model are is loaded")
}
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	}
  } 