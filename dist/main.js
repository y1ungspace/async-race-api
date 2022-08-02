/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/car.ts":
/*!****************************!*\
  !*** ./src/scripts/car.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCarHtml": () => (/* binding */ getCarHtml)
/* harmony export */ });
function getCarHtml(name, color) {
    return `<h5 class="car__name">${name}</h5><div class="car__buttons"> <button class="car__start-button"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M8.333 35V6.667h14.542l.75 3.5h9.708V26h-11l-.75-3.458H11.125V35Zm12.5-18.667Zm3.834 6.875h5.875v-10.25h-9.25l-.75-3.5h-9.417V19.75h12.792Z"/></svg></button><button class="car__start-reset"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="#FFFFFF"><path d="M18.625 34.917q-5.083-.5-8.521-4.271-3.437-3.771-3.437-8.938 0-3.083 1.354-5.812t3.771-4.521l2 1.958q-2.084 1.417-3.209 3.625-1.125 2.209-1.125 4.75 0 4 2.604 6.959 2.605 2.958 6.563 3.458Zm2.792 0v-2.792q4-.542 6.583-3.479 2.583-2.938 2.583-6.938 0-4.416-3.062-7.5-3.063-3.083-7.479-3.083h-.625l2.291 2.292-1.958 1.958-5.667-5.625 5.667-5.625 1.958 1.958-2.291 2.292h.625q5.583 0 9.458 3.875t3.875 9.458q0 5.125-3.437 8.917-3.438 3.792-8.521 4.292Z"/></svg></button><button class="car__edit-button"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" class="edit"><path d="m16.5 35 6.125-6.125h14.042V35ZM6.125 32.208h2l17.083-17.083-2-2L6.125 30.208Zm25-19.083L25.208 7.25l1.917-1.958q.792-.792 1.979-.771 1.188.021 1.979.812l1.959 1.959q.791.791.812 1.937.021 1.146-.771 1.938Zm-2 2L9.25 35H3.333v-5.917L23.208 9.208Zm-4.917-1-1-1 2 2Z"/></svg></button><div class="edit-box"><input class="create__input" id="name_edit" value="${name}"><input type="color" class="create__input" id="color_edit" value=${color}><button class="garage__button" id="garage-update">OK<<</button><button class="garage__delete-button">>>DELETE</button></div></div><div class="car__image"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="100" height="32" fill=${color}><path fill-rule="evenodd" d="m4.1 67l3.9-3.6c0 0 11.6 2.1 19.5 1.8 7.8-0.3 16.4-11.7 8-11.5-2 0-4.2-0.4-6.3-1q0 0 0 0c-7.1-1.9-14-6.1-14-6.1l-4.2-9c0 0-4.4-7.5 4.6-6.9 9 0.6 18.9 4.4 18.9 4.4 0 0 87.6-21.5 104.7-24.8 17.1-3.3 89.6-17.6 153.3 14.5 0 0 40.2 18.9 44.1 19.2 0 0 119.9 5.8 159.4 41 0 0 0.6 12.9 0 21.3 0 0 1.8 5.4-1.3 10.6 0 0 2.1 4.2-1.4 3.6l-1.1 8.7c0 0-4.2-2.1-6.1 4.9 0 0-22.1 5.4-28.1 4.1 0 0 6.7-66.9-41.5-66.9-48.1 0-52.7 42.5-53.4 67.1l-1.8 1.5c0 0-212.6-6.3-218.3-2.8 0 0-2.1 0-1.7-4 0 0 6.9-65.5-50.2-65.5-57.2 0-44.2 61.3-44.2 61.3 0 0-42.8-9.6-36.3-16.1 0 0-14.9-20.3-6.5-45.8zm366.1 5.1c3.2-3.9-41.9-4.4-41.9-4.4 0 0-5 4.8-3.3 9.3 1.6 4.5 25.1 3.8 31.8 3.1 6.8-0.8 13.4-8 13.4-8zm-81-19.7c0 0 22.5 0.2 25.6 0 3-0.3 1.9-1.5 1.9-1.5 0 0-5.6-7.7-44.6-24.3-38.9-16.5-62-14.1-62-14.1-107.7 3-87.9 16.1-87.9 16.1l8.1 9.4 25.2 4.8 110 6.9zm-102.6 7.1c0 1.2 1 2.2 2.2 2.2h17.7c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3h-17.7c-1.2 0-2.2 1-2.2 2.3zm134.4 18.7c0 0 0.8 34.1-3 42.3l-94.8-3c0 0-28.7 1-39.4-19.8 0 0-9.1-19-10.5-25.5 0.3 2.2 4 37.5 22.9 42.7 19.7 5.4 124.8 8.2 124.8 8.2 0 0 4.1-35.1 0-44.9zm46 18q0.2-0.3 0.5-0.8 0.6-0.9 1.3-2 0.2-0.3 0.4-0.7 0.5-0.7 1.1-1.5 0.2-0.3 0.4-0.6c0.9-1.1 1.8-2.3 2.8-3.5q0.4-0.5 0.8-0.9c2.2-2.5 4.7-5 7.7-7.4q0.4-0.3 0.8-0.6 0.4-0.3 0.8-0.6 1.1-0.8 2.3-1.6 0.8-0.5 1.6-1.1 1.3-0.7 2.6-1.4 0.9-0.5 1.9-0.9 0.4-0.2 0.8-0.4 0.4-0.2 0.8-0.4 0.8-0.3 1.6-0.7 1-0.3 1.9-0.6 1.3-0.5 2.6-0.8 0.4-0.2 0.9-0.3 1-0.2 2.1-0.5 1.1-0.2 2.2-0.4 0.7-0.1 1.4-0.2 0.1 0 0.1 0 0.6-0.1 1.2-0.1 1-0.1 2.1-0.2 0.7 0 1.5 0 1.5-0.1 3.1 0c34.1 1 44 31.3 44 31.3h8.2c0 0 9.9-5.8 19.8-5.1 10 0.8 3.3-4.3-8.4-6.5-11.7-2.1-22.6-14.4-24.4-17.7-1.8-3.3-45.4-14-72.6-12.8 0 0 40 2 70 14.9 0 0 1.1 4.1-11.7 0q-1.6-0.5-3.7-1.3-0.7-0.2-1.5-0.5-2.2-0.8-4.9-1.6-1.7-0.5-3.6-1-0.8-0.2-1.5-0.4-0.7-0.2-1.5-0.3-0.7-0.2-1.5-0.3-0.8-0.2-1.6-0.3-0.9-0.2-1.9-0.3-1-0.2-2-0.2-0.6-0.1-1.1-0.1-0.7-0.1-1.4-0.1-0.1 0-0.3 0-1-0.1-2.1-0.1-1 0-2 0.1-1.1 0-2.1 0.1-0.7 0.1-1.4 0.2-0.6 0-1.1 0.1-0.7 0.1-1.5 0.2-0.2 0.1-0.4 0.1-0.7 0.1-1.3 0.3c-0.5 0.1-0.9 0.2-1.4 0.4q-0.7 0.1-1.4 0.4-0.8 0.2-1.5 0.4-1.4 0.5-2.9 1.1-0.7 0.3-1.4 0.7-1.6 0.7-3.2 1.7-0.5 0.3-1.1 0.7c-0.2 0.1-0.4 0.3-0.6 0.4q-0.4 0.2-0.7 0.5-0.3 0.2-0.6 0.4 0 0 0 0-0.5 0.3-1 0.6-0.5 0.4-1 0.8-0.1 0.1-0.2 0.2-0.4 0.3-0.7 0.6-0.6 0.5-1.2 1-0.6 0.5-1.1 1-0.6 0.5-1.1 1.1-0.1 0.1-0.3 0.2-0.7 0.7-1.4 1.5-1.2 1.3-2.4 2.7-0.4 0.6-0.9 1.2-1.7 2.2-3.4 4.7-0.7 0.9-1.3 2-1.5 2.3-2.9 5-0.2 0.3-0.3 0.6 0.1-0.1 0.2-0.4zm125.8-8.5c-11.7-13.7-33.5-15.6-33.5-15.6 16.3 14.6 33.5 15.6 33.5 15.6zm-345.7 42.5l210.1 4.4c8.4-3.4-23.7-5.1-23.7-5.1 0 0-144.4-5.2-157.6-5.2-13.3 0-18.6 1.3-26.3 2.6-7.6 1.3-2.5 3.3-2.5 3.3zm-5.6-32.5c33.7-21.2 17.8-28.8 17.8-28.8 7.9-1.4 152.8 2.9 161.3 3.2-8.3-0.4-142.8-6.9-166.7-6.9-24.6 0.1-25.4 8.6-25.4 8.6-21.8-10.9-32.1-8.3-32.1-8.3 33.4 1.4 45.1 32.2 45.1 32.2zm-106.6-3.8c3.3 3.8 8.6 5.7 8.6 5.1 1-12.6 10.1-21.6 10.1-21.6-16 4.2-47.2-9-47.2-9-3.2 4.7-1.9 11.9-1.9 11.9 18.4 1.1 27.2 9.7 30.4 13.6zm183.3-79c33.3 0.8 93.3 34.8 93.3 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.6-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.1-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.2 2.7 4.1 5.8 12.7 6.6 14.8-17.4-1.2-31.6-2.4-34.8-3.2-9.7-2.3-16.3 0.5-22.2-9.7-5.8-10.2 56.3-15.3 89.7-14.5zm-68.5 18.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.6-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3 0.6 0 3.7zm179.9 38.5h33.2c0.8 0 1.4 0.6 1.4 1.4 0 0.7-0.6 1.3-1.4 1.3h-33.2c-0.8 0-1.4-0.6-1.4-1.3 0-0.8 0.6-1.4 1.4-1.4zm-142.5-30.8c0 0 57.2 5 65.6 4.3 0 0-0.2-7.3 4.7-6.9 0 0-4.1 4.8 0.1 7.8 0 0-25.6 2.1-70.4-5.2z"/><path d="m492.5 125.3c0 0-3.9 0.3-4 4.4l-26 4.7c0 0 47.9-1.2 30-9.1z"/><path d="m365.5 99q0.2-0.4 0.4-0.7-0.3 0.4-0.4 0.7z"/><path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/><path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/><path fill-rule="evenodd" d="m218.1 14.9c33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5zm-68.4 18.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/><path fill-rule="evenodd" d="m185.4 42.3c-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5 33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9zm-35.7-8.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/><path d="m276.8 36.1c7.2 3.2 4 8.6 3.9 10.3 0 1.8-16.1 4.5-18.2-1.2-2-5.6 2-10.9 2-10.9 0 0 5.2-1.4 12.3 1.8z"/><path fill-rule="evenodd" d="m411.5 77.2c22.1 0 40.1 18 40.1 40.2 0 22.2-18 40.2-40.1 40.2-22.2 0-40.2-18-40.2-40.2 0-22.2 18-40.2 40.2-40.2zm-32.5 40.2c0 18 14.5 32.5 32.5 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-18 0-32.5 14.5-32.5 32.5zm10-20.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m415.8 115.7c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/><path d="m412.9 121.8q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m411.5 86.8c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/><path d="m407.9 120.4c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2z"/><path d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7z"/><path fill-rule="evenodd" d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m406.8 117.1q0 0 0.1-0.1c0-0.7 0.2-1.4 0.6-2q0 0 0-0.1c0.7-1 1.8-1.8 3.1-2q0 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 0 0.1 0.1c1.2 0.4 2.2 1.3 2.7 2.5q0.1 0 0.1 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.2 1-0.6 1.9-1.3 2.6q0 0.1-0.1 0.1-0.7 0.8-1.8 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.9-0.4l0.1-0.1q-0.1 0-0.1 0.1c-0.6-0.3-1.2-0.7-1.7-1.3q0 0 0-0.1c-0.7-0.8-1.1-1.8-1.1-2.9q0-0.1 0-0.3z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path fill-rule="evenodd" d="m92.1 72.8c22.2 0 40.1 18 40.1 40.2 0 22.2-17.9 40.2-40.1 40.2-22.2 0-40.1-18-40.1-40.2 0-22.2 17.9-40.2 40.1-40.2zm-32.4 40.2c0 18 14.5 32.5 32.4 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-17.9 0-32.4 14.5-32.4 32.5zm9.9-20.7c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/><path d="m96.4 111.3c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/><path d="m93.5 117.4q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/><path d="m90.3 117.2v0.1q0-0.1 0-0.1z"/><path d="m92.1 82.4c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/><path d="m88.6 116c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2z"/><path d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7z"/><path fill-rule="evenodd" d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/><path d="m87.5 112.7q0 0 0 0c0-0.8 0.3-1.5 0.6-2.1q0.1 0 0.1-0.1c0.6-1 1.7-1.8 3-2q0.1 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 0 0.1 0.1c1.3 0.4 2.2 1.3 2.8 2.5q0 0 0 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.1 1-0.6 1.9-1.3 2.6q0 0.1 0 0.1-0.8 0.8-1.9 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.8-0.4v-0.1q0 0 0 0.1c-0.7-0.3-1.3-0.7-1.7-1.3q-0.1 0-0.1-0.1c-0.6-0.7-1-1.8-1-2.9q0-0.1 0-0.3z"/</svg></div><div class="car__road"></div></div>`;
}


