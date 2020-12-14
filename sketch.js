
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bottomWall, leftWall, rightWall;
var ground1;
var divisionHeight = 300;

//creating arrays
var particles = [];
var plinkos = [];
var divisions = [];
    

function setup() {
    var canvas = createCanvas(510, 800);
    engine = Engine.create();
    world = engine.world;

    //creating borders and ground
    bottomWall = new Ground(width/2, height-5, width, 10);
    leftWall = new Ground(width-width+5, height/2, 10, height);
    rightWall = new Ground(width-5, height/2, 10, height);

    ground1 = new Ground(width/2, height-15, width, 15);

    //creating divisions
    for (var i = 15; i <= width; i = i + 80){
      divisions.push(new Division(i, height-divisionHeight/2-15, 10, divisionHeight));
    }
  
    //creating plinkos
    for (var j = 50; j <= width-50; j=j+50){
      plinkos.push(new Plinko(j, 75));
    }
    for (var j = 25; j <= width; j=j+50){
      plinkos.push(new Plinko(j, 175));
    }
    for (var j = 50; j <= width-50; j=j+50){
      plinkos.push(new Plinko(j, 275));
    }
    for (var j = 25; j <= width; j=j+50){
      plinkos.push(new Plinko(j, 375));
    }
    
  }


function draw(){
    background(0);
    Engine.update(engine);

    //spawning particles 
    if(frameCount % 60 === 0){
      particles.push(new Particle(random(15,width-15), 10, 10));
    }

    //displaying groud and borders
    rectMode(CENTER);
    ground1.display("white");

    bottomWall.display("brown");
    leftWall.display("brown");
    rightWall.display("brown");

   //displaying visions, plinkos, and particles
    for (var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }

    for (var j = 0; j < plinkos.length; j++){
      plinkos[j].display();
    }
    
    for(var p = 0; p<particles.length; p++){
      particles[p].display();
    }
  
    drawSprites();   
}


