class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(displayWidth/displayWidth+300,displayHeight-130);
      player1.addImage("player1",p2image);
      player1.scale=0.5;
      player2 = createSprite(displayWidth-300,displayHeight-130);
      player2.addImage(p1i);p1i
      player2.scale=0.5;

      players=[player1,player2];

    }

play(){
  form.hide();
  background(backgroundImage);
  fill("white")
  textSize(50);
  text("Game Start",displayWidth/2-50,displayHeight/2-300);
  Player.getPlayerInfo();
  drawSprites();

  if(allPlayers !== undefined){
      var x;
      var y=displayHeight-130;
     var index =0;
     for(var plr in allPlayers){
        index+=1;

        x =  allPlayers[plr].distance;

        players[index-1].x = x;
        players[index-1].y = y;


        if(index === player.index){
                         
          fill("black");
          textSize(25);
          text(allPlayers[plr].name ,x-25,y+25);

          
      }
     
          textSize(25);
          fill("white");
          text("Player 1 :" +allPlayers.player1.score,50,50);
         text("Player 2 :" + allPlayers.player2.score, 50, 100);
     }

  }
 // console.log(allPlayers);
 if(keyIsDown(RIGHT_ARROW) && player.index !== null){
  player.distance +=10
  player.update();
}
 if(keyIsDown(LEFT_ARROW) && player.index !== null){
  player.distance -=10
  player.update();
}

if (frameCount % 20 === 0) {
  balls = createSprite(random(100, 1000), 0, 100, 100);
  balls.velocityY = 6;
  balls.addImage("ball1", ball);
  balls.scale = 0.1;
  ballsGroup.add(balls);
  
}
if (frameCount % 80 === 0) {
  stones = createSprite(random(100, 1000), 0, 100, 100);
  stones.velocityY = 6;
  stones.addImage("stone",stone);
  stones.scale = 0.1;
  stonesGroup.add(stones);
  
}

if (player.index !== null) {
  for (var i = 0; i < ballsGroup.length; i++) {
      if (ballsGroup.get(i).isTouching(players)) {
        ballsGroup.get(i).destroy();
          player.score =player.score+1;
          player.update();  
      }
      
  }
}


      if (stonesGroup.isTouching(players)) {
        stonesGroup.destroyEach();
      form.end();
      }
      
  


}

  }

