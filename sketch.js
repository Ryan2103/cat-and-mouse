
var gardenImg,garden;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;


function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png")
    catImg2=loadImage("images/cat1.png")
    catImg=loadAnimation("cat2.png","cat3.png")
    mouseImg=loadImage("images/mouse1.png")
    mouseImg2=loadAnimation("mouse2.png","mouse3.png")
    catImg3=loadImage("images/cat4.png");
    mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,20,20);
    cat.addImage(catImg2);
    cat.scale=0.2;

    mouse=createSprite(100,600,30,30);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(gardenImg);
    
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        
        cat.addAnimation("catSit",catImg3)
        cat.changeAnimation("catSit");
        cat.velocityX=0;
        cat.x=230;

        mouse.addAnimation("mouseSit",mouseImg3);
        mouse.changeAnimation("mouseSit");

    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){

    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    cat.addAnimation("cat",catImg);
    cat.changeAnimation("cat");
    cat.velocityX=-4;

  }


}
