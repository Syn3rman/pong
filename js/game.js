class Game{
    constructor(numPlayers){
        this.numPlayers = numPlayers;
    }
    init(){
        // The paddle should probably go in the initialization of the player but meh I'm not doing it
        paddle = new Paddle(window.innerWidth-50, window.innerHeight/2);
        computer = new Paddle(50, window.innerHeight/2, true);
        ball = new Ball(window.innerWidth, window.innerHeight);
        console.log(computer.vy);  
        player1 = new Player();     
        player2 = new Player();
    }
    play(){
        paddle.show();
        computer.show();
        computer.play();
        if(keyIsDown(UP_ARROW)){
            paddle.move(38);
        }
        if(keyIsDown(DOWN_ARROW)){
            paddle.move(40);
        }
      if(ball.visible){
        ball.show();
        ball.move(window.innerWidth, window.innerHeight);
      }
    }
    async reset(){ 
        console.log("Reset");   
        let players = [player1, player2];
        players.forEach(player=>player.score=0);
        document.getElementsByClassName("score")[0].innerHTML = player1.score+" "+ player2.score;
        ball.visible = false;
        await new Promise((resolve) => {
            setTimeout(function(){
                resolve();
            } , 3000);
        });
        console.log("Done!");
        ball = new Ball(window.innerWidth, window.innerHeight);
    }
}