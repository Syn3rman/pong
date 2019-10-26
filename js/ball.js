class Ball{
  constructor(WIDTH, HEIGHT){
    this.radius = 15;
    this.x = WIDTH/2;
    this.y = Math.random()*((2*HEIGHT)/3-HEIGHT/3) + HEIGHT/3;
    this.vy = 7;
    this.vx = 7;
    this.visible = true;
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
        document.getElementsByClassName("score")[0].innerHTML = player1.score + " "+ player2.score;
      }
      else{
        game.reset();
      }
    }
    if(this.x-this.radius<=computer.x+paddle.paddleWidth){
      console.log(this.y>=paddle.y, this.y, paddle.y);
      if(this.y>=computer.y && this.y<=computer.y+paddle.paddleHieght){
        this.vx*=-1;
        console.log("Computer");
        player2.score+=1;
        console.log(player2.score);
      }
      else{
        game.reset();
      }
    }
    if(this.y+this.radius>HEIGHT || this.y-this.radius<=0){
      this.vy*=-1;
    }
  }
}