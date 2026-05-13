let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkResult() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setTimeout(() => alert(board[a] + " जीत गया!"), 100);
            gameActive = false;
            return;
        }
    }
    
    if (!board.includes("") && gameActive) {
        setTimeout(() => alert("मैच ड्रा हो गया!"), 100);
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.innerText = "");
}
