var dryground;
var Greencharacter;
var squareCharacter;
var triangleCharacter;
var circleCharacter;
var gameOverImg;
var PLAY= 0 
var END= 1
var gameState = PLAY;




function preload(){
 dryground = loadImage("30666.jpg");
 Greencharacter = loadImage("MyGreenCharacter.png");
 squareCharacter = loadImage("MySquareCharacter.png");
 triangleCharacter = loadImage("MyTriangleCharacter.png");
 circleCharacter = loadImage("MyRedDoll.png");
  gameOverImg = loadImage("MyGameOverV.png")
}

function setup() {
    createCanvas(600 , 600);

    dryground = createSprite(600,600,600,500);

    Greencharacter = createSprite(50,160,20,50);
    Greencharacter.scale = 0.5;

    squareCharacter = createSprite(50,160,20,50);
    squareCharacter.scale = 0.4;

    triangleCharacter = createSprite(50,160,20,50);
    triangleCharacter.scale = 0.4;
    
    circleCharacter = createSprite(50,160,20,50);
    circleCharacter.scale = 0.4;

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver. visible = false

    squareCharacter = new Group();
    triangleCharacter = new Group();
    circleCharacter = new Group();
 
}

function draw() {
  drawSprites();
 
if(gameState===PLAY){

  Greencharacter.y = World.mouseY;

  edges = createEdgeSprites();
  Greencharacter.collide(edges);

  if(dryground.x<0){
    dryground.x = width/2;
  }

  var select_oppPlayer = Math.round(random(1,3));

  if(World.framecount % 150 == 0) {
    if(select_oppPlayer == 1) {
      squareCharacter();
    } else if(select_oppPlayer == 2){
      triangleCharacter();
    } else {
      circleCharacter();
    }
  }
  
  if(squareCharacter.isTouching(Greencharacter)){
    gameState = END;
  }

  if(triangleCharacter.isTouching(Greencharacter)){
    gameState = END;
  }

  if(circleCharacter.isTouching(Greencharacter)){
    gameState = END;
  } else if(gameState === END){
    gameOver.visible = true;
  }
  
   textSize(20);
   fill(225)
   text("Press Up Arrow To Restart The Game!" , 500,300);

   dryground.velocityX = 0;
   Greencharacter.velocityY = 0;
   
   squareCharacter.setVelocityXEach(0);
   squareCharacter.setLifetimeEach(-1);

   triangleCharacter.setVelocityXEach(0);
   triangleCharacter.setLifetimeEach(-1);

   circleCharacter.setVelocityXEach(0);
   circleCharacter.setLifetimeEach(-1);

   if(keyDown("UP_ARROW")) {
     reset();
   }
  
}
}

  function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    
    squareCharacter.destroyEach();
    triangleCharacter.destroyEach();
    circleCharacter.destroyEach();
  }















