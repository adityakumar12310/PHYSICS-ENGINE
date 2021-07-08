
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var body1
var body2
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

body1=Bodies.circle(100,100,30)
World.add(world,body1)

body2=Bodies.rectangle(300,300,60,59)
World.add(world,body2)
  
body3=Bodies.circle(250,250,30)
World.add(world,body3)

body4=Bodies.rectangle(350,350,70,70)
World.add(world,body4)
}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("purple")
    circle(body1.position.x,body1.position.y,30);
    fill("yellow")
    rect(body2.position.x,body1.position.y,60,59);
    fill("red")
    circle(body3.position.x,body3.position.y,30);
   
    rect(body4.position.x,body4.position.y,70,70);
}
