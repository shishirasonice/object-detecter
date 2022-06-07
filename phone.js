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

    if(status != ""){
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

   
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x - 15, objects[i].y - 15);
  
  
            noFill();
            stroke("#FF0000");
            rect(objects[i].x - 14, objects[i].y - 175, objects[i].width - 2326, objects[i].height - 2850);          }

    }
  
}

function modelLoaded() {
    console.log("Model Loaded!")
    status_phone = true;
    objectDetector.detect(phone_image, gotResult)

}