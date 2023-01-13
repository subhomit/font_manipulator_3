leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet Is Intialized");
}
function draw(){
    background('#5196e3');
    document.getElementById("dimensions_text").innertext = "Font Size = " + difference + "px";
    fill("#00ff0a");
    textSize(difference);
    text('Subhomit', 50, 400);
}
function gotPoses(results, error){
    if(error){
        console.log(error);
    }
    if(results.length < 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX)
        console.log("rightWrist_x = " + results[0].pose.rightWrist.x)
        console.log("leftWrist_x = " + results[0].pose.leftWrist.x)
    }
}