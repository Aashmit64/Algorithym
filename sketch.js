function setup() {
  createCanvas(800,400);
  apple=createSprite(400, 200, 50, 50);
  banana=createSprite(500,300,70,70)
  apple.shapeColor="red"
  banana.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  banana.x=mouseX
  banana.y=mouseY
  if(banana.x-apple.x<apple.width/2+banana.width/2
    &&apple.x-banana.x<apple.width/2+banana.width/2
    &&banana.y-apple.y<apple.height/2+banana.height/2
    &&apple.y-banana.y<apple.height/2+banana.height/2){
      apple.shapeColor="green"
      banana.shapeColor="purple"
    }
  else{apple.shapeColor="red"
       banana.shapeColor="yellow"}
}