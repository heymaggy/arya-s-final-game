var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var balls
var form, player, game;
var backgroundImage;
var players,player1,player2;
var stones,stonesGroup;
function preload(){
   backgroundImage=loadImage("Background.jpg");
   p1i=loadImage("p1.png");
   p2image = loadImage("p2.png")
   stone = loadImage("stone.png");
   ball = loadImage("ball.png");
   Goimage= loadImage("GO.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  ballsGroup = new Group();
  stonesGroup = new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    clear();
    image(Goimage,displayWidth/displayWidth,displayHeight/displayHeight,displayWidth,displayHeight)
    textSize(40);
          fill("BLACK");
          text("Player 1 :" +allPlayers.player1.score,displayWidth/2-50,100);
         text("Player 2 :" + allPlayers.player2.score, displayWidth/2-50, 150);
    

    game.end();
  }
}
