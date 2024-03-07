class Ship {
    constructor(length, name) {
        this.shipLength = length;
        this.hits = 0;
        this.shipName = name;
    }

    getsHit = () => {
        this.hits += 1;
    }

    isSunk = () => {
        return this.hits >= this.shipLength;
    }
}

class GameBoard {
    constructor() {
        this.gameGrid = [];
        this.numHit = 0;
        this.placedShips = 0;
        this.ships = [new Ship(5, 'carrier'), new Ship(4, 'battleship'), new Ship(3, 'cruiser'), new Ship(3, 'submarine'), new Ship(2, 'destroyer')];

        //const fieldContainerDiv = document.createElement('div');
        for (let i = 0; i < 10; i++) {
            this.gameGrid[i] = [];

            for (let j = 0; j < 10; j++) {
                this.gameGrid[i][j] = '';
                // const childDiv = document.createElement('div');
                // childDiv.dataset.yCoord = i;
                // childDiv.dataset.xCoord = j;
                // fieldContainerDiv.appendChild(childDiv);
            }
        }
    }

    gameIsOver() {
        return this.numHit === 17;
    }

    receiveHit(coordX, coordY) {

        switch (this.gameGrid[coordY][coordX]) {
            case '':
                this.gameGrid[coordY][coordX] = 'miss';
                break;
            case 'carrier':
                this.ships[0].getsHit();
                this.gameGrid[coordY][coordX] = 'shot';
                this.numHit++;
                break;
            case 'battleship':
                this.ships[1].getsHit();
                this.gameGrid[coordY][coordX] = 'shot';
                this.numHit++;
                break;
            case 'cruiser':
                this.ships[2].getsHit();
                this.gameGrid[coordY][coordX] = 'shot';
                this.numHit++;
                break;
            case 'submarine':
                this.ships[3].getsHit();
                this.gameGrid[coordY][coordX] = 'shot';
                this.numHit++;
                break;
            case 'destroyer':
                this.ships[4].getsHit();
                this.gameGrid[coordY][coordX] = 'shot';
                this.numHit++;
                break;
        }
    }

    placeShip(ship, rowCoord, startColCoord) {
        if (startColCoord + ship.shipLength > 9) {
            console.log('in')
        } else {
            this.gameGrid[rowCoord][startColCoord] = ship.shipName;
            this.gameGrid[rowCoord][startColCoord + 1] = ship.shipName;
            for (let i = 1; i < ship.shipLength; i++) {
                this.gameGrid[rowCoord][startColCoord + i] = ship.shipName;
            }
            this.placedShips++;
        }
    }
}

class PlayerObject {
    constructor() {
        this.playerBoard = new GameBoard();
    }

    getEnemyBoard(enemyBoard) {
        this.opponentBoard = enemyBoard;
    }

    takeShot(coordY, coordX) {
        this.opponentBoard.receiveHit(coordY, coordX)
    }
}

class ComputerObject {
    constructor() {
        this.computerBoard = new GameBoard();
    }

    takeShot() {
        let coordX = Math.floor(Math.random() * 9) + 1;
        let coordY = Math.floor(Math.random() * 9) + 1;

        while (this.playerHumanBoard.gameGrid[coordX][coordY] !== '') {
            coordX = Math.floor(Math.random() * 9) + 1;
            coordY = Math.floor(Math.random() * 9) + 1;
        }
        this.playerHumanBoard.receiveHit(coordX, coordY);
    }

    getPlayerBoard(humanBoard) {
        this.playerHumanBoard = humanBoard;
    }
}

module.exports = { GameBoard, PlayerObject, Ship, ComputerObject };