let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// long version
let result = arr.map(subArr => {
  let newArr = [];
  
  subArr.forEach(elem => {
    let newSubArr = [];
    
    elem.forEach(num => {
      if (num % 3 === 0) {
        newSubArr.push(num);
      }
    });
    
    if (newSubArr.length > 0) {
      newArr.push(newSubArr);
    }
  });
  
  return newArr;
});

console.log(result);

// shortcut via filter

let resultTwo = arr.map(subArr => {
  let newArr = subArr.filter(num => num % 3 === 0);
  return newArr;
});

console.log(resultTwo);
