pencil_image = "";
status_pencil = "";

function preload(){
    pencil_image = loadImage('pencil.jpg');
}

function setup() {
    canvas_pencil = createCanvas(350, 350);
    canvas_pencil.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_pencil").innerHTML = "Status : Detecting Objects";  
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
}

function draw(){
    image(pencil_image, 0, 0, 450, 350);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_pencil = true;
    objectDetector.detect(pencil_image, gotResult)

}