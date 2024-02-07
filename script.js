
// let array = ["play", 2, 3, 4, 5];
// let elementToRemove = "play";
// array = array.filter(item => item !== elementToRemove);
// console.log(array)


let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let gameActive = true;
let array = ["player1ScoreStartedOnSix", "player2ScoreStartedOnSix"]

document.getElementById("roll").onclick = function () {
    if (!gameActive) return
    let x = Math.trunc(Math.random() * 6) + 1;
    console.log("Dice Roll: " + x);
    document.getElementById("output3").innerHTML = x;
    document.getElementById("theImg").src = `/images/dice-${x}.png`;
    let checks1 = () => {

        for (let i = 0; i < array.length; i++) {

            if (array[i] == "player1ScoreStartedOnSix") {
                array.splice(i, 1);
                currentPlayer = 1
                player1Score += x;
                document.getElementById("player1Score").innerHTML = player1Score;
                console.log("check1_if", x, array)
            }
            else {
                currentPlayer = 1
                player1Score += x;
                document.getElementById("player1Score").innerHTML = player1Score;
                console.log("check1_else", x, array)

            }
        }
    }
    let checks2 = () => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "player2ScoreStartedOnSix") {
                array.splice(i, 1);
                currentPlayer = 2
                console.log("check2_if", x, array)
                player2Score += x;
                document.getElementById("player2Score").innerHTML = player2Score;
            }
            else if (array.length == 0) {


            }
            else {
                currentPlayer = 2
                console.log("check2_else", x, array)
                player2Score += x;
                document.getElementById("player2Score").innerHTML = player2Score;

            }
        }
    }

    if (currentPlayer == 1 && x == 6) {
        checks1()

    }
    else if (currentPlayer == 2 && x == 6) {
        checks2()
    }
    else if (currentPlayer == 1 && x != 6 && !array.includes("player1ScoreStartedOnSix")) {
        currentPlayer = 2
        player1Score += x
        document.getElementById("player1Score").innerHTML = player1Score;
        console.log("elseif player 1")
    }
    else if (currentPlayer == 2 && x != 6 && !array.includes("player2ScoreStartedOnSix")) {
        currentPlayer = 1
        player2Score += x
        document.getElementById("player2Score").innerHTML = player2Score;
                console.log("elseif player 2")
    }
   

}





//------------------------------------------------------------------------------------
// let diceRoll = () => {
//     return Math.trunc(Math.random() * 6) + 1;
// }

// document.getElementById("roll").onclick = function () {
//     if (!gameActive) return

//     let x = diceRoll();
//     console.log("Dice Roll: " + x);
//     document.getElementById("output3").innerHTML = x;
//     document.getElementById("theImg").src = `/images/dice-${x}.png`;

//     if (currentPlayer == 1 && x == 6) {

//         // currentPlayer = 1
//         player1Score += x;
//         document.getElementById("player1Score").innerHTML = player1Score;


//     }

//     else if (currentPlayer == 1 && x != 6) {
//         // currentPlayer = 2
//         player1Score += x
//         document.getElementById("player1Score").innerHTML = player1Score;

//     }

//     else if (currentPlayer == 2 && x == 6) {
//         // currentPlayer = 2
//         player2Score += x;
//         document.getElementById("player2Score").innerHTML = player2Score;


//     }
//     else if (currentPlayer == 2 && x != 6) {
//         currentPlayer = 1
//         player2Score += x;
//         document.getElementById("player2Score").innerHTML = player2Score
//     }
//     else
//         return;

//     // if (currentPlayer === 1) {
//     //     // Game logic for Player 1
//     //     if (x === 6) {
//     //         currentPlayer = 1; // Stay on Player 1 if they roll a 6
//     //     } else {
//     //         currentPlayer = 2; // Switch to Player 2
//     //     }

//     //     player1Score += x;
//     //     document.getElementById("player1Score").innerHTML = player1Score;
//     //     document.getElementById("player1").classList.remove("active-player");
//     // } else if (currentPlayer === 2) {
//     //     // Game logic for Player 2
//     //     if (x === 6) {
//     //         currentPlayer = 2; // Stay on Player 2 if they roll a 6
//     //     } else {
//     //         currentPlayer = 1; // Switch to Player 1
//     //     }

//     //     player2Score += x;
//     //     document.getElementById("player2Score").innerHTML = player2Score;
//     //     document.getElementById("player2").classList.remove("active-player");
//     // }

//     // Check for a winner

// Highlight the active player
//     document.getElementById("player" + currentPlayer).classList.add("active-player");
// };

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
    let hi = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("output3").innerHTML = "Let's Play";
    document.getElementById("theImg").src = `/images/dice-${hi}.png`;
}

function announceWinner(winner) {
    console.log("Game Over! " + winner + " is the winner!");
    document.getElementById("roll").disabled = true; // Disable the "Roll Dice" button when the game is over
    alert("Congratulations! " + winner + " is the winner!");
}


// //-----footer-------//