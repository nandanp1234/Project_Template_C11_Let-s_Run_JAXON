var jakeImg, pathImg,path, jake, song, slider;

function preload(){
  //pre-load images

  jakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  patḥImg=loadAnimation("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running" , jakeImg);

}

function draw() {
  background(0);

}
