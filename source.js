//Sprint va
let roadImage;
let character;
let firstCar;
let secCar;
let thirdCar;

let collide;
let points;
let song;


function preload(){
  roadImage = loadImage("Images/estrada.png");
  character = loadImage("Images/ator-1.png");
  firstCar = loadImage("Images/carro-1.png");
  secCar = loadImage("Images/carro-2.png");
  thirdCar = loadImage("Images/carro-3.png");
  carImages = [firstCar, secCar, thirdCar,
              secCar, thirdCar, firstCar];
  
  collide = loadSound("Sound/colidiu.mp3");
  points = loadSound("Sound/pontos.wav");
  song = loadSound("Sound/trilha.mp3");
}