/***/ }),

/***/ "./src/scripts/carButtons.ts":
/*!***********************************!*\
  !*** ./src/scripts/carButtons.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCars */ "./src/scripts/createCars.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function openEditMode(target) {
    const editButton = target.parentNode;
    const editBox = editButton === null || editButton === void 0 ? void 0 : editButton.nextSibling;
    editBox.style.visibility = "visible";
}
function newData(target) {
    var _a, _b, _c;
    const inputName = (_a = target.previousSibling) === null || _a === void 0 ? void 0 : _a.previousSibling;
    const inputColor = target.previousSibling;
    const car = (_c = (_b = target.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode;
    const name = inputName.value;
    const color = inputColor.value;
    const id = car.id;
    const data = { name, color, id };
    updateCar(data);
}
function updateCar(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://127.0.0.1:3000/garage/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        (0,_createCars__WEBPACK_IMPORTED_MODULE_0__.loadCar)();
    });
}
function deleteCar(target) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const car = (_b = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
        const id = car.id;
        yield fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE',
        });
        (0,_createCars__WEBPACK_IMPORTED_MODULE_0__.loadCar)();
    });
}
document.addEventListener('click', () => {
    if ((event === null || event === void 0 ? void 0 : event.target).classList.contains('edit')) {
        openEditMode(event === null || event === void 0 ? void 0 : event.target);
    }
});
document.addEventListener('click', () => {
    if ((event === null || event === void 0 ? void 0 : event.target).id === 'garage-update') {
        newData(event === null || event === void 0 ? void 0 : event.target);
    }
});
document.addEventListener('click', () => {
    if ((event === null || event === void 0 ? void 0 : event.target).classList.contains('garage__delete-button')) {
        console.log('must delete');
        deleteCar(event === null || event === void 0 ? void 0 : event.target);
    }
});


