//Global Car Var
let carSpeed = [5,5.5,8, 3, 6, 8];
let carSize = [70,40];
let xCars = [750, 450, 650, 0, 200, 150];
let yCars = [35, 90, 145, 205, 255, 314];

function showCar(){
  for(let i=0; i<carImages.length; i++){
  image(carImages[i], xCars[i], yCars[i], carSize[0], carSize[1]);

  }
}

function moveCar(){
  for(let j=0; j<carImages.length; j++){
    xCars[j] -= carSpeed[j];
  }
}

function returnCar(){
  for(let k=0; k<carImages.length; k++){
    if(carGone(xCars[k])){
      xCars[k] = 600;
    }
  }
}

function carGone(xCars){
  return xCars < -60;
}

