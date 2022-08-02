import { loadCar } from "./createCars";

let currentPage = 1;
const itemsRow = 7;
const buttonPrevious = document.getElementById('previous');
const buttonNext = document.getElementById('next');


export function pagination(response: []) {
  if (currentPage === 1) {
    return response.slice(0, 7);
  } else {
    const first = (currentPage - 1) * itemsRow;
    const last = currentPage * itemsRow;
    return response.slice(first, last);
  }
}

function changePageNumber() {
  const counter = document.getElementById('pagesTotal');
  counter!.textContent = `Current page: ${currentPage}`;
}

buttonPrevious?.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
  }
  changePageNumber();
  loadCar();
})

buttonNext?.addEventListener('click', () => {
 currentPage++;
 changePageNumber();
 loadCar();
})






