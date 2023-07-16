stringToInteger("4321") 
stringToInteger("570")

function stringToInteger(input) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }; 
  let numberArray = input.split("").map( char => {
    return DIGITS[char];
    // so far you have individual numbers separated so
    // [ 4, 3, 2, 1 ] and [ 5, 7, 0 ]
  });
  let result = 0;
  numberArray.forEach((number, index) => {
    result += number * (10**(input.length - index))/10;
    // to get 4000 + 300 + 20 + 1 so 4*10^3; 3*10^2 etc
  })
  console.log(result);
  // 4321
  // 570
}

