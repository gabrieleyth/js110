// The functions in answer A and C both construct 
// an array of the numbers, but they both include the number passed as an argument.

function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 1;

  while (true) {
    numbers.push(candidate);
    ++candidate;
    if (candidate > upperLimit) break;
  }

  return numbers;
}

function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 0;

  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit);

  return numbers;
}

// The function in answer B never finishes running; 
// it's an infinite loop since we never increment the candidate variable

function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 1;

  while (candidate < upperLimit) {
    numbers.push(candidate);
  }

  return numbers;
}