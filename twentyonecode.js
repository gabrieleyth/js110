const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  // iterates in reverse order from the array's length value to 0 
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index between 0 to "first" value
    [array[first], array[second]] = [array[second], array[first]]; // swap 1st and second elements of the array
  }

  return array;
} // shuffle the deck of cards array

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }
  
  // initializes the deck of 52 cards with each suit paired with a value in 
  // the correct order
  return shuffle(deck);
  // this shuffles the 52 pairs in the deck so you get completely random values
} // initializes a initially ordered 52 card deck (nested arrays) then shuffules it

function total(cards) {
  let values = cards.map(card => card[1]);
  // retreives into an array the value from each card which is index 1 of each nested array

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  }); 
  // adds up into "sum" each of your card values (value variable) 
  // ie 11 for A 10 for royalty and the normal value for the rest

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  /* above code the function needs to account for situations where counting all Aces as 11 would result in a 
  hand value that exceeds 21. In such cases, Aces should be counted as 1 to prevent the player from 
  busting (going over 21) and potentially losing the game.*/
  /*  step 1: filters the values array to only contain elements with the value of "A".
      step 2: iterates over each element via forEach method, and modifies sum for each A value if sum > 21
      Note: we dont need the elem value so we just have a placeholder
  */

  return sum;
} 
// gets your card total accounting each value's value and making sure Aces dont make you go over 21

function busted(cards) {
  return total(cards) > 21;
} // you are busted if your total is over 21

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
} // returns whos winning or whether a tie

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
} 
// logs to console whos winning or whether a tie so that detectResult doesnt have side effects
// or so that its return value can be used 

function playAgain() {
  console.log('-------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
} 
// when the game launches this is so that you can pop 2 cards from deck of cards 
// push and pop takes cards from game deck into yours

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
} // displays a new value which represents your card "Suit Value" in a non Array format
// ["D", "A"] becomes DA

while (true) {
  prompt('Welcome to Twenty-One!');

  // initialize & shuffle deck + initialize each deck of cards
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal -- push and pop takes cards from game deck into yours
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);
  // displays card values at said index and shows total

  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      // captures input
      if (['h', 's'].includes(playerTurn)) break;
      // breaks out of the loop in either h or s case and gets handled by next if statements in outer loop
      prompt("Sorry, must enter 'h' or 's'.");
      // this keeps you in the inner loop 
    }

    if (playerTurn === 'h') { // means you're getting new cards 
      playerCards.push(deck.pop()); // push and pop transfers from game deck into yours
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`); // shows your deck and total
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
    // whichever truthy value exits you out of the overall loop
  } // player turn: choose h or s or you'll stay in the loop

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards); // displays results
    if (playAgain()) { // prompts you to play again or stop the loop
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  // dealer turn--same process as above
  prompt('Dealer turn...');

  while (total(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }
  // dealer turn--same process as above

  // if both player and dealer stays - compare cards!
  console.log('==============');
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  console.log('==============');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
} // overall game loop which makes use of each function