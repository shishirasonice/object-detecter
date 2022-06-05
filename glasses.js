glasses_image = "";
status_glasses = "";

function preload(){
    glasses_image = loadImage('glasses.jpeg');
}

function setup() {
    canvas_glasses = createCanvas(350, 350);
    canvas_glasses.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_glasses").innerHTML = "Status : Detecting Objects";  
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
}

function draw(){
    image(glasses_image, 0, 0, 390, 300);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_glasses = true;
    objectDetector.detect(glasses_image, gotResult)

}