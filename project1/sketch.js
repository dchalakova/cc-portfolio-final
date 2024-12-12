let img;

function preload(){
  img = loadImage('/assets/george.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(253,234,155)');
  translate(100,100);
  
  //money underneath
push();
  rotate(QUARTER_PI/2);
  strokeWeight(4);
  stroke('rgb(148,173,148)')
  fill('#CCDACC');
  rect(-40, -35, 300, 170);
pop();
  
  //money on top
push();

  //light background rect and outline
  strokeWeight(4);
  stroke('rgb(148,173,148)')
  fill('#CCDACC');
  rect(-55, 0, 300, 170);

  //dark middle rect
  fill('rgb(138,167,138)');
  rect(-40, 20, 270, 130);
  
  push();
  fill('#CCDACC');
  stroke('#CCDACC');
  strokeWeight(4);

  //middle circle
  ellipse(90,85, 90, 110);

  //top left border circle
  ellipse(-25,35, 45, 60);
  
  //bottom left border circle
  ellipse(-25, 135, 45, 60);
  
  //top right border circle
  ellipse(215, 35, 45, 60);
  
  //bottom right border circle
  ellipse(215, 135, 45, 60);
  pop();
  
  let fontBold;
  push();
  fill('rgb(100,134,100)');
  textFont('Courier New');
  textSize(30);

  //number 1 bottom right
  text('1',205, 140);
  
  //number 1 top right
  text('1',205, 46);
  
  //number 1 top left
  text('1',-30, 46);
  
  //number 1 bottom left
  text('1',-30, 140);
  pop();
  
  push();
  //george of the washington family
  blendMode(OVERLAY);
  image(img, 55, 50, 70, 70);
  pop();
  
pop();
  
}