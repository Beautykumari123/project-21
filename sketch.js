 
 var bath1,bath2;
 var brush;
 var drink1,drink2;
 var eat1,eat2;
 var gym1,gym2,gym11,gym12;
 var bg;
 var move,move1;
 var sleep,sleepImg;

function preload(){
  bg = loadImage("images/iss.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png");
 brush=loadAnimation("images/brush.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  move=loadAnimation("images/move.png","images/move1.png");
  sleepImg=loadAnimation("images/sleep.png");
}


function setup() {
  createCanvas(1000,500)


astronaut=createSprite(500,250);
astronaut.addAnimation("sleep",sleepImg);
astronaut.scale=0.1;




  
  
}
function draw() {
  background(bg);
  drawSprites(); textSize(20);
   fill("white") 
  text("Instructions:",20, 35); 
  textSize(15);
   text("Up Arrow = Brushing",20, 55); 
   text("Down Arrow = Gymming",20, 70); 
   text("Left Arrow = Eating",20, 85);
    text("Right Arrow = Bathing",20, 100);
     text("m key = Moving",20, 115); 

  edges=createEdgeSprites(); 
  astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush)
astronaut.changeAnimation("brushing")
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
}



if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }


  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat)
      astronaut.changeAnimation("eating")
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
      if(keyDown("M")){
        astronaut.addAnimation("moving",move)
        astronaut.changeAnimation("moving")
        astronaut.y=350;
        astronaut.velocityX=2;
        astronaut.velocityY=2;
        }

      //astronaut.bounceOff(edges);







  
  
 


}