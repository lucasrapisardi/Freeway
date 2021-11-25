//Char Var
let xChar = 400;
let yChar = 370;
let collision = false;
let myScore = 0;

function showChar(){
  image(character, xChar, yChar, 30, 30);
}

function moveChar(){
  if(keyIsDown(UP_ARROW))
        yChar -= 2;
    else if(keyIsDown(DOWN_ARROW)){
      if(canMove()){
        yChar += 2;
      }
    }
    else if(keyIsDown(LEFT_ARROW))
      xChar -= 1;
      else if(keyIsDown(RIGHT_ARROW))
    xChar += 1;
   
  //Moving with composite keys
  if(keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
      yChar -= 0.5;
      xChar -= 0.5;
  }
  if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
      yChar -= 0.5;
      xChar += 0.5;
  }
  if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)){
      yChar += 0.5;
      xChar -= 0.5;
  }
  if(keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)){
      yChar += 0.5;
      xChar += 0.5;
  }
}


function checkCollision(){
  for(let i=0; i<carImages.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], carSize[0], carSize[1], xChar, yChar, 15);
    if(collision){
      backToBegin();
      collide.play();
      if(haveScore()){
        myScore -= 1;
      }
    }
  }
}  

function backToBegin(){
  yChar = 370;
}

function addPoint(){
  textAlign(CENTER);
  fill(color(255, 69, 0));
  textSize(27)
  text(myScore, width/5, 27);
}

function scoresPoint(){
  if(yChar<15){
    myScore += 1;
    backToBegin();
    points.play();
  }
}

function haveScore(){
  return myScore > 0;
}

function canMove(){
  return yChar < 370;
}
