var canvasb1, canvasb2, canvasb3, canvasb4, canvasb5
var rflag, bflag 
var rflagImg, bflagImg


function preload(){
  
  bflagImg = loadImage("red_flag_3452435.png")
}

function setup() {
  createCanvas(800,400);

  canvasb1 = createSprite(400,05,800,10);
  canvasb1.shapeColor = "black";
  canvasb2 = createSprite(795,200,10,400)
  canvasb2.shapeColor = "black";
  canvasb3 = createSprite(400,395,800,10);
  canvasb3.shapeColor = "black";
  canvasb4 = createSprite(05,200,10,400)
  canvasb4.shapeColor = "black";
  canvasb5 = createSprite(120,80,10,150)
  canvasb5.shapeColor = "black";
  canvasb5 = createSprite(120,320,10,150)
  canvasb5.shapeColor = "black";
  canvasb5 = createSprite(680,320,10,150)
  canvasb5.shapeColor = "black";
  canvasb5 = createSprite(680,80,10,150)
  canvasb5.shapeColor = "black";
  canvasb5 = createSprite(400,40,10,100)
  canvasb5.shapeColor = "black";
  canvasb5 = createSprite(400,360,10,100)
  canvasb5.shapeColor = "black";

  rflag = createSprite(200,50,20,20)
  rflag.addImage(rflagImg)
}

function draw() {

  drawSprites();
}