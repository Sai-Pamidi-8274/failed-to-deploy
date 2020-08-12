var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box1, box2, box3, box1Sprite, box2Sprite, box3Sprite;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();

	box1Sprite = createSprite(300, 600, 20, 100);
	box2Sprite = createSprite(400, 650, 200, 20);
	box3Sprite = createSprite(500, 600, 20, 100);



	box1 = Bodies.rectangle(300, 600, 20, 100);
	box2 = Bodies.rectangle(400, 650, 200, 20);
	box3 = Bodies.rectangle(500, 600, 20, 100);


	box1Sprite.shapeColor = "red";
	box2Sprite.shapeColor = "red";
	box3Sprite.shapeColor = "red";

	world = engine.world;


	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.1, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground//
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box2);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on the ground
		Matter.Body.setStatic(packageBody, false);
	}
}



