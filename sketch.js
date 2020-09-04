const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var polygon, slingshot,polygon_img;
var score = 0;

function preload(){
  polygon_img = loadImage("image/polygon.png");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
    world = engine.world;

  stand1 = new Ground(1000,400,230,20);
  stand2 = new Ground(700,500,230,20);

  var options={
    density: 8
  }

  //level 1 stand 2
  box1 = new Box(623,470,45,40);
  box2 = new Box(672,470,45,40);
  box3 = new Box(725,470,45,40);
  box4 = new Box(776,470,45,40);

  //level 2 stand 2
  box5 = new Box2(650,420,45,40); 
  box6 = new Box2(700,420,45,40);
  box7 = new Box2(750,420,45,40);

  //level 3 stand 2
  box8 = new Box3(675,380,45,40);
  box9 = new Box3(725,380,45,40);

  //level 4 stand 2
  box10 = new Box4(700,350,45,40);

  polygon = Bodies.circle(100,350,20,options);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:350});

  //level 1 stand 1
  box11 = new Box(923,370,45,40);
  box12 = new Box(972,370,45,40);
  box13 = new Box(1025,370,45,40);
  box14 = new Box(1076,370,45,40);

  //level 2 stand 1
  box15 = new Box2(950,320,45,40);
  box16 = new Box2(1000,320,45,40);
  box17 = new Box2(1050,320,45,40);

  //level 3 stand 1
  box18 = new Box3(975,280,45,40);
  box19 = new Box3(1025,280,45,40);

  //level 4 stand 1
  box20 = new Box4(1000,250,45,40);
}

function draw() {
  background(0);  
  Engine.update(engine);

  stand1.display();
  stand2.display();

  //level 1 stand 2
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  //level 2 stand 2
  box5.display();
  box6.display();
  box7.display();

  //level 3 stand 2
  box8.display();
  box9.display();

  //level 4 stand 2
  box10.display();

  //ImageMode(CENTER);
  image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);

  //level 1 stand 1
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  //level 2 stand 1
  box15.display();
  box16.display();
  box17.display();

  //level 3 stand 1
  box18.display();
  box19.display();

  //level 4 stand 1
  box20.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();

  fill("white");
  textSize(30);
  text("Score: "+score,50,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}