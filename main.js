nose_x=0
nose_y=0
rightWrist_x=0
leftWrist_x=0
difference=0
function setup(){
    Vid=createCapture(VIDEO);
    Vid.size(400,400); 
    canvas=createCanvas(400,400);  
    canvas.position(600,150);
    P=ml5.poseNet(Vid,message);
    P.on('pose',inspect)
}
function draw(){
    background("Purple");
    fill("orange");
    stroke("orange");
    text("Hello",nose_x,nose_y);  
    textSize(difference);
    document.getElementById("para").innerHTML="The font size is "+difference+"px"
}
function message(){
    console.log("poseNet loaded")
}
function inspect(results){
    if(results.length>=1){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        rightWrist_x=results[0].pose.rightWrist.x;
        leftWrist_x=results[0].pose.leftWrist.x;
        difference=Math.floor(leftWrist_x-rightWrist_x);
    }
}