import { loadCar } from "./createCars";
import { Car } from "./interfaces";
import { deleteWinner } from "./winners";
import { loadTable } from "./winnersTable";

function openEditMode(target: Node) {
  const editButton = target.parentNode;
  const editBox = editButton?.nextSibling as HTMLElement;
  editBox.style.visibility = "visible";
}

function newData(target: Node) {
  const inputName = target.previousSibling?.previousSibling as HTMLInputElement;
  const inputColor = target.previousSibling as HTMLInputElement;
  const car = target.parentNode?.parentNode?.parentNode as HTMLElement;

  const name = inputName.value;
  const color = inputColor.value;
  const id = car.id as unknown as number;
   
  const data = {name, color, id}
  updateCar(data) 
}

async function updateCar(data:  Car) {
  await fetch(`http://127.0.0.1:3000/garage/${data.id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  loadCar();
}

async function deleteCar(target: Node) {
  const car = target.parentNode?.parentNode?.parentNode as HTMLElement;
  const id = car.id; 
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
  deleteWinner(id);
  loadCar();
  loadTable();
}

export function disableButtons(elem: HTMLElement) {
  const button = elem.parentNode as HTMLElement;
  button.className = "car__button_disabled"
}

export function unlockButtons(elem: Node, elemClass: string) {
  (elem as HTMLElement).className = elemClass;
}


document.addEventListener('click', () => {
  if ((event?.target as HTMLElement).classList.contains('edit')) {
    openEditMode((event?.target as Node))
  }
})

document.addEventListener('click', () => {
  if ((event?.target as HTMLElement).id === 'garage-update') {
    newData(event?.target as Node);
  }
})

document.addEventListener('click', () => {
  if ((event?.target as HTMLElement).classList.contains('garage__delete-button')) {
    deleteCar((event?.target as Node));
  }
})

