status="";
function preload(){
    img=loadImage('ac.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}

function modelLoaded(){
    console.log("ModelLoaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}