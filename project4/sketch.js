function setup() {
  createCanvas(400, 600);
  
  //User-defined Functions
  //Arguments and Parameters

}

function draw() {
  background(255);
  
  ryan_head();
  jovana_torso();
  shawki_legs();
  
  coord();
}

function coord(){
  push();
  noStroke();
  fill('black');
  text("(" + mouseX + ", " + mouseY +")", mouseX, mouseY);
  pop();
}

function ryan_head(){
    //ryan's head
  circle(200, 100, 70);
  push();
  fill('black');
  ellipse(190, 95, 15, 30);
  ellipse(215, 95, 15, 30);
  ellipse(212, 120, 8, 13);
  pop();
  line(191, 50, 200, 65); 
  line(182, 52, 190, 65); 
  triangle(180, 28, 172, 53, 200, 49);
  noFill();
  ellipse(212, 120, 13, 18);
  line(202,135, 202, 145);
}

function jovana_torso(){
  //jovana's torso
  push();
  fill('rgb(121,216,189)');
  quad(148, 145, 250, 145, 253, 205, 148, 232, 148, 152);
  pop();
  push();
  fill('rgb(121,216,189)');
  quad(148, 232, 145, 303, 254, 299, 253, 205);
  pop();
  push();
  fill('rgb(98,187,94)');
  quad(148, 232, 145, 303, 193, 301,185, 223);
  pop();
  //textured bottom
  line(161, 253,176, 253);
  line(176, 253, 176, 301);
  line(161, 253, 161, 301);
  line(204, 301, 204, 268);
  line(204, 268, 220, 270);
  line(220, 271, 223, 300);
  line(235, 300, 230, 240);
  line(230, 240, 240, 240);
  line(240, 240, 244, 299);
  //arms
  push();
  fill('rgb(98,187,94)');
  //left
  quad(148, 145, 82, 209, 121, 205, 148, 186);
  quad(82, 209, 148, 251,148, 228, 121, 205);
  //right
  quad(251, 146, 289, 197, 270, 197, 252, 176);
  quad(289, 197, 254, 238, 254, 219, 270, 197);
  pop();
}

function shawki_legs(){
  push();
  noStroke();
  fill('blue');
  quad(145, 303, 208, 301, 178, 327, 115, 328);
  quad(115, 328, 179, 326, 148, 387, 111,388 );
  ellipse(115, 385, 70, 35);
  quad(254, 299, 206, 300, 226, 331, 293, 336); 
  quad(226, 331, 293, 335, 306, 385, 257, 381);
  ellipse(292, 385, 70, 35);
  pop();
}