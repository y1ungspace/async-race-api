import { Winner } from "./interfaces";
import { loadTable } from "./winnersTable";

export function determineWinner(id: string, time: string) {
  const timeSum = time.replace('s', '')
  ifExists(Number(id), Number(timeSum))
}



async function ifExists(id: number, time: number) {
  const response = await fetch(`http://127.0.0.1:3000/winners/${id}`)
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  const data: Winner = {id: id, wins: 1, time: time}
  if (!response.wins) {
    createNewWinner(data);
  } else {
    updateWinner(data);
  }
  setTimeout(loadTable, 5000);
}

async function createNewWinner(data: Winner) {
  await fetch("http://127.0.0.1:3000/winners", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
}

async function updateWinner(data: Winner) {
  const response = await fetch(`http://127.0.0.1:3000/winners/${data.id}`)
  .then((response) => response.json()) 
  .then((result) => {
    return result;
  });
  
  response.wins++;

  if (data.time > response.time) {
    data.time = response.time
  }

  await fetch(`http://127.0.0.1:3000/winners/${data.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({wins: response.wins, time: data.time}),
  });

}

export async function deleteWinner(id: string) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'DELETE'
  })
}

