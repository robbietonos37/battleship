const { Ship, GameBoard, ComputerObject, PlayerObject } = require('./factories');

// test GameBoard creation
it('test1', () => {
    const gameBoard = new GameBoard();
    expect(gameBoard.gameGrid[0][3]).toBe('');
});


// tests to make sure that a player's shot on an opponent is registered
it('test2', () => {
    const player1 = new PlayerObject();
    const computer = new ComputerObject();
    const gameBoard = new GameBoard();
    player1.getEnemyBoard(computer.computerBoard);
    player1.takeShot(3, 5);
    expect(computer.computerBoard.gameGrid[3][5]).toBe('shot')
})

// test to make sure that a computer's shot on a player is registered
it('test3', () => {
    const player1 = new PlayerObject();
    const computer = new ComputerObject();
    computer.getPlayerBoard(player1.playerBoard);
    computer.takeShot();
    let hits = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (player1.playerBoard.gameGrid[i][j] === 'shot') hits++;
        }
    }
    expect(hits).toBe(1);
})

// make sure we can place a ship on the gameboard
it('test4', () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(5, 'carrier');
    gameboard.placeShip(shipOne, 4, 4);
    expect(gameboard.gameGrid[4][6]).toBe('carrier');
})

// add a ship and make sure its number of hits gets increased
it('test5', () => {
    const player1 = new PlayerObject();
    const computer = new ComputerObject();
    player1.getEnemyBoard(computer.computerBoard);
    computer.getPlayerBoard(player1.playerBoard);
    computer.computerBoard.placeShip(computer.computerBoard.ships[0], 3, 5);
    player1.takeShot(3, 4);
    expect(computer.computerBoard.gameGrid[3][4]).toBe('shot');
})

// test to see that a ship can be sunk
it('test6', () => {
    const player1 = new PlayerObject();
    const computer = new ComputerObject();
    player1.getEnemyBoard(computer.computerBoard);
    computer.getPlayerBoard(player1.playerBoard);
    computer.computerBoard.placeShip(computer.computerBoard.ships[0], 3, 4);
    player1.takeShot(3, 5);
    player1.takeShot(3, 6);
    player1.takeShot(3, 7);
    player1.takeShot(3, 8);
    player1.takeShot(3, 4);
    expect(computer.computerBoard.ships[0].isSunk()).toBe(true);
})

