class Ball{
  constructor(WIDTH, HEIGHT, ballImg){
    this.radius = 25;
    this.x = Math.floor(Math.random()*WIDTH);
    this.y = Math.floor(Math.random()*HEIGHT);
    this.ballImg = ballImg; 
    this.vy = 3;
    this.vx = 3;
  }
  show(){
    image(this.ballImg,this.x,this.y);
  }
  move(WIDTH, HEIGHT){
    // console.log(this.x, this.vx);
    this.x += this.vx;
    this.y += this.vy;
    if(this.x+2*this.radius+10>=WIDTH || this.x+this.radius+10<=0){
      this.vx*=-1;
    }
    if(this.y+2*this.radius+10>HEIGHT || this.y+this.radius+10<=0){
      this.vy*=-1;
    }
  }
}