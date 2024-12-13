// Note to the player: click on the game outside of this code to be able to play the game
let scene;
let player;
let playerSprite;
let potSprite;
let bedSprite;
let message = "";
let hovering = 0;
let dragging = false;
let seeds = 0;
let ROOM_PADDING = 20;
let BED_WIDTH = 180;
let BED_HEIGHT = 120;

function preload() {
  playerSprite = loadImage("assets/girl.png");
  potSprite = loadImage("assets/pot.png");
  bedSprite = loadImage("assets/bed.png");
}

function setup() {
  createCanvas(600, 600);
  scene = new one();
  player = {
    x: width / 2,
    y: height / 2,
    size: 65,
    speed: 5,
    sprite: playerSprite,
  };
}

function draw() {
  scene.display();
}

function keyPressed() {
  scene.keyPressed();
}

function mousePressed() {
   scene.mousePressed();
}

function mouseDragged() {
   scene.mouseDragged();
}

function mouseReleased() {
   scene.mouseReleased();
}

function roomandbed() {
  stroke(0);
  strokeWeight(2);
  fill(255);
  rect(20, 20, 560, 560);
  image(bedSprite, 50, 450, BED_WIDTH, BED_HEIGHT);
}

class one {
  constructor() {
    this.showInstructions = true;
    this.pots = [
      {
        x: 125,
        y: 200,
        size: 50,
        type: "sunflower",
        planted: false,
      },
      {
        x: 275,
        y: 200,
        size: 50,
        type: "daisy",
        planted: false,
      },
      {
        x: 425,
        y: 200,
        size: 50,
        type: "tulip",
        planted: false,
      },
    ];
  }

  display() {
    background("rgb(241,208,208)");
    roomandbed();
    this.drawAllPots();
    this.movePlayer();
    this.checkNearPots();

    if (this.showInstructions) {
      this.showHelp();
    }
  }

  drawAllPots() {
    for (let pot of this.pots) {
      image(potSprite, pot.x, pot.y, pot.size, pot.size);
      if (pot.planted) {
        let flowerX = pot.x + pot.size / 2;
        let flowerY = pot.y - 20;

        switch (pot.type) {
          case "sunflower":
            this.sunflower(flowerX, flowerY);
            break;
          case "daisy":
            this.daisy(flowerX, flowerY);
            break;
          case "tulip":
            this.tulip(flowerX, flowerY);
            break;
        }
      }
    }
  }

  sunflower(x, y) {
    fill(255, 140, 0);
    for (let angle = 0; angle < 360; angle += 45) {
      let petalX = x + cos(radians(angle)) * 15;
      let petalY = y + sin(radians(angle)) * 15;
      circle(petalX, petalY, 12);
    }
    fill(255, 255, 0);
    circle(x, y, 20);
  }

  daisy(x, y) {
    fill(255);
    for (let angle = 0; angle < 360; angle += 45) {
      let petalX = x + cos(radians(angle)) * 12;
      let petalY = y + sin(radians(angle)) * 12;
      circle(petalX, petalY, 10);
    }
    fill(255, 255, 0);
    circle(x, y, 15);
  }

  tulip(x, y) {
    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    push();
    translate(x, y);
    ellipse(0, 0, 15, 30);
    push();
    rotate(radians(-20));
    ellipse(-5, 0, 15, 30);
    pop();
    push();
    rotate(radians(20));
    ellipse(5, 0, 15, 30);
    pop();
    pop();
  }

  movePlayer() {
    image(player.sprite, player.x, player.y, player.size, player.size);

    if (keyIsDown(87)) player.y -= player.speed;
    if (keyIsDown(83)) player.y += player.speed; 
    if (keyIsDown(65)) player.x -= player.speed; 
    if (keyIsDown(68)) player.x += player.speed;

    player.x = constrain(player.x, 0, width - player.size);
    player.y = constrain(player.y, 0, height - player.size);
  }

  checkNearPots() {
    for (let i = 0; i < this.pots.length; i++) {
      let pot = this.pots[i];
      if (!pot.planted) {
        let distance = dist(
          player.x,
          player.y,
          pot.x + pot.size / 2,
          pot.y + pot.size / 2
        );

        if (distance < 50) {
          hovering++;
          if (hovering > 120) {
            scene = new two(i, pot.type);
            hovering = 0;
            break;
          }
        }
      }
    }
  }

