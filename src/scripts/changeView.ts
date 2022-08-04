const garage = document.getElementById('garage');
const winners = document.getElementById('winners');
const garageButton = document.getElementById('garage-button');
const winnersButton = document.getElementById('winners-button');

type Pages = 'garage' | 'winners';
let currentPage: Pages = 'garage';

function changeView() {
  garage?.classList.toggle('garage')
  garage?.classList.toggle('garage_hidden')
  winners?.classList.toggle('winners')
  winners?.classList.toggle('winners_hidden')
}


garageButton?.addEventListener('click', () => {
  if (currentPage === 'winners') {
    currentPage = 'garage'
    changeView();
  }
})

winnersButton?.addEventListener('click', () => {
  if (currentPage === 'garage') {
    currentPage = 'winners'
    changeView();
  }
})