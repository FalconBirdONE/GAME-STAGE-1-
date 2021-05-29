const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground; 

function preload() {

}

function setup() {
createCanvas (displayWidth-90, displayHeight-150);
engine = Engine.create();
    world = engine.world;
    
ground = createSprite(displayWidth/2, displayHeight-180,displayWidth-10,20 );
ground.velocityX = -2;

var options = {
    restitution : 0.8
}
player = Bodies.rectangle(displayWidth/7,displayHeight-300, 40, 20, options);

World.add(world, player);
}

function draw() {
background ("white"); 
Engine.update(engine);
 console.log(ground.x); 
 if(ground.x<560){ground.x = width/2; }
 Matter.Body.setStatic(ground.body,true);
 rectMode(CENTER);
rect(player.position.x, player.position.y, 40, 50);

drawSprites();

}
