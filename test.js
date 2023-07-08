function doubleOddNumbers(numbers) {  
  let newNumbers = [];
  for (let i=0; i < numbers.length; i++) {
    if (i % 2 !==0) {
      let doubledOddNumber = numbers[i] * 2;
      newNumbers.push(doubledOddNumber); 
    } else {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers)); // [ 1, 8, 3, 14, 2, 12 ]
console.log(myNumbers); // [ 1, 4, 3, 7, 2, 6 ]