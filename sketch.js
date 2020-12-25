
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}



function setup() {
 createCanvas(400,400)
  monkey = createSprite(50,350,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1
  ground = createSprite(599,399,6000,20);

  ground.x = ground.width /2;
        
}


function draw() {
  background("lightBlue")

 
  // obstacle.velocityX = -(6+score/100)
  
    if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites()

}
function spawnObstacles() {
  if (frameCount % 160 === 0) {
     cloud = createSprite(600,373,40,10);
   
    cloud.addImage(obstaceImage);
    cloud.scale = 0.1 ;
    cloud.velocityX = -3;
  }}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,250,40,10);
    cloud.x = Math.round(random(390));
    cloud.addImage(bananaImage );
    cloud.scale = 0.1;
    cloud.velocityX = -3;
  }}




