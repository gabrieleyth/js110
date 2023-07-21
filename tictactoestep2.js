// Tic Tac Toe - Step 2 - Player and Computer Turn //

const readline = require('readline-sync');
const INITIAL_MARKER = ' ';  // so we can understand the purpose of the empty string instead of simply empty strings errwhere
const HUMAN_MARKER = 'X';  // so we understand it's the human's choice instead of Xs everywhere
const COMPUTER_MARKER = 'O'; // computer's choice

function prompt(msg) {
  console.log(`=>${msg}`)
}

function displayBoard() {
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

let board = initializeBoard(); 
displayBoard(board); // works fine

playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board); // only does one round of computer choosing

/* the next step is to implement the main game loop where we'll repeatedly ask the player 
and the computer to choose a square until we have a full board or a winner.*/