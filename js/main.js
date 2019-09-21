let paddle;
let paddleImg;
let ball, ballImg;

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
  console.log(isKeyPressed, keyIsDown(UP_ARROW));
  paddle.show();
  if(keyIsDown(UP_ARROW)){
    paddle.move(38);
  }
  if(keyIsDown(DOWN_ARROW)){
    paddle.move(40);
  }
  ball.show();
  ball.move(window.innerWidth, window.innerHeight);
}

// function keyPressed(){
//   if(keyCode === UP_ARROW){
//     console.log("UP");
//     paddle.move(38);
//   }
//   if(keyCode === DOWN_ARROW){
//     paddle.move(40);
//   }
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}