let start;
const max = 10000; 
let h; //of flower
let cycle = 0;

function setup() {
  createCanvas(400, 400);
  resetGrowth();
}

function draw() {
  background('rgb(216,231,255)');
  text('Watch the dandelion grow!', 50, 50);
  
  let time = millis() - start;
  let sec = Math.floor(time / 1000); 

  if (time < 8000) {
    h = map(time, 0, 8000, 0, 200);
  } else if (time < max) {
    h = 200;
  } else {
    resetGrowth();
  }

  dandillion(width / 2, height - h);

  fill('rgb(115,141,213)');
  noStroke();
  textSize(24);
  text(`Seconds: ${sec}`, 10, height - 30);
  text(`Cycle #: ${cycle}`, 10, height - 60);
}

function dandillion(x, y) {
  stroke('green');
  strokeWeight(4);
  line(x, y, x, height);
  push();
  noStroke();
  fill('rgb(248,246,235)'); 
  ellipse(x, y, h / 2, h / 2); 
  pop();
}

function resetGrowth() {
  start = millis();
  h = 0;
  cycle++;
}