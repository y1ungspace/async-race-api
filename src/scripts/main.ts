// import * as index from './index'


import '../assets/racer.png' ;
import '../assets/racing-flag.png'
import '../assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg';
import '../assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg';

import '../styles/main.scss';
import './carButtons';
import './engine';
import { loadCar } from './createCars';


const garagePic = document.querySelector('.garage__pic') as HTMLElement;
garagePic.style.background = `url("./assets/racer.png")`;
garagePic.style.backgroundSize = "200%";
garagePic.style.backgroundPosition = "center";
garagePic.style.backgroundRepeat = "no-repeat"



loadCar();