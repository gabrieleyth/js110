sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

function sumOfSums(input) {
  let newArr = [];
  let numAccumulator = 0;
  
  input.toString().split(",").forEach( elem => {
    // split with , otherwise the comas appear as elements
    numAccumulator += Number(elem);
    // accumulates the sum of number and its precedent and gets pushed as element
    newArr.push(numAccumulator);
    // comes out flattened already
  });
  
  let sumOfSumsValue = newArr.reduce( (accum, current) => accum + current,0);
  // take the already flattened array and apply reduce to sum up each value
  
  console.log(sumOfSumsValue);
} 