// import * as index from './index'


import '../assets/racer.png' ;
import '../assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg';
import '../assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg';

import '../styles/main.scss';
import './carButtons';
import { loadCar } from './createCars';


const garagePic = document.querySelector('.garage__pic') as HTMLElement;
garagePic.style.background = `url("./assets/racer.png")`;
garagePic.style.backgroundSize = "200%";
garagePic.style.backgroundPosition = "center";
garagePic.style.backgroundRepeat = "no-repeat"

// const carStartButton = document.querySelector('.car__start-button') as HTMLElement;
// carStartButton.style.background = `url("./assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg")`;
// carStartButton.style.backgroundSize = "100%";
// carStartButton.style.backgroundPosition = "center";

// const carResetButton = document.querySelector('.car__start-reset') as HTMLElement;
// carResetButton.style.background = `url("./assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg")`;
// carResetButton.style.backgroundSize = "100%";
// carResetButton.style.backgroundPosition = "center";

loadCar();