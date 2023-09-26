let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (!cell.innerText && !gameOver) {
        cell.innerText = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            document.getElementById('winner').innerText = `Hráč ${currentPlayer} vyhrál!`;
            gameOver = true;
            break;
        }
    }

    if ([...cells].every(cell => cell.innerText)) {
        document.getElementById('winner').innerText = 'Remíza!';
        gameOver = true;
    }
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('winner').innerText = '';
    currentPlayer = 'X';
    gameOver = false;
}
