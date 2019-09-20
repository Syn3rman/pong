let paddle, paddleImg, ball, ballImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddleImg = loadImage('../assets/paddle2.png');
  paddle = new Paddle(window.innerWidth, window.innerHeight, paddleImg);
  ballImg = loadImage('../assets/ball.png');
  ball = new Ball(window.innerWidth, window.innerHeight, ballImg);
  // frameRate(4);
}

function draw() {
  clear();
  paddle.show();
  ball.move(window.innerWidth, window.innerHeight);
  ball.show();
  if(keyIsDown(UP_ARROW))
    paddle.move(38);
  if(keyIsDown(DOWN_ARROW))
      paddle.move(40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}