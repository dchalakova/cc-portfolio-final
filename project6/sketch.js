//let min_num = [[67, 70, 68, 62, 66, 60], [64, 72, 69, 65, 66, 66], [71, 74, 71, 66, 80, 72], [70, 79, 68, 65, 65, 68], [67, 69, 68, 67, 66, 63], [69, 64, 65, 64, 56, 66], [81, 80, 83, 84, 69, 67]];

//let max_num = [[93, 129, 104, 69, 86, 75], [95, 101, 81, 85, 77, 94], [85, 136, 96, 108, 121, 83],[111, 128, 84, 116, 103, 105], [76, 107,93, 82, 93, 74], [104, 114, 107, 120, 94, 85]];

let average_hr = [94.5, 95.5, 87.5, 99, 134, 97.5, 92.5, 87];

let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let start = 0;
let heartscale = 2;
let interval;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  interval = setInterval(() => {
    heartscale = 1 + 0.1 * sin(TWO_PI * average_hr[start] / 60 * millis() / 1000);
  }, 100);
}

function draw() {
  background('rgb(255,228,233)');
  
  text('take care of your heart!', 305, 400);
  
  fill(0);
  text(`${days[start]}`, width / 2, height / 2 - 20);
  text(`${average_hr[start]} bpm`, width / 2, height / 2 + 20);
  
  heart(300, 220, heartscale);
}

function heart(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  fill('red');
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.1) {
    let x1 = 16 * pow(sin(i), 3);
    let y1 = 13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i);
    vertex(x1, -y1);
  }
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  start = (start + 1) % days.length;
}