/***/ }),

/***/ "./src/scripts/carNamesArray.ts":
/*!**************************************!*\
  !*** ./src/scripts/carNamesArray.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carNamesArray": () => (/* binding */ carNamesArray)
/* harmony export */ });
const carNamesArray = [
    {
        "brand": "Acura",
        "models": [
            "2.2CL",
            "2.3CL",
            "3.0CL",
            "3.2CL",
            "ILX",
            "Integra",
            "Legend",
            "MDX",
            "NSX",
            "RDX",
            "3.5 RL",
            "RL",
            "RSX",
            "SLX",
            "2.5TL",
            "3.2TL",
            "TL",
            "TSX",
            "Vigor",
            "ZDX"
        ]
    },
    {
        "brand": "Alfa Romeo",
        "models": [
            "164",
            "8C Competizione",
            "GTV-6",
            "Milano",
            "Spider"
        ]
    },
    {
        "brand": "AMC",
        "models": [
            "Alliance",
            "Concord",
            "Eagle",
            "Encore",
            "Spirit"
        ]
    },
    {
        "brand": "Aston Martin",
        "models": [
            "DB7",
            "DB9",
            "DBS",
            "Lagonda",
            "Rapide",
            "V12 Vantage",
            "V8 Vantage",
            "Vanquish",
            "Virage"
        ]
    },
    {
        "brand": "Audi",
        "models": [
            "100",
            "200",
            "4000",
            "5000",
            "80",
            "90",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "allroad",
            "Cabriolet",
            "Coupe",
            "Q3",
            "Q5",
            "Q7",
            "Quattro",
            "R8",
            "RS 4",
            "RS 5",
            "RS 6",
            "S4",
            "S5",
            "S6",
            "S7",
            "S8",
            "TT",
            "TT RS",
            "TTS",
            "V8 Quattro"
        ]
    },
    {
        "brand": "Avanti",
        "models": [
            "Convertible",
            "Coupe",
            "Sedan"
        ]
    },
    {
        "brand": "Bentley",
        "models": [
            "Arnage",
            "Azure",
            "Brooklands",
            "Continental",
            "Corniche",
            "Eight",
            "Mulsanne",
            "Turbo R"
        ]
    },
    {
        "brand": "BMW",
        "models": [
            "128i",
            "135i",
            "135is",
            "318i",
            "318iC",
            "318iS",
            "318ti",
            "320i",
            "323ci",
            "323i",
            "323is",
            "323iT",
            "325Ci",
            "325e",
            "325es",
            "325i",
            "325is",
            "325iX",
            "325xi",
            "328Ci",
            "328i",
            "328iS",
            "328xi",
            "330Ci",
            "330i",
            "330xi",
            "335d",
            "335i",
            "335is",
            "335xi",
            "ActiveHybrid 3",
            "325",
            "524td",
            "525i",
            "525xi",
            "528e",
            "528i",
            "528iT",
            "528xi",
            "530i",
            "530iT",
            "530xi",
            "533i",
            "535i",
            "535i Gran Turismo",
            "535xi",
            "540i",
            "545i",
            "550i",
            "550i Gran Turismo",
            "ActiveHybrid 5",
            "633CSi",
            "635CSi",
            "640i",
            "640i Gran Coupe",
            "645Ci",
            "650i",
            "650i Gran Coupe",
            "L6",
            "733i",
            "735i",
            "735iL",
            "740i",
            "740iL",
            "740Li",
            "745i",
            "745Li",
            "750i",
            "750iL",
            "750Li",
            "760i",
            "760Li",
            "ActiveHybrid 7",
            "Alpina B7",
            "840Ci",
            "850Ci",
            "850CSi",
            "850i",
            "L7",
            "1 Series M",
            "M Coupe",
            "M Roadster",
            "M3",
            "M5",
            "M6",
            "X5 M",
            "X6 M",
            "ActiveHybrid X6",
            "X1",
            "X3",
            "X5",
            "X6",
            "Z3",
            "Z4",
            "Z8"
        ]
    },
    {
        "brand": "Buick",
        "models": [
            "Century",
            "Electra",
            "Enclave",
            "Encore",
            "LaCrosse",
            "Le Sabre",
            "Lucerne",
            "Park Avenue",
            "Rainier",
            "Reatta",
            "Regal",
            "Rendezvous",
            "Riviera",
            "Roadmaster",
            "Skyhawk",
            "Skylark",
            "Somerset",
            "Terraza",
            "Verano"
        ]
    },
    {
        "brand": "Cadillac",
        "models": [
            "Allante",
            "ATS",
            "Brougham",
            "Catera",
            "Cimarron",
            "CTS",
            "De Ville",
            "DTS",
            "Eldorado",
            "Escalade",
            "Escalade ESV",
            "Escalade EXT",
            "Fleetwood",
            "Seville",
            "SRX",
            "STS",
            "XLR",
            "XTS"
        ]
    },
    {
        "brand": "Chevrolet",
        "models": [
            "Astro",
            "Avalanche",
            "Aveo",
            "Aveo5",
            "Beretta",
            "Blazer",
            "Camaro",
            "Caprice",
            "Captiva Sport",
            "Cavalier",
            "Celebrity",
            "Chevette",
            "Citation",
            "Cobalt",
            "Colorado",
            "Corsica",
            "Corvette",
            "Cruze",
            "El Camino",
            "Equinox",
            "Express Van",
            "G Van",
            "HHR",
            "Impala",
            "Kodiak C4500",
            "Lumina",
            "Lumina APV",
            "LUV",
            "Malibu",
            "Metro",
            "Monte Carlo",
            "Nova",
            "Prizm",
            "S10 Blazer",
            "S10 Pickup",
            "Silverado and other C/K1500",
            "Silverado and other C/K2500",
            "Silverado and other C/K3500",
            "Sonic",
            "Spark",
            "Spectrum",
            "Sprint",
            "SSR",
            "Suburban",
            "Tahoe",
            "Tracker",
            "TrailBlazer",
            "TrailBlazer EXT",
            "Traverse",
            "Uplander",
            "Venture",
            "Volt"
        ]
    },
    {
        "brand": "Chrysler",
        "models": [
            "200",
            "300",
            "300M",
            "Aspen",
            "Caravan",
            "Cirrus",
            "Concorde",
            "Conquest",
            "Cordoba",
            "Crossfire",
            "E Class",
            "Fifth Avenue",
            "Grand Voyager",
            "Imperial",
            "Intrepid",
            "Laser",
            "LeBaron",
            "LHS",
            "Neon",
            "New Yorker",
            "Newport",
            "Pacifica",
            "Prowler",
            "PT Cruiser",
            "Sebring",
            "TC by Maserati",
            "Town &amp; Country",
            "Voyager"
        ]
    },
    {
        "brand": "Daewoo",
        "models": [
            "Lanos",
            "Leganza",
            "Nubira"
        ]
    },
    {
        "brand": "Daihatsu",
        "models": [
            "Charade",
            "Rocky"
        ]
    },
    {
        "brand": "Datsun",
        "models": [
            "200SX",
            "210",
            "280ZX",
            "300ZX",
            "310",
            "510",
            "720",
            "810",
            "Maxima",
            "Pickup",
            "Pulsar",
            "Sentra",
            "Stanza"
        ]
    },
    {
        "brand": "DeLorean",
        "models": [
            "DMC-12"
        ]
    },
    {
        "brand": "Dodge",
        "models": [
            "400",
            "600",
            "Aries",
            "Avenger",
            "Caliber",
            "Caravan",
            "Challenger",
            "Charger",
            "Colt",
            "Conquest",
            "D/W Truck",
            "Dakota",
            "Dart",
            "Daytona",
            "Diplomat",
            "Durango",
            "Dynasty",
            "Grand Caravan",
            "Intrepid",
            "Journey",
            "Lancer",
            "Magnum",
            "Mirada",
            "Monaco",
            "Neon",
            "Nitro",
            "Omni",
            "Raider",
            "Ram 1500 Truck",
            "Ram 2500 Truck",
            "Ram 3500 Truck",
            "Ram 4500 Truck",
            "Ram 50 Truck",
            "RAM C/V",
            "Ram SRT-10",
            "Ram Van",
            "Ram Wagon",
            "Ramcharger",
            "Rampage",
            "Shadow",
            "Spirit",
            "Sprinter",
            "SRT-4",
            "St. Regis",
            "Stealth",
            "Stratus",
            "Viper"
        ]
    },
    {
        "brand": "Eagle",
        "models": [
            "Medallion",
            "Premier",
            "Summit",
            "Talon",
            "Vision"
        ]
    },
    {
        "brand": "Ferrari",
        "models": [
            "308 GTB Quattrovalvole",
            "308 GTBI",
            "308 GTS Quattrovalvole",
            "308 GTSI",
            "328 GTB",
            "328 GTS",
            "348 GTB",
            "348 GTS",
            "348 Spider",
            "348 TB",
            "348 TS",
            "360",
            "456 GT",
            "456M GT",
            "458 Italia",
            "512 BBi",
            "512M",
            "512TR",
            "550 Maranello",
            "575M Maranello",
            "599 GTB Fiorano",
            "599 GTO",
            "612 Scaglietti",
            "California",
            "Enzo",
            "F355",
            "F40",
            "F430",
            "F50",
            "FF",
            "Mondial",
            "Testarossa"
        ]
    },
    {
        "brand": "FIAT",
        "models": [
            "2000 Spider",
            "500",
            "Bertone X1/9",
            "Brava",
            "Pininfarina Spider",
            "Strada",
            "X1/9"
        ]
    },
    {
        "brand": "Fisker",
        "models": [
            "Karma"
        ]
    },
    {
        "brand": "Ford",
        "models": [
            "Aerostar",
            "Aspire",
            "Bronco",
            "Bronco II",
            "C-MAX",
            "Club Wagon",
            "Contour",
            "Courier",
            "Crown Victoria",
            "E-150 and Econoline 150",
            "E-250 and Econoline 250",
            "E-350 and Econoline 350",
            "Edge",
            "Escape",
            "Escort",
            "Excursion",
            "EXP",
            "Expedition",
            "Expedition EL",
            "Explorer",
            "Explorer Sport Trac",
            "F100",
            "F150",
            "F250",
            "F350",
            "F450",
            "Fairmont",
            "Festiva",
            "Fiesta",
            "Five Hundred",
            "Flex",
            "Focus",
            "Freestar",
            "Freestyle",
            "Fusion",
            "Granada",
            "GT",
            "LTD",
            "Mustang",
            "Probe",
            "Ranger",
            "Taurus",
            "Taurus X",
            "Tempo",
            "Thunderbird",
            "Transit Connect",
            "Windstar",
            "ZX2 Escort"
        ]
    },
    {
        "brand": "Freightliner",
        "models": [
            "Sprinter"
        ]
    },
    {
        "brand": "Geo",
        "models": [
            "Metro",
            "Prizm",
            "Spectrum",
            "Storm",
            "Tracker"
        ]
    },
    {
        "brand": "GMC",
        "models": [
            "Acadia",
            "Caballero",
            "Canyon",
            "Envoy",
            "Envoy XL",
            "Envoy XUV",
            "Jimmy",
            "Rally Wagon",
            "S15 Jimmy",
            "S15 Pickup",
            "Safari",
            "Savana",
            "Sierra C/K1500",
            "Sierra C/K2500",
            "Sierra C/K3500",
            "Sonoma",
            "Suburban",
            "Syclone",
            "Terrain",
            "TopKick C4500",
            "Typhoon",
            "Vandura",
            "Yukon",
            "Yukon XL"
        ]
    },
    {
        "brand": "Honda",
        "models": [
            "Accord",
            "Civic",
            "CR-V",
            "CR-Z",
            "CRX",
            "Accord Crosstour",
            "Crosstour",
            "Del Sol",
            "Element",
            "Fit",
            "Insight",
            "Odyssey",
            "Passport",
            "Pilot",
            "Prelude",
            "Ridgeline",
            "S2000"
        ]
    },
    {
        "brand": "HUMMER",
        "models": [
            "H1",
            "H2",
            "H3",
            "H3T"
        ]
    },
    {
        "brand": "Hyundai",
        "models": [
            "Accent",
            "Azera",
            "Elantra",
            "Elantra Coupe",
            "Elantra Touring",
            "Entourage",
            "Equus",
            "Excel",
            "Genesis",
            "Genesis Coupe",
            "Santa Fe",
            "Scoupe",
            "Sonata",
            "Tiburon",
            "Tucson",
            "Veloster",
            "Veracruz",
            "XG300",
            "XG350"
        ]
    },
    {
        "brand": "Infiniti",
        "models": [
            "EX35",
            "EX37",
            "FX35",
            "FX37",
            "FX45",
            "FX50",
            "G20",
            "G25",
            "G35",
            "G37",
            "I30",
            "I35",
            "J30",
            "JX35",
            "M30",
            "M35",
            "M35h",
            "M37",
            "M45",
            "M56",
            "Q45",
            "QX4",
            "QX56"
        ]
    },
    {
        "brand": "Isuzu",
        "models": [
            "Amigo",
            "Ascender",
            "Axiom",
            "Hombre",
            "i-280",
            "i-290",
            "i-350",
            "i-370",
            "I-Mark",
            "Impulse",
            "Oasis",
            "Pickup",
            "Rodeo",
            "Stylus",
            "Trooper",
            "Trooper II",
            "VehiCROSS"
        ]
    },
    {
        "brand": "Jaguar",
        "models": [
            "S-Type",
            "X-Type",
            "XF",
            "XJ12",
            "XJ6",
            "XJR",
            "XJR-S",
            "XJS",
            "XJ Vanden Plas",
            "XJ",
            "XJ8",
            "XJ8 L",
            "XJ Sport",
            "XK8",
            "XK",
            "XKR"
        ]
    },
    {
        "brand": "Jeep",
        "models": [
            "Cherokee",
            "CJ",
            "Comanche",
            "Commander",
            "Compass",
            "Grand Cherokee",
            "Grand Wagoneer",
            "Liberty",
            "Patriot",
            "Pickup",
            "Scrambler",
            "Wagoneer",
            "Wrangler"
        ]
    },
    {
        "brand": "Kia",
        "models": [
            "Amanti",
            "Borrego",
            "Forte",
            "Forte Koup",
            "Optima",
            "Rio",
            "Rio5",
            "Rondo",
            "Sedona",
            "Sephia",
            "Sorento",
            "Soul",
            "Spectra",
            "Spectra5",
            "Sportage"
        ]
    },
    {
        "brand": "Lamborghini",
        "models": [
            "Aventador",
            "Countach",
            "Diablo",
            "Gallardo",
            "Jalpa",
            "LM002",
            "Murcielago"
        ]
    },
    {
        "brand": "Lancia",
        "models": [
            "Beta",
            "Zagato"
        ]
    },
    {
        "brand": "Land Rover",
        "models": [
            "Defender",
            "Discovery",
            "Freelander",
            "LR2",
            "LR3",
            "LR4",
            "Range Rover",
            "Range Rover Evoque",
            "Range Rover Sport"
        ]
    },
    {
        "brand": "Lexus",
        "models": [
            "CT 200h",
            "ES 250",
            "ES 300",
            "ES 300h",
            "ES 330",
            "ES 350",
            "GS 300",
            "GS 350",
            "GS 400",
            "GS 430",
            "GS 450h",
            "GS 460",
            "GX 460",
            "GX 470",
            "HS 250h",
            "IS 250",
            "IS 250C",
            "IS 300",
            "IS 350",
            "IS 350C",
            "IS F",
            "LFA",
            "LS 400",
            "LS 430",
            "LS 460",
            "LS 600h",
            "LX 450",
            "LX 470",
            "LX 570",
            "RX 300",
            "RX 330",
            "RX 350",
            "RX 400h",
            "RX 450h",
            "SC 300",
            "SC 400",
            "SC 430"
        ]
    },
    {
        "brand": "Lincoln",
        "models": [
            "Aviator",
            "Blackwood",
            "Continental",
            "LS",
            "Mark LT",
            "Mark VI",
            "Mark VII",
            "Mark VIII",
            "MKS",
            "MKT",
            "MKX",
            "MKZ",
            "Navigator",
            "Navigator L",
            "Town Car",
            "Zephyr"
        ]
    },
    {
        "brand": "Lotus",
        "models": [
            "Elan",
            "Elise",
            "Esprit",
            "Evora",
            "Exige"
        ]
    },
    {
        "brand": "Maserati",
        "models": [
            "430",
            "Biturbo",
            "Coupe",
            "GranSport",
            "GranTurismo",
            "Quattroporte",
            "Spyder"
        ]
    },
    {
        "brand": "Maybach",
        "models": [
            "57",
            "62"
        ]
    },
    {
        "brand": "Mazda",
        "models": [
            "323",
            "626",
            "929",
            "B-Series Pickup",
            "CX-5",
            "CX-7",
            "CX-9",
            "GLC",
            "MAZDA2",
            "MAZDA3",
            "MAZDA5",
            "MAZDA6",
            "MAZDASPEED3",
            "MAZDASPEED6",
            "Miata MX5",
            "Millenia",
            "MPV",
            "MX3",
            "MX6",
            "Navajo",
            "Protege",
            "Protege5",
            "RX-7",
            "RX-8",
            "Tribute"
        ]
    },
    {
        "brand": "McLaren",
        "models": [
            "MP4-12C"
        ]
    },
    {
        "brand": "Mercedes-Benz",
        "models": [
            "190D",
            "190E",
            "240D",
            "300CD",
            "300CE",
            "300D",
            "300E",
            "300TD",
            "300TE",
            "C220",
            "C230",
            "C240",
            "C250",
            "C280",
            "C300",
            "C320",
            "C32 AMG",
            "C350",
            "C36 AMG",
            "C43 AMG",
            "C55 AMG",
            "C63 AMG",
            "CL500",
            "CL550",
            "CL55 AMG",
            "CL600",
            "CL63 AMG",
            "CL65 AMG",
            "CLK320",
            "CLK350",
            "CLK430",
            "CLK500",
            "CLK550",
            "CLK55 AMG",
            "CLK63 AMG",
            "CLS500",
            "CLS550",
            "CLS55 AMG",
            "CLS63 AMG",
            "260E",
            "280CE",
            "280E",
            "400E",
            "500E",
            "E300",
            "E320",
            "E320 Bluetec",
            "E320 CDI",
            "E350",
            "E350 Bluetec",
            "E400 Hybrid",
            "E420",
            "E430",
            "E500",
            "E550",
            "E55 AMG",
            "E63 AMG",
            "G500",
            "G550",
            "G55 AMG",
            "G63 AMG",
            "GL320 Bluetec",
            "GL320 CDI",
            "GL350 Bluetec",
            "GL450",
            "GL550",
            "GLK350",
            "ML320",
            "ML320 Bluetec",
            "ML320 CDI",
            "ML350",
            "ML350 Bluetec",
            "ML430",
            "ML450 Hybrid",
            "ML500",
            "ML550",
            "ML55 AMG",
            "ML63 AMG",
            "R320 Bluetec",
            "R320 CDI",
            "R350",
            "R350 Bluetec",
            "R500",
            "R63 AMG",
            "300SD",
            "300SDL",
            "300SE",
            "300SEL",
            "350SD",
            "350SDL",
            "380SE",
            "380SEC",
            "380SEL",
            "400SE",
            "400SEL",
            "420SEL",
            "500SEC",
            "500SEL",
            "560SEC",
            "560SEL",
            "600SEC",
            "600SEL",
            "S320",
            "S350",
            "S350 Bluetec",
            "S400 Hybrid",
            "S420",
            "S430",
            "S500",
            "S550",
            "S55 AMG",
            "S600",
            "S63 AMG",
            "S65 AMG",
            "300SL",
            "380SL",
            "380SLC",
            "500SL",
            "560SL",
            "600SL",
            "SL320",
            "SL500",
            "SL550",
            "SL55 AMG",
            "SL600",
            "SL63 AMG",
            "SL65 AMG",
            "SLK230",
            "SLK250",
            "SLK280",
            "SLK300",
            "SLK320",
            "SLK32 AMG",
            "SLK350",
            "SLK55 AMG",
            "SLR",
            "SLS AMG",
            "Sprinter"
        ]
    },
    {
        "brand": "Mercury",
        "models": [
            "Capri",
            "Cougar",
            "Grand Marquis",
            "Lynx",
            "Marauder",
            "Mariner",
            "Marquis",
            "Milan",
            "Montego",
            "Monterey",
            "Mountaineer",
            "Mystique",
            "Sable",
            "Topaz",
            "Tracer",
            "Villager",
            "Zephyr"
        ]
    },
    {
        "brand": "Merkur",
        "models": [
            "Scorpio",
            "XR4Ti"
        ]
    },
    {
        "brand": "MINI",
        "models": [
            "Cooper Clubman",
            "Cooper S Clubman",
            "Cooper Countryman",
            "Cooper S Countryman",
            "Cooper Coupe",
            "Cooper S Coupe",
            "Cooper",
            "Cooper S",
            "Cooper Roadster",
            "Cooper S Roadster"
        ]
    },
    {
        "brand": "Mitsubishi",
        "models": [
            "3000GT",
            "Cordia",
            "Diamante",
            "Eclipse",
            "Endeavor",
            "Expo",
            "Galant",
            "i",
            "Lancer",
            "Lancer Evolution",
            "Mighty Max",
            "Mirage",
            "Montero",
            "Montero Sport",
            "Outlander",
            "Outlander Sport",
            "Precis",
            "Raider",
            "Sigma",
            "Starion",
            "Tredia",
            "Van"
        ]
    },
    {
        "brand": "Nissan",
        "models": [
            "200SX",
            "240SX",
            "300ZX",
            "350Z",
            "370Z",
            "Altima",
            "Armada",
            "Axxess",
            "Cube",
            "Frontier",
            "GT-R",
            "Juke",
            "Leaf",
            "Maxima",
            "Murano",
            "Murano CrossCabriolet",
            "NV",
            "NX",
            "Pathfinder",
            "Pickup",
            "Pulsar",
            "Quest",
            "Rogue",
            "Sentra",
            "Stanza",
            "Titan",
            "Van",
            "Versa",
            "Xterra"
        ]
    },
    {
        "brand": "Oldsmobile",
        "models": [
            "88",
            "Achieva",
            "Alero",
            "Aurora",
            "Bravada",
            "Custom Cruiser",
            "Cutlass",
            "Cutlass Calais",
            "Cutlass Ciera",
            "Cutlass Supreme",
            "Firenza",
            "Intrigue",
            "Ninety-Eight",
            "Omega",
            "Regency",
            "Silhouette",
            "Toronado"
        ]
    },
    {
        "brand": "Peugeot",
        "models": [
            "405",
            "504",
            "505",
            "604"
        ]
    },
    {
        "brand": "Plymouth",
        "models": [
            "Acclaim",
            "Arrow",
            "Breeze",
            "Caravelle",
            "Champ",
            "Colt",
            "Conquest",
            "Gran Fury",
            "Grand Voyager",
            "Horizon",
            "Laser",
            "Neon",
            "Prowler",
            "Reliant",
            "Sapporo",
            "Scamp",
            "Sundance",
            "Trailduster",
            "Voyager"
        ]
    },
    {
        "brand": "Pontiac",
        "models": [
            "1000",
            "6000",
            "Aztek",
            "Bonneville",
            "Catalina",
            "Fiero",
            "Firebird",
            "G3",
            "G5",
            "G6",
            "G8",
            "Grand Am",
            "Grand Prix",
            "GTO",
            "J2000",
            "Le Mans",
            "Montana",
            "Parisienne",
            "Phoenix",
            "Safari",
            "Solstice",
            "Sunbird",
            "Sunfire",
            "Torrent",
            "Trans Sport",
            "Vibe"
        ]
    },
    {
        "brand": "Porsche",
        "models": [
            "911",
            "924",
            "928",
            "944",
            "968",
            "Boxster",
            "Carrera GT",
            "Cayenne",
            "Cayman",
            "Panamera"
        ]
    },
    {
        "brand": "RAM",
        "models": [
            "1500",
            "2500",
            "3500",
            "4500"
        ]
    },
    {
        "brand": "Renault",
        "models": [
            "18i",
            "Fuego",
            "Le Car",
            "R18",
            "Sportwagon"
        ]
    },
    {
        "brand": "Rolls-Royce",
        "models": [
            "Camargue",
            "Corniche",
            "Ghost",
            "Park Ward",
            "Phantom",
            "Silver Dawn",
            "Silver Seraph",
            "Silver Spirit",
            "Silver Spur"
        ]
    },
    {
        "brand": "Saab",
        "models": [
            "9-2X",
            "9-3",
            "9-4X",
            "9-5",
            "9-7X",
            "900",
            "9000"
        ]
    },
    {
        "brand": "Saturn",
        "models": [
            "Astra",
            "Aura",
            "ION",
            "L100",
            "L200",
            "L300",
            "LS",
            "LW1",
            "LW2",
            "LW200",
            "LW300",
            "Outlook",
            "Relay",
            "SC1",
            "SC2",
            "Sky",
            "SL",
            "SL1",
            "SL2",
            "SW1",
            "SW2",
            "Vue"
        ]
    },
    {
        "brand": "Scion",
        "models": [
            "FR-S",
            "iQ",
            "tC",
            "xA",
            "xB",
            "xD"
        ]
    },
    {
        "brand": "smart",
        "models": [
            "fortwo"
        ]
    },
    {
        "brand": "SRT",
        "models": [
            "Viper"
        ]
    },
    {
        "brand": "Sterling",
        "models": [
            "825",
            "827"
        ]
    },
    {
        "brand": "Subaru",
        "models": [
            "Baja",
            "Brat",
            "BRZ",
            "Forester",
            "Impreza",
            "Impreza WRX",
            "Justy",
            "L Series",
            "Legacy",
            "Loyale",
            "Outback",
            "SVX",
            "Tribeca",
            "XT",
            "XV Crosstrek"
        ]
    },
    {
        "brand": "Suzuki",
        "models": [
            "Aerio",
            "Equator",
            "Esteem",
            "Forenza",
            "Grand Vitara",
            "Kizashi",
            "Reno",
            "Samurai",
            "Sidekick",
            "Swift",
            "SX4",
            "Verona",
            "Vitara",
            "X-90",
            "XL7"
        ]
    },
    {
        "brand": "Tesla",
        "models": [
            "Roadster",
            "Model S"
        ]
    },
    {
        "brand": "Toyota",
        "models": [
            "4Runner",
            "Avalon",
            "Camry",
            "Celica",
            "Corolla",
            "Corona",
            "Cressida",
            "Echo",
            "FJ Cruiser",
            "Highlander",
            "Land Cruiser",
            "Matrix",
            "MR2",
            "MR2 Spyder",
            "Paseo",
            "Pickup",
            "Previa",
            "Prius",
            "Prius C",
            "Prius V",
            "RAV4",
            "Sequoia",
            "Sienna",
            "Solara",
            "Starlet",
            "Supra",
            "T100",
            "Tacoma",
            "Tercel",
            "Tundra",
            "Van",
            "Venza",
            "Yaris"
        ]
    },
    {
        "brand": "Triumph",
        "models": [
            "TR7",
            "TR8"
        ]
    },
    {
        "brand": "Volkswagen",
        "models": [
            "Beetle",
            "Cabrio",
            "Cabriolet",
            "CC",
            "Corrado",
            "Dasher",
            "Eos",
            "Eurovan",
            "Fox",
            "GLI",
            "Golf R",
            "GTI",
            "Golf",
            "Rabbit",
            "Jetta",
            "Passat",
            "Phaeton",
            "Pickup",
            "Quantum",
            "R32",
            "Routan",
            "Scirocco",
            "Tiguan",
            "Touareg",
            "Vanagon"
        ]
    },
    {
        "brand": "Volvo",
        "models": [
            "240",
            "260",
            "740",
            "760",
            "780",
            "850",
            "940",
            "960",
            "C30",
            "C70",
            "S40",
            "S60",
            "S70",
            "S80",
            "S90",
            "V40",
            "V50",
            "V70",
            "V90",
            "XC60",
            "XC70",
            "XC90"
        ]
    },
    {
        "brand": "Yugo",
        "models": [
            "GV",
            "GVC",
            "GVL",
            "GVS",
            "GVX"
        ]
    }
];


