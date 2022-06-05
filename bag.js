bag_image = "";
status_bag = "";

function preload(){
    bag_image = loadImage('bag.jpg');
}

function setup() {
    canvas_bag = createCanvas(400, 300);
    canvas_bag.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_bag").innerHTML = "Status : Detecting Objects";  
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
}

function draw(){
    image(bag_image, 0, 0, 390, 300);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_bag = true;
    objectDetector.detect(bag_image, gotResult)

}