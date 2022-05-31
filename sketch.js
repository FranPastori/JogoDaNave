let imgFundo;
let imgNave;
let imgMeteoro;
let xMeteoro = 0;
let yMeteoro = 0;
let xNave = 300;
let yNave = 300;

function preload() {
  imgFundo = loadImage("Espaco.jpeg");
  imgNave = loadImage("Nave.png");
  imgMeteoro = loadImage("Meteoro.png");
}
function setup() {
  createCanvas(600, 400);
  frameRate(5);
}

function draw() {
  background(imgFundo);
  image(imgNave, xNave, yNave, 50, 100);
  image(imgMeteoro, xMeteoro, yMeteoro, 50, 50);
  if (yMeteoro <= 0) {
    xMeteoro = random(0, 600);
  }

  if (yMeteoro + 50 < 400) {
    yMeteoro += 10;
  } else {
    yMeteoro = 0;
  }
  if (keyIsDown(LEFT_ARROW) && xNave > 0) {
    xNave -= 50;
  }

  if (keyIsDown(RIGHT_ARROW) && xNave < 550) {
    xNave += 50;
  }
}