/***/ }),

/***/ "./src/scripts/createCars.ts":
/*!***********************************!*\
  !*** ./src/scripts/createCars.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCar": () => (/* binding */ createCar),
/* harmony export */   "loadCar": () => (/* binding */ loadCar)
/* harmony export */ });
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./src/scripts/car.ts");
/* harmony import */ var _generateCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCars */ "./src/scripts/generateCars.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./src/scripts/pagination.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function loadCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const box = document.querySelector('.cars-box');
        box.innerHTML = "";
        let response = yield fetch("http://127.0.0.1:3000/garage")
            .then((response) => response.json())
            .then((result) => {
            return result;
        });
        const carCounter = document.getElementById('carsTotal');
        const generateMoreButton = document.createElement('button');
        generateMoreButton.classList.add('garage__button');
        generateMoreButton.id = 'generate-button';
        generateMoreButton.textContent = '  >>Generate more!';
        carCounter.textContent = `Cars total: ${response.length}`;
        carCounter === null || carCounter === void 0 ? void 0 : carCounter.append(generateMoreButton);
        response = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.pagination)(response);
        response.forEach((x) => {
            console.log(response);
            const newCar = document.createElement('div');
            newCar.classList.add('car');
            newCar.innerHTML = (0,_car__WEBPACK_IMPORTED_MODULE_0__.getCarHtml)(x.name, x.color);
            newCar.id = x.id.toString();
            box === null || box === void 0 ? void 0 : box.append(newCar);
        });
        document.getElementById('cars').scrollIntoView();
    });
}
function createCar(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("http://127.0.0.1:3000/garage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    });
}
document.addEventListener('click', () => {
    const button = document.getElementById("garage-create");
    if ((event === null || event === void 0 ? void 0 : event.target) === button) {
        const name = document.getElementById("name");
        const color = document.getElementById("color");
        const data = { name: name.value, color: color.value };
        if (name.value === '') {
            throw new Error("can't create car without name");
        }
        createCar(data);
        name.value === '';
        loadCar();
    }
});
document.addEventListener('click', () => {
    const button = document.getElementById("generate-button");
    if ((event === null || event === void 0 ? void 0 : event.target) === button) {
        (0,_generateCars__WEBPACK_IMPORTED_MODULE_1__.OneHundredCars)();
    }
});


/***/ }),

