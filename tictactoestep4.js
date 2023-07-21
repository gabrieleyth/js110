/*  Tic Tac Toe Step 4 - final step of determining the winner of the game.
    After the program breaks out of the main game loop, there are only two possibilities: 
    either someone has won, or we have a full board*/

const readline = require('readline-sync');
const INITIAL_MARKER = ' '; 
const HUMAN_MARKER = 'X'; 
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard() {
  console.clear(); // clears the console of the old boards
  
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  // screen shows which marker belongs to which player
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  
  for (let square=1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
    // for each board values, you turn them into an empty string
    // so that you get an empty board. Square value is just i, 
    // and because obj properties are strings, you must transform the 
    // numerical value "square" into a string to access the obj property value
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
  // we use this expression in both playerChoosesSquare and computerChoosesSquare
  // might as well turn it into a function
  // it returns board keys where the value is a space, so they can be part of the choices 
}

function playerChoosesSquare(board) {
  // lets player choose an empty square on the board and update the "board" object accordingly with X
  
  let playerSquare;
  // declared here so we can use it outside the loop
  
  // We're using a while (true) loop here to keep asking the player for input until valid, so one of the emptySquares
  
  while (true) {
    // Prompt the player to choose a square by displaying the available empty squares joined together with commas.
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`); 
    playerSquare = readline.question().trim();
    if (emptySquares(board).includes(playerSquare)) {
      break; // break if valid choice
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }
  
  board[playerSquare] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  // lets computer choose an empty square on the board and update the "board" object accordingly with O;
  
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  
  let computerSquare = emptySquares(board)[randomIndex];
  board[computerSquare] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0; // checks if board is empty, this by seeing there are no more empty sq in the array
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  
  for (let line=0; line < winningLines.length; line++) { 
    let [sq1, sq2, sq3] = winningLines[line];
    
    // all 3 winning squares are either marked by a human or a computer
    let humanWinningCondition = board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER;
        
    let computerWinningCondition = board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER;
    
    if (humanWinningCondition) {
      return "Human";
    } else if (computerWinningCondition) {
      return "Computer";
    }
  } 
  // if 3 winning squares at once are marked by neither, its a tie thus null
    return null;
  }

function someoneWon(board) {
  return !!detectWinner(board); 
  // returns a true if displays name of winner (truthy) 
  // or false if displays null, which is a (falsy) value and goes to else if its a tie aka board is full
}

let board = initializeBoard(); 
// displayBoard(board);  put this in the while loop

/*while (true) {
  displayBoard(board);
  
  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
  
  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
  
      problem is if we get two winning lines, no matter who chose the 3rd winning square first
      computer will evaluate as winner which square in ascending order is a winner first
      so whenever either player or computer chooses square gets initiated you need to check
      for winner

} old while loop with no play again */

// The most significant change here is that we now check for a winner after each turn. 
// This change guarantees that the board can never have winning lines for both players 
// since the loop ends as soon as one player wins or the game is tied.

// implementing play again means changing the while loop. To do that, we must wrap our main game loop in another, 
// outer, loop and break out when the user doesn't respond with a y to our question:

while (true) { // repurposed old while loop
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
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');