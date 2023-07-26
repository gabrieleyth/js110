console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // [] 
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

function rotateArray(input) {
  let newArray = [];
  
  if (!Array.isArray(input)) {
    return undefined;
  } else if (input.length === 0) {
    return input;
  } else {
    newArray.push(input.slice(1), input[0]);
    return newArray.flat();
  }
}