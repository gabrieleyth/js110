console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairsLoop(arr1, arr2) {
  let arr3 = [];
  
  for (let idx=0; idx < arr2.length; idx+=1) {
    arr3.push(arr1[0]*arr2[idx], arr1[1]*arr2[idx]);
  } // realized you dont have to have 2 for loops, but then you 
  // do have to sort the function in croissant
  
  return arr3.sort( (a,b) => a - b);
}

function multiplyAllPairs(arr1, arr2) {
  let arr3 = [];
  
  arr1.forEach(number1 => {
    arr2.forEach(number2 => {
      arr3.push(number1*number2);
    });
  });
  
  return arr3.sort( (a,b) => a - b); // same result as above
}