  showHelp() {
    stroke(0);
    fill(255);
    rect(300, 500, 280, 80);
    noStroke();
    fill("rgb(145,85,85)");
    textAlign(LEFT);
    textSize(16);
    text("Go plant your flower seeds!", 320, 530);
    text("Use the WASD keys to move and", 320, 550);
    text("stop on a pot to interact.", 320, 570);
  }

  keyPressed() {
    this.showInstructions = false;
  }
}

class two {
  constructor(potIndex, flowerType) {
    this.potIndex = potIndex;
    this.flowerType = flowerType;

    this.potX = 300;
    this.potY = 300;
    this.potSize = 150;
    this.rimSize = 30;
    this.soilSize = this.potSize - this.rimSize;

    this.seedX = 300;
    this.seedY = 100;

    this.flowers = [];
    this.needToPlant = 5;
    this.currentPots = scene.pots;
  }

  display() {
    background("rgb(241,208,208)");
    this.drawPot();
    this.drawFlowers();
    this.drawSeed();
    this.drawInstructions();
  }

  drawPot() {
    stroke(0);
    strokeWeight(1);
    fill(139, 69, 19);
    circle(this.potX, this.potY, this.potSize * 2);
    fill(101, 67, 33);
    circle(this.potX, this.potY, this.soilSize * 2);
  }

  drawFlowers() {
    for (let flower of this.flowers) {
      push();
      translate(flower.x, flower.y);

      switch (this.flowerType) {
        case "sunflower":
          this.sunflower();
          break;
        case "daisy":
          this.daisy();
          break;
        case "tulip":
          this.tulip();
          break;
      }
      pop();
    }
  }

  sunflower() {
    stroke(0);
    strokeWeight(1);
    fill(255, 140, 0);
    for (let angle = 0; angle < 360; angle += 45) {
      let x = cos(radians(angle)) * 20;
      let y = sin(radians(angle)) * 20;
      circle(x, y, 20);
    }
    fill(255, 255, 0);
    circle(0, 0, 35);
  }

  daisy() {
    stroke(0);
    strokeWeight(1);
    fill(255);
    for (let angle = 0; angle < 360; angle += 45) {
      let x = cos(radians(angle)) * 18;
      let y = sin(radians(angle)) * 18;
      circle(x, y, 18);
    }
    fill(255, 255, 0);
    circle(0, 0, 25);
  }

  tulip() {
    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    ellipse(0, 0, 15, 30);
    push();
    rotate(radians(-20));
    ellipse(-5, 0, 15, 30);
    pop();
    push();
    rotate(radians(20));
    ellipse(5, 0, 15, 30);
    pop();
  }

  drawSeed() {
    stroke(0);
    strokeWeight(1);
    fill(139, 69, 19);

    if (dragging) {
      circle(mouseX, mouseY, 30);
    } else {
      circle(this.seedX, this.seedY, 30);
    }
  }

  drawInstructions() {
    stroke(0);
    fill(255);
    rect(160, 450, 280, 80);
    noStroke();
    fill(0);
    textAlign(LEFT);
    textSize(16);
    text(`Click & drag to plant ${this.flowerType} seeds!`, 167, 480);
    text(`Seeds planted: ${seeds}/${this.needToPlant}`, 167, 505);
  }

  mousePressed() {
    let touching = dist(mouseX, mouseY, this.seedX, this.seedY) < 30;
    if (touching) {
      dragging = true;
    }
  }

  mouseDragged() {
    if (dragging) {
      this.seedX = mouseX;
      this.seedY = mouseY;
    }
  }

  mouseReleased() {
    if (dragging) {
      let distanceToCenter = dist(mouseX, mouseY, this.potX, this.potY);
      if (distanceToCenter < this.soilSize) {
        this.plantSeed();
      } else {
        this.resetSeed();
      }
      dragging = false;
    }
  }

  plantSeed() {
    this.flowers.push({
      x: mouseX,
      y: mouseY,
    });
    seeds++;
    if (seeds >= this.needToPlant) {
      this.finishPlanting();
    } else {
      this.resetSeed();
    }
  }
  resetSeed() {
    this.seedX = 300;
    this.seedY = 100;
  }

