class Ship {
    constructor(length) {
        this.shipLength = length;
        this.hits = 0;
    }

    getsHit = () => {
        hits += 1;
    }

    isSunk = () => {
        return hits >= shipLength;
    }
}

class GameBoard {
    constructor() {
        this.gameGrid = [];
        this.numHit = 0;

        for (let i = 0; i < 10; i++) {
            this.gameGrid[i] = [];
            for (let j = 0; j < 10; j++) {
                this.gameGrid[i][j] = '';
            }
        }
    }

    gameIsOver() {
        return this.numHit === 17;
    }

    receiveHit(coordX, coordY) {
        if (this.gameGrid[coordX][coordY] === '') {
            this.gameGrid[coordX][coordY] = 'shot';
            this.numHit += 1;
            if (this.gameIsOver()) {
                alert('GAME IS OVER');
            }
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

    takeShot(coordX, coordY) {
        this.opponentBoard.receiveHit(coordX, coordY)
    }
}

class ComputerObject {
    constructor() {
        this.computerBoard = new GameBoard();
    }

    takeShot() {
        let coordX = Math.floor(Math.random() * 10) + 1;
        let coordY = Math.floor(Math.random() * 10) + 1;

        while (this.playerHumanBoard.gameGrid[coordX][coordY] !== '') {
            coordX = Math.floor(Math.random() * 10) + 1;
            coordY = Math.floor(Math.random() * 10) + 1;
        }
        this.playerHumanBoard.receiveHit(coordX, coordY);
    }

    getPlayerBoard(humanBoard) {
        this.playerHumanBoard = humanBoard;
    }
}

module.exports = { GameBoard, PlayerObject, Ship, ComputerObject };