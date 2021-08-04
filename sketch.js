const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myEngine,myWorld,ground,ball;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var options={
    isStatic:true,
  }
  fill("brown");
  ground=Bodies.rectangle(200,350,400,20,options);

  World.add(myWorld,ground);
  var ballOptions={
    restitutions:1.0,
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(myWorld,ball);
}
function draw() {
  Engine.update(myEngine);
  background("black");  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}