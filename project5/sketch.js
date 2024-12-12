let cols, rows;
let squareSize = 40;
let speed = 2;
let offset = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(300);
  cols = width / squareSize;
  rows = height / squareSize;
}

function draw() {
  background(255);
  offset += speed;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill('black');
      if ((x + y) % 2 == 0) {
        let xPos = (x * squareSize + offset) % width;
        if (y % 2 ==0) {
          rect(xPos, y * squareSize, squareSize, squareSize);
        } else {
          rect(400 - xPos, y * squareSize, squareSize, squareSize);
        }
      }
    }
  }
}