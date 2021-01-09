const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundObject, leftWall, rightWall, topWall;
/*var division01, division02,division03, division04, division05, division06;
var p1, p2;*/

var rectObject;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  groundObject = new Ground(240,795,480,10);
  leftWall = new Ground(5,400,10,800);
  rightWall  = new Ground(475,400,10,800);
  topWall = new Ground(240,5,480,10);
  
  /*division01 = new Division(10,695,10,250);
  division02 = new Division(106,695,10,250);
  division03 = new Division(202,695,10,250);
  division04 = new Division(298,695,10,250);
  division05 = new Division(394,695,10,250);
  division06 = new Division(470,695,10,250);

  p1 = new Plinko(100,100,10);
  p2 = new Plinko(200,100,10);*/ 

}

function draw() {
  background("black");  
  Engine.update(engine);
  groundObject.display();
  leftWall.display();
  rightWall.display();
  topWall.display();

  /*division01.display();
  division02.display();
  division03.display();
  division04.display();
  division05.display();
  division06.display();

  p1.display();
  p2.display(); */

  createDivisions();
  drawDivisions();

  createPlinkos();
  drawPlinkos();

  //createParticles();
  //drawParticles();

  if (frameCount % 20 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 +10),10,10));
  }

  for(var j = 0; j<particles.length; j++){
    //console.log(particles[j]);
    particles[j].display();
  }

  drawSprites();
  
}

function createDivisions(){
  for ( var k = 15; k<= 480; k=k+75){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function drawDivisions(){
  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
    //console.log(divisions[i]);
  }
}

function createPlinkos(){
  for(var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
}

function drawPlinkos(){
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
    //console.log(plinkos[i]);
  }
}



/*function createParticles(){
  if (frameCount % 60 === 1){
    particles.push(new Particle(random(width/2 - 10, width/2 +10),10,10));
    console.log("particle create start")
    for(var i = 0; i<particles.length; i++){
      console.log(particles[i].x, particles[i].y);
    }
    console.log("particle create end")
    console.log("particle length", particles.length);
  }
}

function drawParticles(){
  console.log("before draw particles");
  for(var j = 0; j<particles.length; j++){
    //console.log(particles[j]);
    particles[j].display();
    
  }
  //var ball = particles[particles.length-1];
  //ball.display();
  console.log(particles.length-1);
  for(var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  console.log("after draw particles");
}*/