/***/ "./src/scripts/generateCars.ts":
/*!*************************************!*\
  !*** ./src/scripts/generateCars.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneHundredCars": () => (/* binding */ OneHundredCars)
/* harmony export */ });
/* harmony import */ var _carNamesArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carNamesArray */ "./src/scripts/carNamesArray.ts");
/* harmony import */ var _createCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCars */ "./src/scripts/createCars.ts");


function generateCar() {
    const nameObject = _carNamesArray__WEBPACK_IMPORTED_MODULE_0__.carNamesArray[Math.floor(Math.random() * _carNamesArray__WEBPACK_IMPORTED_MODULE_0__.carNamesArray.length)];
    const nameObjectBrand = nameObject.brand;
    const nameObjectModel = nameObject.models[Math.floor(Math.random() * nameObject.models.length)];
    const name = nameObjectBrand + ' ' + nameObjectModel;
    const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    const newCar = { name, color };
    (0,_createCars__WEBPACK_IMPORTED_MODULE_1__.createCar)(newCar);
}
function OneHundredCars() {
    for (let i = 0; i < 100; i++) {
        generateCar();
    }
    window.setTimeout(_createCars__WEBPACK_IMPORTED_MODULE_1__.loadCar, 10);
}


/***/ }),

/***/ "./src/scripts/pagination.ts":
/*!***********************************!*\
  !*** ./src/scripts/pagination.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagination": () => (/* binding */ pagination)
