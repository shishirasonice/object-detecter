phone_image = "";
status_phone = "";

function preload(){
    phone_image = loadImage('phone.jpg');
}

function setup() {
    canvas_phone = createCanvas(350, 350);
    canvas_phone.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_phone").innerHTML = "Status : Detecting Objects";  
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
}

function draw(){
    image(phone_image, 0, 0, 450, 350);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_phone = true;
    objectDetector.detect(phone_image, gotResult)

}