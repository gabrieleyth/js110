// 2 ways to make count functions

// loop way
function count1(input) {
  let countValues = [];
  for (let index=1; index <= input; index++) {
    countValues.push(index);
  }
  return countValues;
}

// method way (most concise)
function count(num) {
  return [...Array(num)].map((_ele, idx) => idx + 1);
}