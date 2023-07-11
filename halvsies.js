
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

function halvsies(arr) {
  let resultArray = [];
  resultArray.push(arr.slice(0, Math.ceil(arr.length/2)));
  resultArray.push(arr.slice(Math.ceil(arr.length/2)));
  console.log(resultArray);
}

