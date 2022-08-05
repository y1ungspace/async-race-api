import { Engine } from "./interfaces";
import { determineWinner } from "./winners";

const raceButton = document.querySelector('.cars__race-button') as HTMLElement;
type winnerFinish = true | false
let IsWinnerDetermined: winnerFinish = false;

async function engineOn(id: string) {
  const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: "PATCH"
  })
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  driveRequest(id);
  carDrive(response, id);
}

async function driveRequest(id: string) {
  const responseStatus = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: "PATCH"
  })
  .then((response) => {
    return response.status;
  });
  if (responseStatus === 500) {
    stopImmediately(id)
  }
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

  carIcon.style.transition = `${time}s`;
  carIcon.style.transform = `translateX(${roadDistance}px)`;

  carIcon.addEventListener('transitionend', () => {
    if (IsWinnerDetermined === false) {
      const transitionDuration = carIcon.style.transitionDuration
      determineWinner(id, transitionDuration);
      IsWinnerDetermined = true;
    }
  })
}

async function stopImmediately(id: string) {
  const car = document.getElementById(id) as Element;
  const carIcon = car?.children[2] as HTMLElement;

  const status = carIcon.getBoundingClientRect()
  carIcon.style.transform = `translateX(${status.left - 80}px)`;
  carIcon.style.transition = "1000s";
}

function carReset(car: HTMLElement) {
  const carIcon = car.querySelector('.car__image') as HTMLElement;
  carIcon.style.transition = "0s";
  carIcon.style.transform = '';
}

async function makeRace() {
  const carsOnPage = document.querySelectorAll('.car');

  changeRaceButtonStatus();

  carsOnPage.forEach(x => {
    engineOn(x.id);
  })
}

function resetAll() {
  const carsOnPage = document.querySelectorAll('.car');

  changeRaceButtonStatus();
  IsWinnerDetermined = false;
  
  carsOnPage.forEach(x => {
    carReset(x as HTMLElement);
  })
}

function changeRaceButtonStatus() {
  raceButton.classList.toggle('cars__race-button');
  raceButton.classList.toggle('cars__race-button_reset');
  
  if (raceButton.textContent === '>>RACE<<') {
    raceButton.textContent = '>>RESET<<';
  } else {
    raceButton.textContent = '>>RACE<<';
  }
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

raceButton?.addEventListener('click', () => {
  if (raceButton.textContent === '>>RESET<<') {
    resetAll();
    return;
  }
  makeRace();
})

