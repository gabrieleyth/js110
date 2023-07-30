sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function count(input) {
  let countValues = [];
  for (let index=1; index <= input; index++) {
    countValues.push(index);
  }
  return countValues;
}

function sumSquareDifference(input) {
  let sumSquare = count(input).reduce( (accum, current) => accum + current, 0)**2;
  let squareSum = count(input).reduce( (accum, current) => accum + current**2, 0);
  
  console.log(sumSquare - squareSum);
}