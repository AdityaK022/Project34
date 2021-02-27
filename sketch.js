const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, superhero, monster, attach, ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14
function preload() {
//preload the images here
backgroundImage = loadImage("image/GamingBackground.png");
}

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  // create sprites here
ground = new Ground(250,380,600,5);
superhero = new Superhero(400,3,100,100);
attach = new Throw(superhero.body, {x:100, y:300});
box1 = new Block(280,350,30,40);
box2 = new Block(310,350,30,40);
box3 = new Block(340,350,30,40);
box4 = new Block(370,350,30,40);
box5 = new Block(400,350,30,40);
box6 = new Block(430,350,30,40);
box7 = new Block(460,350,30,40);
box8 = new Block(490,350,30,40);
box9 = new Block(310,315,30,40);
box10 = new Block(340,315,30,40);
box11 = new Block(370,315,30,40);
box12 = new Block(400,315,30,40);
box13 = new Block(430,315,30,40);
box14 = new Block(460,315,30,40);
monster = new Monster(380,230,100,100);

Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  ground.display();
  superhero.display();
  stroke(15);
  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  monster.display();
}

function mouseDragged(){

Matter.Body.setPosition(superhero.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

attach.fly();

}
