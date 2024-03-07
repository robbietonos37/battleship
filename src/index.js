import './style.css';
import './factories.js';
import { ComputerObject, PlayerObject } from './factories.js';

const p1Fields = document.querySelectorAll('.p1-field');
const cpuFields = document.getElementsByClassName('cpu-field');

const player1 = new PlayerObject();
const computer = new ComputerObject();
player1.getEnemyBoard(computer.computerBoard);

const computerFields = Array.from(cpuFields);

const playerFields = Array.from(p1Fields);

let index = 0;
for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {
        computerFields[index].dataset.yCoord = i;
        computerFields[index].dataset.xCoord = j;
        p1Fields[index].dataset.yCoord = i;
        p1Fields[index].dataset.xCoord = j;
        //console.log('Row: ' + i + 'Column: ' + j);
        index++;
    }
}

computer.computerBoard.placeShip(computer.computerBoard.ships[0], 1, 4);
computer.computerBoard.placeShip(computer.computerBoard.ships[1], 2, 4);
computer.computerBoard.placeShip(computer.computerBoard.ships[2], 3, 4);
computer.computerBoard.placeShip(computer.computerBoard.ships[3], 4, 4);
computer.computerBoard.placeShip(computer.computerBoard.ships[4], 5, 4);

let compIndex = 0;
for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {
        if (computer.computerBoard.gameGrid[i][j] !== '') {
            computerFields[compIndex].classList.add('safe-ship');
            compIndex++;
            continue;
        }
        compIndex++;
    }
}

player1.playerBoard.placeShip(player1.playerBoard.ships[0], 1, 4);
player1.playerBoard.placeShip(player1.playerBoard.ships[1], 2, 4);
player1.playerBoard.placeShip(player1.playerBoard.ships[2], 3, 4);
player1.playerBoard.placeShip(player1.playerBoard.ships[3], 4, 4);
player1.playerBoard.placeShip(player1.playerBoard.ships[4], 5, 4);
let playerIndex = 0;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (player1.playerBoard.gameGrid[i][j] !== '') {
            p1Fields[playerIndex].classList.add('safe-ship');
            playerIndex++;
            continue;
        }
        playerIndex++;
    }
}

// let placedShips = 0;
// p1Fields.forEach(field => {

//     field.addEventListener('click', () => {
//         if (player1.playerBoard.placedShips < 5) {
//             player1.playerBoard.placeShip(player1.playerBoard.ships[player1.playerBoard.placedShips], field.dataset.yCoord, field.dataset.xCoord);
//             field.classList.add('safe-ship');
//             console.log(player1.playerBoard.placedShips + 'WHAT THE FUCJ IS HAPPENING')
//             placedShips++;
//             let indexNum = 0
//             for (let i = 0; i < 10; i++) {
//                 for (let j = 0; j < 10; j++) {
//                     if (player1.playerBoard.gameGrid[i][j] !== '') {
//                         p1Fields[indexNum].classList.add('safe-ship');
//                         indexNum++;
//                         continue;
//                     }
//                     indexNum++;
//                 }
//             }
//         }
//         else {
//             //field.classList.add('safe-ship');
//             console.log(computer.computerBoard.placedShips)
//         }
//     })

// })


for (let i = 0; i < computerFields.length; i++) {
    computerFields[i].addEventListener('click', () => {
        debugger;
        player1.takeShot(computerFields[i].dataset.xCoord, computerFields[i].dataset.yCoord);
        if (computer.computerBoard.gameGrid[computerFields[i].dataset.yCoord][computerFields[i].dataset.xCoord] === 'shot') {
            computerFields[i].classList.add('ship-hit');
            console.log(computerFields[i].dataset.yCoord)
            console.log('game is over: ' + computer.computerBoard.gameIsOver())
            console.log('Number of hits: ' + computer.computerBoard.numHit)
            if (computer.computerBoard.gameIsOver()) {
                alert('game is over')
            }
        }
        else {
            console.log('row: ' + computerFields[i].dataset.yCoord);
            console.log('column: ' + computerFields[i].dataset.xCoord)
            computerFields[i].classList.add('miss');
        }
    })
}


