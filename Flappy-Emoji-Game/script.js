let smileX;
let smileY;
let smileVelocity;
let smileGravity;
let smileUp;
let pipeTop;
let pipeBottom;
let pipeX;
let pipeY;
let pipeWidth;
let pipeSpeed;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  smileX = 30;
  smileY = height / 2;
  smileGravity = 0.5;
  smileVelocity = 0;
  smileUp = -15;
  pipeTop = random(height / 2);
  pipeBottom = random(height / 2);
  pipeX = width;
  pipeWidth = 20;
  pipeSpeed = 5;
}

function draw() {
  background(197, 35, 95);
  text("Click the mouse to begin!", 250, 10, 200, 400);
  fill("yellow");
  ellipse(smileX, smileY, 40);
  fill(234, 78, 95);
  circle(20, smileY, 5);
  circle(40, smileY, 5);
  fill(344, 78, 95);
  curve(10, smileY, 20, smileY + 10, 40, smileY + 10, 50, smileY);

  smileY += smileVelocity;
  smileVelocity += smileGravity;
  if (smileY > height) {
    smileY = height;
  }
  if (smileY < 0) {
    smileY = 0;
  }
  smileVelocity *= 1;

  fill(0);

  rect(pipeX, 0, pipeWidth, pipeTop);
  rect(pipeX, height - pipeBottom, pipeWidth, pipeBottom);
  pipeX -= pipeSpeed;

  while (frameCount % 50 == 0) {
    rect(pipeX, 0, pipeWidth, pipeTop);
    rect(pipeX, height - pipeBottom, pipeWidth, pipeBottom);
  }
}
function mousePressed() {
  smileVelocity += smileUp;
}
