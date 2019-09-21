class Paddle{
  constructor(WIDTH, HEIGHT, paddleImg){
    this.paddleHieght = 150;
    this.paddleWidth = 20;
    this.x = WIDTH  - this.paddleWidth/2 - 50;
    this.y = HEIGHT/2 - this.paddleHieght/2;
    this.paddleImg = paddleImg; 
    this.vy = 15;
  }

  show(){
    image(this.paddleImg,this.x,this.y);
  }

  move(keyCode){
    console.log("Hiii");
    var paddleBottom = this.y + this.paddleHieght;
    if(paddleBottom >= window.innerHeight){
      this.y = window.innerHeight - this.paddleHieght;
    }
    if(this.y <= 0){
      this.y = 0;
    }
    // move up
    if(keyCode == 38){
      this.y -= this.vy;
    }
    // move down
    else if(keyCode == 40){
      this.y += this.vy;
    }
  }
}