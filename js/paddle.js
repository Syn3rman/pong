class Paddle{
  constructor(x, y, isComputer){
    this.paddleHieght = 162;
    this.paddleWidth = 34;
    this.x = x;
    this.y = y;
    if(isComputer){
      this.vy = 100;
    }
    else{
      this.vy = 15;
    }
  }

  show(){
    fill(40);
    rect(this.x,this.y,this.paddleWidth, this.paddleHieght);
    fill(255);
  }

  move(keyCode){
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

  play(){
    this.y = ball.y-computer.paddleHieght/2;
    if(this.y+this.paddleHieght>=window.innerHeight){
      this.y = window.innerHeight - this.paddleHieght;  
    }
    if(this.y <= 0){
      this.y = 0;
    }
  }
}
