import { carNamesArray } from "./carNamesArray";
import { createCar, loadCar } from "./createCars";

function generateCar() {
  const nameObject = carNamesArray[Math.floor(Math.random()*carNamesArray.length)];
  const nameObjectBrand = nameObject.brand;
  const nameObjectModel = nameObject.models[Math.floor(Math.random()*nameObject.models.length)];

  const name = nameObjectBrand + ' ' + nameObjectModel;

  const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  const newCar = {name, color}
  createCar(newCar)
}

export function OneHundredCars() {
  for (let i = 0; i < 100; i++) {
    generateCar();
  }
  window.setTimeout(loadCar, 10);
}

