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
    status_bag = true;
    objectDetector.detect(bag_image, gotResult)

}