class Ball{
  constructor(WIDTH, HEIGHT){
    this.radius = 15;
    this.x = Math.floor(Math.random()*WIDTH);
    this.y = Math.floor(Math.random()*HEIGHT);
    this.vy = 7;
    this.vx = 7;
  }
  show(){
    fill(0);
    ellipse(this.x,this.y,2*this.radius);
  }
  move(WIDTH, HEIGHT){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x+this.radius>=paddle.x){
      if(this.y>=paddle.y && this.y<=paddle.y+paddle.paddleHieght){
        this.vx*=-1;
        console.log("Hello");
        player1.score+=1;
        document.getElementsByClassName("score")[0].innerHTML = player1.score;
      }
      else{
        game.reset();
      }
    }
    if(this.x-this.radius<=0){
      this.vx*=-1;
    }
    if(this.y+this.radius>HEIGHT || this.y-this.radius<=0){
      this.vy*=-1;
    }
  }
}