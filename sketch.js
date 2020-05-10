const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint =Matter.Constraint
var world,engine;
var box1,box2,box3,box4,box5,bird,backgroundimg;
var log1, enemy,bat;

function preload(){
   getBackgroundImg();
 }

 function setup(){
   var canvas = createCanvas(1600,646);
   engine=Engine.create();
   world=engine.world;

   box1 = new Box(740,590,70,70);
   box2 = new Box(720,590,70,70);
   box3 = new Box(827,520,70,70);
   box4 = new Box(823,540,70,70);
   box5=new Box(810,590,70,70);
  box6=new Box(1040,220,65,65);
  box7=new Box(1050,220,65,65);
    log1=new Log(1060,240,250,20);
    box8=new Box(1070,220,65,65);
box11=new Box(1055,180,65,65);
    enemy=new Enemy(810,380,50,60);
    enemy1=new Enemy(700,520,50,60);
    enemy2=new Enemy(995,140,50,60);
    enemy3=new Enemy(1050,75,50,60);
    ground = new Ground(600,630,1600,20);
bird = new Bird(170,450,40,40);

slingshot = new SlingShot(bird.body,{x:160, y:450});
 }

 function draw(){
    if(backgroundimg){
      background(backgroundimg);
   }
    Engine.update(engine);
  
   box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    enemy2.display();
    box11.display();
    box8.display();
    log1.display();
    ground.display(); 
    slingshot.display();
    bird.display();
    enemy.display();
    enemy1.display();
   enemy3.display();
   
 } 
 function mouseDragged(){
 Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});  
}
function mouseReleased(){
  slingshot.fly();
}


  function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body,{x:170,y:450});
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
      var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>6 && hour<15){
        bg = "sprites/school.jpg";
    } 
    else {
    bg="sprites/home.jpg";
}
    backgroundimg = loadImage(bg)
}