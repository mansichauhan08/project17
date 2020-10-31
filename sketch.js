
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey = createSprite(50,270,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,290,1200,20);
  ground.velocityX = -2;
  ground.x = ground.width/2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("lavender");
  
  score = Math.ceil(frameCount/frameRate());
  textSize(20);
  fill("black");
  text("Survival Time : "+score, 230, 50);
  
  console.log(monkey.y)
  monkey.collide(ground);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y > 240){
    monkey.velocityY = -11;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if(frameCount % 100 === 0){
    banana = createSprite(600,Math.round(random(140,210)),10,10);
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -5;
    banana.lifetime = 120;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,260,10,10)
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 150;           
    obstacleGroup.add(obstacle);
  }
}