  finishPlanting() {
    let newScene = new one();
    newScene.pots = [...this.currentPots];
    newScene.pots[this.potIndex].planted = true;

    message = "";
    seeds = 0;
    
    if (newScene.pots.every((pot) => pot.planted)) {
      setTimeout(() => {
        message = "You're so sleepy...";
        setTimeout(() => {
          scene = new three();
        }, 1000);
      }, 1000);
    } else {
      scene = newScene;
    }
  }
}

class three {
  constructor() {
    if (scene && scene.pots) {
      this.pots = JSON.parse(JSON.stringify(scene.pots));
      for (let pot of this.pots) {
        pot.y = 200;
      }
    } else {
      this.pots = [
        {
          x: 125,
          y: 200,
          size: 50,
          type: "sunflower",
          planted: true,
        },
        {
          x: 275,
          y: 200,
          size: 50,
          type: "daisy",
          planted: true,
        },
        {
          x: 425,
          y: 200,
          size: 50,
          type: "tulip",
          planted: true,
        },
      ];
    }
    this.showingSleepyScreen = false;
  }

  display() {
    background("rgb(241,208,208)");
    roomandbed();
    this.drawPots();
    this.movePlayer();
    this.checkIfNearBed();

    this.drawMessageBox();
  }

  drawMessageBox() {
    stroke(0);
    fill(255);
    rect(width - 300, height - 100, 280, 80);
    noStroke();
    fill("rgb(145,85,85)");
    textAlign(LEFT);
    textSize(16);
    text("Go to bed where the cover's folded", width - 280, height - 70);
    text("by the wall...", width - 280, height - 50)
  }

  drawPots() {
    for (let pot of this.pots) {
      image(potSprite, pot.x, pot.y, pot.size, pot.size);
      let flowerX = pot.x + pot.size / 2;
      let flowerY = pot.y - 20;

      switch (pot.type) {
        case "sunflower":
          this.sunflower(flowerX, flowerY);
          break;
        case "daisy":
          this.daisy(flowerX, flowerY);
          break;
        case "tulip":
          this.tulip(flowerX, flowerY);
          break;
      }
    }
  }

  sunflower(x, y) {
    fill(255, 140, 0);
    stroke(0);
    strokeWeight(1);
    for (let angle = 0; angle < 360; angle += 45) {
      let petalX = x + cos(radians(angle)) * 15;
      let petalY = y + sin(radians(angle)) * 15;
      circle(petalX, petalY, 12);
    }
    fill(255, 255, 0);
    circle(x, y, 20);
  }

  daisy(x, y) {
    fill(255);
    stroke(0);
    strokeWeight(1);
    for (let angle = 0; angle < 360; angle += 45) {
      let petalX = x + cos(radians(angle)) * 12;
      let petalY = y + sin(radians(angle)) * 12;
      circle(petalX, petalY, 10);
    }
    fill(255, 255, 0);
    circle(x, y, 15);
  }

  tulip(x, y) {
    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    push();
    translate(x, y);
    ellipse(0, 0, 15, 30);
    push();
    rotate(radians(-20));
    ellipse(-5, 0, 15, 30);
    pop();
    push();
    rotate(radians(20));
    ellipse(5, 0, 15, 30);
    pop();
    pop();
  }

  movePlayer() {
    image(player.sprite, player.x, player.y, player.size, player.size);

    if (keyIsDown(87)) player.y -= player.speed; 
    if (keyIsDown(83)) player.y += player.speed; 
    if (keyIsDown(65)) player.x -= player.speed; 
    if (keyIsDown(68)) player.x += player.speed; 

    player.x = constrain(player.x, 0, width - player.size);
    player.y = constrain(player.y, 0, height - player.size);
  }

  checkIfNearBed() {
    let bedX = 50 + BED_WIDTH / 2;
    let bedY = 450 + BED_HEIGHT / 2;
    if (dist(player.x, player.y, bedX, bedY) < 50) {
      hovering++;
      if (hovering > 120) {
        background(0);
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("You're so sleepy...", 300, 300);
        setTimeout(() => {
          scene = new one();
          player.x = 300;
          player.y = 300;
          hovering = 0;
          message = "";
        }, 2000);
      }
    }
  }
}
