wardrobe_image = "";
status_wardrobe = "";

function preload(){
    wardrobe_image = loadImage('wardrobe.jpg');
}

function setup() {
    canvas_wardrobe = createCanvas(350, 350);
    canvas_wardrobe.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_wardrobe").innerHTML = "Status : Detecting Objects";  
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
}

function draw(){
    image(wardrobe_image, 0, 0, 350, 350);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_wardrobe = true;
    objectDetector.detect(wardrobe_image, gotResult)

}