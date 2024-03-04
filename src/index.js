import './style.css';
import './factories.js';
import { ComputerObject, PlayerObject } from './factories.js';

const p1Fields = document.getElementsByClassName('p1-field');
const cpuFields = document.getElementsByClassName('cpu-field');

const player1 = new PlayerObject();
const computer = new ComputerObject();
// while(player1.playerBoard.placedShips < 5){

// }

const computerFields = Array.from(cpuFields);
for (let i = 0; i < computerFields.length; i++) {
    computerFields[i].addEventListener('click', () => {

    })
}

