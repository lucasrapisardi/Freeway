function setup() {
  createCanvas(600, 400);
  console.log(song);
  song.loop();
}

function draw() {
  background(roadImage);
  showChar();
  showCar()
  moveCar();
  moveChar();
  returnCar();
  checkCollision();
  addPoint();
  scoresPoint();
  haveScore();
  canMove();
}




