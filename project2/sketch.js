//background
let r, g, b;
//circle row
let r1, g1, b1;
//center circle
let r2, g2, b2;
//face
let r3, g3,b3;


function setup() {
  createCanvas(400, 400);
  r, g, b = random(0, 255);
  r1, g1, b1 = random(0,255);
  r2, g2, b2 = random(0,255);
  r3, g3, b3 = random(0,255);

  diam = 30;
}

function draw() {
  background(r, g, b);
  
  diam = (mouseX+mouseY)/10;
  
//there must be a better way to do the following code by using a function
  push();
  fill(r1,g1,b1);
  circle(mouseX, mouseY, diam);
  //only for middle circle
  push();
  fill(r2,g2,b2);
  circle(mouseX, mouseY, diam);
  pop(); 
  //
  //FACE
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  
  //circles on left side of middle circle 
  push();
  fill(r1,g1,b1);
  translate(-60,0);
  circle(mouseX, mouseY, diam);
  //face
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-120,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  
  push();
  fill(r1,g1,b1);
  translate(-180,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  
  push();
  fill(r1,g1,b1);
  translate(-240,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-300,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-360,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-420,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-480,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(-540,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  //circles on right side of middle circle
  push();
  fill(r1,g1,b1);
  translate(60,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(120,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  
  push();
  fill(r1,g1,b1);
  translate(180,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  
  push();
  fill(r1,g1,b1);
  translate(240,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(300,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(360,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
  push();
  fill(r1,g1,b1);
  translate(420,0);
  circle(mouseX, mouseY, diam);
  push();
  fill(r3,g3,b3);
  //eye 1
  translate(-5,-5);
  circle(mouseX, mouseY, diam/8);
  //eye 2
  translate (-5, -5);
  circle(mouseX, mouseY, diam/8);
  //smile
  arc(mouseX+5, mouseY+10, 20, 20, 0, HALF_PI, 25);
  pop(); 
  pop();
  
}

function mousePressed(){
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  r1 = random(0, 255);
  g1 = random(0, 255);
  b1 = random(0, 255);
  r2 = random(0, 255);
  g2 = random(0, 255);
  b2 = random(0, 255);
  r3 = random(0, 255);
  g3 = random(0, 255);
  b3 = random(0, 255);
}