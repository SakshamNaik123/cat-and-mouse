var cat, runninggCat;
var mouse;
var cat1Img, cat2Img, cat3Img, cat4Img,  mouse1Img,  mouse2Img,  mouse3Img,  mouse4Img;

function preload() {
    //load the images here
cat = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
mouse = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
garden = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(1000,800);
garden.addImage("garden.png");

cat = createSprite(400,400,50,50);
cat.addAniamtion("cat1.png","cat2.png","cat3.png","cat4.png");

mouse = createSprite(800,600,40,50);
mouse.addAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x<(cat.width - mouse.width)/2){
  cat.velocityX=0;
  cat.addAnimation("catLastImage",catImg3);
  cat.changeAnimation("catLastImage");
 }
   Text(mouseX + ',' + mouseY,10,45); 
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAniamtion("catRunning", cat2Img);
     cat.changeAnimation("catRunning");
 }

}
