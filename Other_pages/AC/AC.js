var status1 = "";
var img = "";
objects = [];

function preload() {
  img = loadImage("https://i.postimg.cc/R0VbMw7g/AC.jpg");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = "Detecting Objects";
}

function draw() {
  image(img, 0, 0, 400, 400);
  if (status1) {
    
  }
}

function modelLoaded() {
  console.log("cocossd is ready!");
  status1 = true;
  objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}
