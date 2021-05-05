const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var backgroungImg;

function preload() {
   getTime();
}

function setup(){
    var canvas = createCanvas(1000,650);
    engine = Engine.create();
    world = engine.world;

    //ball
    ball =new Ball(200,190,40);
    //launcher
    launcher = new Launcher(ball.body,{x:200, y:100});
    //GROUNDS
    ground= new Ground(500,630,1000,20)
    G1= new Ground(440,470,300,20)
    G2= new Ground(760,270,240,20)
   
    //BOXES
    
    //G1 boxes
    //1st line
    b1 = new Box3(330,445,50,50);
    b2 = new Box3(385,445,50,50);
    b3 = new Box3(440,445,50,50);
    b4 = new Box3(495,445,50,50);
    b5 = new Box3(550,445,50,50);
    //2n line
    b6 = new Box1(355,415,50,50);
    b7 = new Box1(410,415,50,50);
    b8 = new Box1(465,415,50,50);
    b9 = new Box1(520,415,50,50);
    //3rd line
    b10 = new Box4(380,385,50,50);
    b11 = new Box4(435,385,50,50);
    b12 = new Box4(490,385,50,50);
    //4th line
    b13 = new Box2(405,355,50,50);
    b14 = new Box2(460,355,50,50);
    //5th line
    b15 = new Box1(430,325,50,50);


    //G2
    //1st line
    b16 = new Box2(675,230,50,50);
    b17 = new Box2(730,230,50,50);
    b18 = new Box2(785,230,50,50);
    b19 = new Box2(840,230,50,50);
    //2nd line
    b20 = new Box3(700,200,50,50);
    b21 = new Box3(755,200,50,50);
    b22 = new Box3(810,200,50,50);
    //3rd line
    b23 = new Box1(725,170,50,50);
    b24 = new Box1(780,170,50,50);
    //4th line
    b25 = new Box4(750,140,50,50);
    getTime();
}

function draw(){
    if(backgroungImg){
        background(backgroungImg)
    }
   
    Engine.update(engine); 

    ground.display();
    ball.display();
    launcher.display();
    G2.display();
    G1.display();
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body,{x: mouseX, y:mouseY});
}

function mouseReleased() {
	launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
     launcher.attach(this.ball.body);
    } 
 }

 async function getTime() {
    
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 06 && hour<=12){
        bg = "dayG.png";
    }else{
        bg = "nightG.jpg";
    }
    backgroungImg = loadImage(bg);
    console.log(responseJSON);
    console.log(datetime);
    console.log(hour);
}

