var fieldImg,field;
var blueCarImg,blueCar;
var redCarImg,redCar;
var ballImg,ball;
var redGoal;
var blueGoal;

function preload() {
fieldImg = loadImage("images/background.jpg");
blueCarImg = loadImage("images/blue team car.png");
redCarImg = loadImage("images/CutPastePhotos-1588684250190.png");
ballImg = loadImage("images/football.png");
}
function setup() {
  createCanvas(1200,600);
  redCar = createSprite(200,300,60,60);
  blueCar = createSprite(1000, 300, 60, 60);
  ball = createSprite(600,300,50,50);
  redCar.addImage("redCar",redCarImg);
  blueCar.addImage("blueCar",blueCarImg);
  ball.addImage("ball",ballImg);
  redCar.scale = 0.15;
  blueCar.scale = 0.085;
  ball.scale = 0.5;
}

function draw() {
  background(fieldImg);

  if (keyWentDown("up")){
  blueCar.velocityX = 0;
  blueCar.velocityY = -3;
  }
  if (keyWentUp("up")){
    blueCar.velocityX = 0;
    blueCar.velocityY = 0;
    }
  if (keyWentDown("down")){
  blueCar.velocityX = 0;
  blueCar.velocityY = 3;  
  }
  if (keyWentUp("down")){
    blueCar.velocityX = 0;
    blueCar.velocityY = 0;  
    }
  if (keyWentDown("right")){
  blueCar.velocityX = 3;
  blueCar.velocityY = 0;  
  }
  if (keyWentUp("right")){
    blueCar.velocityX = 0;
    blueCar.velocityY = 0;  
    }
  if (keyWentDown("left")){
  blueCar.velocityX = -3;
  blueCar.velocityY = 0;
  }
  if (keyWentUp("left")){
    blueCar.velocityX = 0;
    blueCar.velocityY = 0;
    }
  if (keyWentDown("w")){
  redCar.velocityX = 0;
  redCar.velocityY = -3;
  }
  if (keyWentUp("w")){
    redCar.velocityX = 0;
    redCar.velocityY = 0;
    }
  if (keyWentDown("s")){
  redCar.velocityX = 0;
  redCar.velocityY = 3;  
  }
  if (keyWentUp("s")){
    redCar.velocityX = 0;
    redCar.velocityY = 0;  
    }
  if (keyWentDown("d")){
  redCar.velocityX = 3;
  redCar.velocityY = 0;
  }
  if (keyWentUp("d")){
    redCar.velocityX = 0;
    redCar.velocityY = 0;
    }
  if (keyWentDown("a")){
  redCar.velocityX = -3;
  redCar.velocityY = 0;
  }
  if (keyWentUp("a")){
    redCar.velocityX = 0;
    redCar.velocityY = 0;
    }
  ball.bounceOff(redCar);
  blueCar.bounceOff(redCar);
  ball.bounceOff(blueCar);
  drawSprites();
}