const { Ship, GameBoard, ComputerObject, PlayerObject } = require('./factories');

// const player1 = new PlayerObject();
// const computer = new ComputerObject();
// const gameBoard = new GameBoard();
// player1.getEnemyBoard(computer.computerBoard);
// player1.takeShot(3, 5);

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

it('test3', () => {
    const player1 = new PlayerObject();
    const computer = new ComputerObject();
    const gameBoard = new GameBoard();
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


