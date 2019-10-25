let paddle, ball, player1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game(1);
  console.log(game);
  game.init(); 
  // frameRate(10);
}

function draw() {
  clear();
  game.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}