/* harmony export */ });
/* harmony import */ var _createCars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCars */ "./src/scripts/createCars.ts");

let currentPage = 1;
const itemsRow = 7;
const buttonPrevious = document.getElementById('previous');
const buttonNext = document.getElementById('next');
function pagination(response) {
    if (currentPage === 1) {
        return response.slice(0, 7);
    }
    else {
        const first = (currentPage - 1) * itemsRow;
        const last = currentPage * itemsRow;
        return response.slice(first, last);
    }
}
function changePageNumber() {
    const counter = document.getElementById('pagesTotal');
    counter.textContent = `Current page: ${currentPage}`;
}
buttonPrevious === null || buttonPrevious === void 0 ? void 0 : buttonPrevious.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
    }
    changePageNumber();
    (0,_createCars__WEBPACK_IMPORTED_MODULE_0__.loadCar)();
});
buttonNext === null || buttonNext === void 0 ? void 0 : buttonNext.addEventListener('click', () => {
    currentPage++;
    changePageNumber();
    (0,_createCars__WEBPACK_IMPORTED_MODULE_0__.loadCar)();
});


/***/ }),

/***/ "./src/assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg":
/*!***************************************************************!*\
  !*** ./src/assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/flag_circle_FILL0_wght400_GRAD0_opsz40..svg";

/***/ }),

