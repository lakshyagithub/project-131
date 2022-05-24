var status1 = "";
var img = "";

function preload() {
  img = loadImage("/AC.jpg");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = "Detecting Objects";
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