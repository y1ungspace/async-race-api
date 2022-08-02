
export function getCarHtml(name: string, color: string) {
return `<h5 class="car__name">${name}</h5><div class="car__buttons"> <button class="car__start-button"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M8.333 35V6.667h14.542l.75 3.5h9.708V26h-11l-.75-3.458H11.125V35Zm12.5-18.667Zm3.834 6.875h5.875v-10.25h-9.25l-.75-3.5h-9.417V19.75h12.792Z"/></svg></button><button class="car__start-reset"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="#FFFFFF"><path d="M18.625 34.917q-5.083-.5-8.521-4.271-3.437-3.771-3.437-8.938 0-3.083 1.354-5.812t3.771-4.521l2 1.958q-2.084 1.417-3.209 3.625-1.125 2.209-1.125 4.75 0 4 2.604 6.959 2.605 2.958 6.563 3.458Zm2.792 0v-2.792q4-.542 6.583-3.479 2.583-2.938 2.583-6.938 0-4.416-3.062-7.5-3.063-3.083-7.479-3.083h-.625l2.291 2.292-1.958 1.958-5.667-5.625 5.667-5.625 1.958 1.958-2.291 2.292h.625q5.583 0 9.458 3.875t3.875 9.458q0 5.125-3.437 8.917-3.438 3.792-8.521 4.292Z"/></svg></button><button class="car__edit-button"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m16.5 35 6.125-6.125h14.042V35ZM6.125 32.208h2l17.083-17.083-2-2L6.125 30.208Zm25-19.083L25.208 7.25l1.917-1.958q.792-.792 1.979-.771 1.188.021 1.979.812l1.959 1.959q.791.791.812 1.937.021 1.146-.771 1.938Zm-2 2L9.25 35H3.333v-5.917L23.208 9.208Zm-4.917-1-1-1 2 2Z"/></svg></button></div><div class="car__image"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="100" height="32" fill=${color}><path fill-rule="evenodd" d="m4.1 67l3.9-3.6c0 0 11.6 2.1 19.5 1.8 7.8-0.3 16.4-11.7 8-11.5-2 0-4.2-0.4-6.3-1q0 0 0 0c-7.1-1.9-14-6.1-14-6.1l-4.2-9c0 0-4.4-7.5 4.6-6.9 9 0.6 18.9 4.4 18.9 4.4 0 0 87.6-21.5 104.7-24.8 17.1-3.3 89.6-17.6 153.3 14.5 0 0 40.2 18.9 44.1 19.2 0 0 119.9 5.8 159.4 41 0 0 0.6 12.9 0 21.3 0 0 1.8 5.4-1.3 10.6 0 0 2.1 4.2-1.4 3.6l-1.1 8.7c0 0-4.2-2.1-6.1 4.9 0 0-22.1 5.4-28.1 4.1 0 0 6.7-66.9-41.5-66.9-48.1 0-52.7 42.5-53.4 67.1l-1.8 1.5c0 0-212.6-6.3-218.3-2.8 0 0-2.1 0-1.7-4 0 0 6.9-65.5-50.2-65.5-57.2 0-44.2 61.3-44.2 61.3 0 0-42.8-9.6-36.3-16.1 0 0-14.9-20.3-6.5-45.8zm366.1 5.1c3.2-3.9-41.9-4.4-41.9-4.4 0 0-5 4.8-3.3 9.3 1.6 4.5 25.1 3.8 31.8 3.1 6.8-0.8 13.4-8 13.4-8zm-81-19.7c0 0 22.5 0.2 25.6 0 3-0.3 1.9-1.5 1.9-1.5 0 0-5.6-7.7-44.6-24.3-38.9-16.5-62-14.1-62-14.1-107.7 3-87.9 16.1-87.9 16.1l8.1 9.4 25.2 4.8 110 6.9zm-102.6 7.1c0 1.2 1 2.2 2.2 2.2h17.7c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3h-17.7c-1.2 0-2.2 1-2.2 2.3zm134.4 18.7c0 0 0.8 34.1-3 42.3l-94.8-3c0 0-28.7 1-39.4-19.8 0 0-9.1-19-10.5-25.5 0.3 2.2 4 37.5 22.9 42.7 19.7 5.4 124.8 8.2 124.8 8.2 0 0 4.1-35.1 0-44.9zm46 18q0.2-0.3 0.5-0.8 0.6-0.9 1.3-2 0.2-0.3 0.4-0.7 0.5-0.7 1.1-1.5 0.2-0.3 0.4-0.6c0.9-1.1 1.8-2.3 2.8-3.5q0.4-0.5 0.8-0.9c2.2-2.5 4.7-5 7.7-7.4q0.4-0.3 0.8-0.6 0.4-0.3 0.8-0.6 1.1-0.8 2.3-1.6 0.8-0.5 1.6-1.1 1.3-0.7 2.6-1.4 0.9-0.5 1.9-0.9 0.4-0.2 0.8-0.4 0.4-0.2 0.8-0.4 0.8-0.3 1.6-0.7 1-0.3 1.9-0.6 1.3-0.5 2.6-0.8 0.4-0.2 0.9-0.3 1-0.2 2.1-0.5 1.1-0.2 2.2-0.4 0.7-0.1 1.4-0.2 0.1 0 0.1 0 0.6-0.1 1.2-0.1 1-0.1 2.1-0.2 0.7 0 1.5 0 1.5-0.1 3.1 0c34.1 1 44 31.3 44 31.3h8.2c0 0 9.9-5.8 19.8-5.1 10 0.8 3.3-4.3-8.4-6.5-11.7-2.1-22.6-14.4-24.4-17.7-1.8-3.3-45.4-14-72.6-12.8 0 0 40 2 70 14.9 0 0 1.1 4.1-11.7 0q-1.6-0.5-3.7-1.3-0.7-0.2-1.5-0.5-2.2-0.8-4.9-1.6-1.7-0.5-3.6-1-0.8-0.2-1.5-0.4-0.7-0.2-1.5-0.3-0.7-0.2-1.5-0.3-0.8-0.2-1.6-0.3-0.9-0.2-1.9-0.3-1-0.2-2-0.2-0.6-0.1-1.1-0.1-0.7-0.1-1.4-0.1-0.1 0-0.3 0-1-0.1-2.1-0.1-1 0-2 0.1-1.1 0-2.1 0.1-0.7 0.1-1.4 0.2-0.6 0-1.1 0.1-0.7 0.1-1.5 0.2-0.2 0.1-0.4 0.1-0.7 0.1-1.3 0.3c-0.5 0.1-0.9 0.2-1.4 0.4q-0.7 0.1-1.4 0.4-0.8 0.2-1.5 0.4-1.4 0.5-2.9 1.1-0.7 0.3-1.4 0.7-1.6 0.7-3.2 1.7-0.5 0.3-1.1 0.7c-0.2 0.1-0.4 0.3-0.6 0.4q-0.4 0.2-0.7 0.5-0.3 0.2-0.6 0.4 0 0 0 0-0.5 0.3-1 0.6-0.5 0.4-1 0.8-0.1 0.1-0.2 0.2-0.4 0.3-0.7 0.6-0.6 0.5-1.2 1-0.6 0.5-1.1 1-0.6 0.5-1.1 1.1-0.1 0.1-0.3 0.2-0.7 0.7-1.4 1.5-1.2 1.3-2.4 2.7-0.4 0.6-0.9 1.2-1.7 2.2-3.4 4.7-0.7 0.9-1.3 2-1.5 2.3-2.9 5-0.2 0.3-0.3 0.6 0.1-0.1 0.2-0.4zm125.8-8.5c-11.7-13.7-33.5-15.6-33.5-15.6 16.3 14.6 33.5 15.6 33.5 15.6zm-345.7 42.5l210.1 4.4c8.4-3.4-23.7-5.1-23.7-5.1 0 0-144.4-5.2-157.6-5.2-13.3 0-18.6 1.3-26.3 2.6-7.6 1.3-2.5 3.3-2.5 3.3zm-5.6-32.5c33.7-21.2 17.8-28.8 17.8-28.8 7.9-1.4 152.8 2.9 161.3 3.2-8.3-0.4-142.8-6.9-166.7-6.9-24.6 0.1-25.4 8.6-25.4 8.6-21.8-10.9-32.1-8.3-32.1-8.3 33.4 1.4 45.1 32.2 45.1 32.2zm-106.6-3.8c3.3 3.8 8.6 5.7 8.6 5.1 1-12.6 10.1-21.6 10.1-21.6-16 4.2-47.2-9-47.2-9-3.2 4.7-1.9 11.9-1.9 11.9 18.4 1.1 27.2 9.7 30.4 13.6zm183.3-79c33.3 0.8 93.3 34.8 93.3 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.6-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.1-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.2 2.7 4.1 5.8 12.7 6.6 14.8-17.4-1.2-31.6-2.4-34.8-3.2-9.7-2.3-16.3 0.5-22.2-9.7-5.8-10.2 56.3-15.3 89.7-14.5zm-68.5 18.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.6-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3 0.6 0 3.7zm179.9 38.5h33.2c0.8 0 1.4 0.6 1.4 1.4 0 0.7-0.6 1.3-1.4 1.3h-33.2c-0.8 0-1.4-0.6-1.4-1.3 0-0.8 0.6-1.4 1.4-1.4zm-142.5-30.8c0 0 57.2 5 65.6 4.3 0 0-0.2-7.3 4.7-6.9 0 0-4.1 4.8 0.1 7.8 0 0-25.6 2.1-70.4-5.2z"/><path d="m492.5 125.3c0 0-3.9 0.3-4 4.4l-26 4.7c0 0 47.9-1.2 30-9.1z"/><path d="m365.5 99q0.2-0.4 0.4-0.7-0.3 0.4-0.4 0.7z"/><path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/><path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/><path fill-rule="evenodd" d="m218.1 14.9c33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5zm-68.4 18.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/><path fill-rule="evenodd" d="m185.4 42.3c-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5 33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9zm-35.7-8.7c3.1 3 14.5 4.4 14.5 4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/><path d="m276.8 36.1c7.2 3.2 4 8.6 3.9 10.3 0 1.8-16.1 4.5-18.2-1.2-2-5.6 2-10.9 2-10.9 0 0 5.2-1.4 12.3 1.8z"/><path fill-rule="evenodd" d="m411.5 77.2c22.1 0 40.1 18 40.1 40.2 0 22.2-18 40.2-40.1 40.2-22.2 0-40.2-18-40.2-40.2 0-22.2 18-40.2 40.2-40.2zm-32.5 40.2c0 18 14.5 32.5 32.5 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-18 0-32.5 14.5-32.5 32.5zm10-20.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m415.8 115.7c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/><path d="m412.9 121.8q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m411.5 86.8c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/><path d="m407.9 120.4c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2z"/><path d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7z"/><path fill-rule="evenodd" d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m406.8 117.1q0 0 0.1-0.1c0-0.7 0.2-1.4 0.6-2q0 0 0-0.1c0.7-1 1.8-1.8 3.1-2q0 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 0 0.1 0.1c1.2 0.4 2.2 1.3 2.7 2.5q0.1 0 0.1 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.2 1-0.6 1.9-1.3 2.6q0 0.1-0.1 0.1-0.7 0.8-1.8 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.9-0.4l0.1-0.1q-0.1 0-0.1 0.1c-0.6-0.3-1.2-0.7-1.7-1.3q0 0 0-0.1c-0.7-0.8-1.1-1.8-1.1-2.9q0-0.1 0-0.3z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/><path fill-rule="evenodd" d="m92.1 72.8c22.2 0 40.1 18 40.1 40.2 0 22.2-17.9 40.2-40.1 40.2-22.2 0-40.1-18-40.1-40.2 0-22.2 17.9-40.2 40.1-40.2zm-32.4 40.2c0 18 14.5 32.5 32.4 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-17.9 0-32.4 14.5-32.4 32.5zm9.9-20.7c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/><path d="m96.4 111.3c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/><path d="m93.5 117.4q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/><path d="m90.3 117.2v0.1q0-0.1 0-0.1z"/><path d="m92.1 82.4c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/><path d="m88.6 116c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2z"/><path d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7z"/><path fill-rule="evenodd" d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/><path d="m87.5 112.7q0 0 0 0c0-0.8 0.3-1.5 0.6-2.1q0.1 0 0.1-0.1c0.6-1 1.7-1.8 3-2q0.1 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 0 0.1 0.1c1.3 0.4 2.2 1.3 2.8 2.5q0 0 0 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.1 1-0.6 1.9-1.3 2.6q0 0.1 0 0.1-0.8 0.8-1.9 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.8-0.4v-0.1q0 0 0 0.1c-0.7-0.3-1.3-0.7-1.7-1.3q-0.1 0-0.1-0.1c-0.6-0.7-1-1.8-1-2.9q0-0.1 0-0.3z"/</svg></div><div class="car__road"></div></div>`
}

