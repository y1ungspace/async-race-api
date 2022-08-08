import { carIcon } from "./icon";
import { Car, tableItem } from "./interfaces";

const tbody = document.querySelector('tbody');
const winsColomn = document.getElementById('wins');
const timeColomn = document.getElementById('time');
const previousButton = document.getElementById('winners-previous');
const nextButton = document.getElementById('winners-next');
const pageNumber = document.getElementById('winners-page')

type TableSort = 'false' | 'ASC' | 'DESC';
let winsSort: TableSort = 'false';
let timeSort: TableSort = 'false';

type SortOptions = 'basic' | 'wins' | 'time';
let currentState: SortOptions = 'basic';

let currentPage = 1;

async function mergeInfos(sort = 'id', order = 'ASC', page = 1, limit = 10) {
  const arrOfWinners: tableItem[] = [];

  const winners = await fetch(`http://127.0.0.1:3000/winners?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`)
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  const cars = await fetch(`http://127.0.0.1:3000/garage`)
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });

  winners.forEach((x: tableItem)  => {
    const y:Car = cars.find((elem: Car) => elem.id === x.id)
    x.name = y.name;
    x.color = y.color;  
    arrOfWinners.push(x)
  })

  return arrOfWinners;
}

export async function loadTable(sort?: string, order?:string, page?: number) {
  let items = await mergeInfos() as unknown as tableItem[];

  if (sort) {
    items = await mergeInfos(sort, order, page) as unknown as tableItem[];
  }

  let position = 1;

  tbody!.innerHTML = '';

  items.forEach(elem => {
    const tableRow = document.createElement('tr');
    const tablePosition = document.createElement('td');
    const icon = document.createElement('td');
    const name = document.createElement('td');
    const wins = document.createElement('td');
    const bestTime = document.createElement('td');

    tablePosition.textContent = position as unknown as string;
    name.textContent = elem.name;
    wins.textContent = elem.wins as unknown as string;
    bestTime.textContent = elem.time + 's';

    icon.innerHTML = carIcon;
    icon.style.fill = elem.color;

    tbody?.append(tableRow);
    tableRow.append(tablePosition);
    tableRow.append(icon);
    tableRow.append(name);
    tableRow.append(wins);
    tableRow.append(bestTime);

    position++;
  })
}

function determineDirection() {
  if (winsSort !== 'false') {
    return winsSort
  } else if (timeSort !== 'false') {
    return timeSort
  } else {
    return
  }
}

loadTable()

winsColomn?.addEventListener('click', () => {
  timeSort = 'false'
  timeColomn!.innerHTML = 'Best Time'

  currentState = 'wins';
  
  if (winsSort === 'false') {
    winsSort = 'ASC';
    winsColomn.innerHTML = 'Wins↑'
  } else if (winsSort === 'ASC') {
    winsSort = 'DESC';
    winsColomn.innerHTML = 'Wins↓'
  } else if (winsSort === 'DESC') {
    winsSort = 'ASC';
    winsColomn.innerHTML = 'Wins↑'
  }
  loadTable(currentState, winsSort, currentPage)
})

timeColomn?.addEventListener('click', () => {
  winsSort = 'false'
  winsColomn!.innerHTML = 'Wins'

  currentState = 'time';

  if (timeSort === 'false') {
    timeSort = 'ASC';
    timeColomn.textContent = 'Best Time↑'
  } else if (timeSort === 'ASC') {
    timeSort = 'DESC';
    timeColomn.textContent = 'Best Time↓'
  } else if (timeSort === 'DESC') {
    timeSort = 'ASC';
    timeColomn.textContent = 'Best Time↑'
  }
  loadTable(currentState, timeSort, currentPage)
})

previousButton?.addEventListener('click', () => {
  if (currentPage < 2) {
    return;
  }
  const direction = determineDirection();
  currentPage--;
  pageNumber!.textContent = currentPage.toString();
  loadTable(currentState, direction, currentPage)
})

nextButton?.addEventListener('click', () => {
  const direction = determineDirection()
  currentPage++;
  pageNumber!.textContent = currentPage.toString();
  loadTable(currentState, direction, currentPage)
})


