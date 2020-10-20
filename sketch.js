var box1, box2, box3;
var ground;
var box, boxImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boxImg = loadImage("dustbingreen.png");
}



function setup() {
	createCanvas(1200, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = createSprite(1100,530,20,100);
	box.addImage(boxImg);
	box.scale = 0.70;

	

	box1 = createSprite(1200, 610, 20,100);
	box1.shapeColor=color("red")
	
	box2 = createSprite(1000,610, 20,100);
	box2.shapeColor=color("red")
    
	box3 = createSprite(1100,650, 200,20);
	box3.shapeColor=color("red")
    
	paperObject=new paper(50,300,40); 
	
	
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("yellow")

	World.add(world, ground);

	Engine.run(engine);
    ground = Bodies.rectangle(width/2, 620, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);

  
}


function draw() {
  rectMode(CENTER);
  background("blue");

 
 
  paperObject.display();
 
  
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:19,	y:-30 });
	}
  }



