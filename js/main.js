// document.addEventListener('DOMContentLoaded', () => {
//   'use strict';

//   document.addEventListener('keydown', evt => {
//     if (typeof(evt) === "undefined") { evt = window.event; }
//     console.log(evt);
//     paddle.move(evt);
//   });
// });

let paddle;
let paddleImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddleImg = document.getElementById("paddle");
  paddleImg = loadImage('../assets/paddle2.png');
  paddle = new Paddle(window.innerWidth, window.innerHeight, paddleImg);
  // frameRate(4);
}

function draw() {
  clear();
  paddle.show();
  if(keyIsDown(UP_ARROW))
    // if(keyCode == 38)
      paddle.move(38);
  if(keyIsDown(DOWN_ARROW))
      paddle.move(40);
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}