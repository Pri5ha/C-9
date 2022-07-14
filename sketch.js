var ball;


function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,15);
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    ball.x -= 3;
  }
  drawSprites();
}




