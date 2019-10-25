class Game{
    constructor(numPlayers){
        this.numPlayers = numPlayers;
    }
    init(){
        paddle = new Paddle(window.innerWidth, window.innerHeight);
        ball = new Ball(window.innerWidth, window.innerHeight);
        player1 = new Player();     
    }
    play(){
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
    async reset(){ 
        console.log("Reset");   
        player1.score = 0;
        document.getElementsByClassName("score")[0].innerHTML = player1.score;
        ball.x = ball.y = -100;
        await new Promise((resolve) => {
            setTimeout(function(){
                resolve();
            } , 3000);
        });
        console.log("Done!");
        ball = new Ball(window.innerWidth, window.innerHeight);
    }
}