/***/ "./src/assets/racer.png":
/*!******************************!*\
  !*** ./src/assets/racer.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/racer..png";

/***/ }),

/***/ "./src/assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg":
/*!***************************************************************!*\
  !*** ./src/assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/restart_alt_FILL0_wght400_GRAD0_opsz40..svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_racer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/racer.png */ "./src/assets/racer.png");
/* harmony import */ var _assets_flag_circle_FILL0_wght400_GRAD0_opsz40_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg */ "./src/assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg");
/* harmony import */ var _assets_restart_alt_FILL0_wght400_GRAD0_opsz40_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg */ "./src/assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _carButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carButtons */ "./src/scripts/carButtons.ts");
/* harmony import */ var _createCars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createCars */ "./src/scripts/createCars.ts");
// import * as index from './index'






const garagePic = document.querySelector('.garage__pic');
garagePic.style.background = `url("./assets/racer.png")`;
garagePic.style.backgroundSize = "200%";
garagePic.style.backgroundPosition = "center";
garagePic.style.backgroundRepeat = "no-repeat";
// const carStartButton = document.querySelector('.car__start-button') as HTMLElement;
// carStartButton.style.background = `url("./assets/flag_circle_FILL0_wght400_GRAD0_opsz40.svg")`;
// carStartButton.style.backgroundSize = "100%";
// carStartButton.style.backgroundPosition = "center";
// const carResetButton = document.querySelector('.car__start-reset') as HTMLElement;
// carResetButton.style.background = `url("./assets/restart_alt_FILL0_wght400_GRAD0_opsz40.svg")`;
// carResetButton.style.backgroundSize = "100%";
// carResetButton.style.backgroundPosition = "center";
(0,_createCars__WEBPACK_IMPORTED_MODULE_5__.loadCar)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map