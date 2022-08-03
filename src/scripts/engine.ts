import { Engine } from "./interfaces";

async function engineOn(id: string) {
  const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: "PATCH"
  })
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  carDrive(response, id);
}


function carDrive(engine: Engine, id: string) {
  const car = document.getElementById(id);
  const carIcon = car?.children[2] as HTMLElement;
  const road = document.querySelector('.car__road') as HTMLElement;
  const carWidht = 100;
  const roadDistance = road.offsetWidth - carWidht;

  const speed = engine.velocity;
  const distance = engine.distance;
  const time = Math.floor(distance / speed) / 1000;

  console.log(time);

  carIcon.style.transition = `${time}s`;
  carIcon.style.transform = `translateX(${roadDistance}px)`;
}

function carReset(car: HTMLElement) {
  const carIcon = car.querySelector('.car__image') as HTMLElement;
  carIcon.style.transition = "0s";
  carIcon.style.transform = '';
}





document.addEventListener('click', () => {
  if((event?.target as HTMLElement).id === 'start') {
    const car = (event?.target as Node).parentNode?.parentNode?.parentNode as HTMLElement;
    engineOn(car.id);
  } else if ((event?.target as HTMLElement).id === 'reset') {
    const car = (event?.target as Node).parentNode?.parentNode?.parentNode as HTMLElement;
    carReset(car)
  }
})