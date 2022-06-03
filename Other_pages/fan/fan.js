var status1 = ""; //status of the model
var img = ""; //image
//let confidence = 0;
objects = []; //array of objects

function preload() {
  img = loadImage("fan.jpg"); //load image
}

function setup() {
  canvas = createCanvas(400, 400); //create canvas
  canvas.center(); //center canvas
  objectDetector = ml5.objectDetector('cocossd', modelLoaded); //load model
  document.getElementById('status').innerHTML = "Detecting Objects"; //set status
}

function draw() {
  image(img, 0, 0, 400, 400); //display image
  if (status1 != "") { //if status is not empty
    console.log("Objects number : ", objects.length); //log number of objects
    for (var i = 0; i < objects.length; i++){
      document.getElementById("status").innerHTML = "Status : Detected objects";
      fill(255, 0, 0); //set fill to red
      percent = floor(objects[i].confidence * 100); //get confidence
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); //display label and confidence
      noFill(); //no fill
      stroke(255, 0, 0); //set stroke color
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); //display rectangle
      document.getElementById('number_of_objects').innerHTML = "Number of objects : " + objects.length; //display number of objects
    }  //for each object
    
}
}
function modelLoaded() {
  console.log("cocossd is ready!"); //log model is ready
  status1 = true; //set status
  objectDetector.detect(img, gotResults); //detect objects
}

function gotResults(error, results) {
  if (error) { //if error
    console.log(error); //log error
  }
  console.log(results); //log results
  objects = results; //set objects
}