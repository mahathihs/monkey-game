
var monkey , monkey_running , ground;
var banana ,bananaImage, obstacle, obstacleImage , groundImage;
var BananaGroup, obstacleGroup;
var score;
var gameState = "play";

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  groundImage = loadImage("grass.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,390);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,380,1200,55);
  ground.addImage(groundImage);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  BananaGroup = new Group();
}


function draw() {
  background("pink");
  
  if(gameState === "play"){
    
    if(ground.x < 0){
    ground.x = ground.width/2;
  }
     if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -10;
  }
    monkey.velocityY = monkey.velocityY+0.8; 
  monkey.collide(ground);
    
  var survivalTime = 0;
  stroke("white");
  textSize = 20;
  fill("white");
  text("Score:"+ score , 500 , 50);
  
  stroke("balck");
  textSize = 20;
  fill("black");
  Survivaltime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+ survivalTime , 100,50);
    
  if(BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
  }
  
 if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
 }
  
 }
  
  if(gameState === end){
    stroke("yellow");
    fill("pink");
    text("GAME OVER",200,230);
 }
  Food();
  Obstacles();
  drawSprites();
}

function Food () {
  
  if(frameCount % 120 === 0) {
    banana = createSprite(300,195,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y  =Math.round(random(120,200));
    banana.velocityX = -1;
    banana.lifetime = 200;
    BananaGroup.add(banana);
  }
}


function Obstacles () {
  
  if(frameCount % 300 === 0){
    var obstacles = createSprite(300,312,10,10);
    obstacles.velocityX = -1;
    obstacles.lifetime = 300;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
  }
}

