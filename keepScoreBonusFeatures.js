const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

// my function here for the joinOR bonus feature 
function joinOr(input, separator, last) {
  // || means if there is no separator/last it is a falsy value, the value will thus be the first truthy value
  // which i set as default "," and "or"
  
  if (input.length > 2) {
  let newArr = [];
  
    for (let index = 0; index < input.length; index++) {
      if (index < input.length - 1) {
        newArr.push(input[index]);
        // push elements as usual
      } else {
        newArr.push((last || "or") + " " + input[index]);
        // push into the array the last element preceeded by custom or default last word and a mandatory space
        // otherwise you get 1, 2, and3 
      }
    }
  
  prompt(`Choose a square: ${newArr.join(separator || ", ")}`);
  // combine everything based on a custom or default separator
   
  } else if ( input.length === 2) {
    prompt(`Choose a square: ${input[0]} ${last || "or"} ${input[1]}`);
  } else {
    prompt(`Choose a square: ${input[0] || ""}`); 
    // prevents empty arrays from logging undefined and logs empty string instead
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    joinOr(emptySquares(board));
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
 
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
      
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

// keepScore bonus feature input starts 
let playerScore = 0;
let computerScore = 0;
  
function scoreKeeper(board) {
  if (board === "Player") {
    playerScore += 1;
    return playerScore;
  } else if (board === "Computer") {
    computerScore += 1;
    return computerScore;
  }
  // checks who's score we should return based on who won
  // as detected by detectWinner
}
// keepScore bonus feature input ends

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    // keepscore bonus features modifications start
    prompt(`${detectWinner(board)} won! ${detectWinner(board)} score is ${scoreKeeper(detectWinner(board))}`);
    if (playerScore >= 5 || computerScore >= 5) {
      prompt(`${detectWinner(board)} won the overall game!`);
      playerScore = 0;
      computerScore = 0;
    }
    // keepscore bonus features modifications end
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');