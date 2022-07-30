import { getCarHtml } from "./car";
import { Car } from "./interfaces";

export async function loadCar() {
  const box = document.querySelector('.cars-box');
  box!.innerHTML = "";

  const response = await fetch("http://127.0.0.1:3000/garage")
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  response.forEach((x: Car) => {
    const newCar = document.createElement('div');
    newCar.classList.add('car');
    newCar.innerHTML = getCarHtml(x.name, x.color);
    box?.append(newCar);
  })
}

async function createCar(data: object) {
  await fetch("http://127.0.0.1:3000/garage", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  loadCar();
} 




document.addEventListener('click', () => {
  const button = document.getElementById("garage-create");
  console.log('click')
  if (event?.target === button) {
    const name = document.getElementById("name") as HTMLInputElement;
    const color = document.getElementById("color") as HTMLInputElement;
    const data = {name: name.value, color: color.value}
    if (name.value === '') {
      throw new Error("can't create car without name")
    }
    createCar(data);
    name.value === ''
  }
})


