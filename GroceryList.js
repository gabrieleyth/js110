buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(input) {
 let newArr = input.map( elem => {
    return multiplyWord(elem[0], elem[1]);
  });
  
  console.log(newArr.flat());
}

function multiplyWord(input, times) {
  let newArr = [];
  
  for (let i=0; i < times; i++) {
    newArr.push(input);
  }
  
  return newArr;
}
