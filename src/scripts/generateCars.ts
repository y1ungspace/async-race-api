import { carNamesArray } from "./carNamesArray";
import { createCar } from "./createCars";

function generateCar() {
  const name = carNamesArray[Math.floor(Math.random()*carNamesArray.length)];
  const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  const newCar = {name, color}
  createCar(newCar)
}

export function OneHundredCars() {
  for (let i = 0; i < 100; i++) {
    generateCar()
  }
}

