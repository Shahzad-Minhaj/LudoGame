let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let gameActive = true;

document.getElementById("roll").onclick = function () {
    if (!gameActive) return;

    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log("Dice Roll: " + diceRoll);
    document.getElementById("output3").innerHTML = diceRoll;
    document.getElementById("theImg").src = `/images/dice-${diceRoll}.png`;

    if (currentPlayer === 1) {
        // Game logic for Player 1
        if (diceRoll === 6) {
            currentPlayer = 1; // Stay on Player 1 if they roll a 6
        } else {
            currentPlayer = 2; // Switch to Player 2
        }

        player1Score += diceRoll;
        document.getElementById("player1Score").innerHTML = player1Score;
        document.getElementById("player1").classList.remove("active-player");
    } else if (currentPlayer === 2) {
        // Game logic for Player 2
        if (diceRoll === 6) {
            currentPlayer = 2; // Stay on Player 2 if they roll a 6
        } else {
            currentPlayer = 1; // Switch to Player 1
        }

        player2Score += diceRoll;
        document.getElementById("player2Score").innerHTML = player2Score;
        document.getElementById("player2").classList.remove("active-player");
    }

    // Check for a winner
    if (player1Score >= 100 || player2Score >= 100) {
        gameActive = false;
        announceWinner(player1Score >= 100 ? "Player 1" : "Player 2");
    }

    // Highlight the active player
    document.getElementById("player" + currentPlayer).classList.add("active-player");
};

document.getElementById("reset").onclick = function () {
    resetGame();
};

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    gameActive = true;

    // Reset scores
    document.getElementById("player1Score").innerHTML = "0";
    document.getElementById("player2Score").innerHTML = "0";

    // Reset active player highlight
    document.getElementById("player1").classList.add("active-player");
    document.getElementById("player2").classList.remove("active-player");

    // Enable the "Roll Dice" button
    document.getElementById("roll").disabled = false;

    // Clear the output
    document.getElementById("output3").innerHTML = "";
    document.getElementById("theImg").src = "";
}

function announceWinner(winner) {
    console.log("Game Over! " + winner + " is the winner!");
    document.getElementById("roll").disabled = true; // Disable the "Roll Dice" button when the game is over
    alert("Congratulations! " + winner + " is the winner!");
}
