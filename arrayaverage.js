average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

function averageWithForEach(input) {
  let averagedValues = 0;
  let addedValues = 0;
  input.forEach(value => {
    addedValues += value;
    averagedValues = Math.floor(addedValues/input.length);
  });
  console.log(averagedValues)
}

function averageWithLoop(input) {
  let addedValues = 0;
  for (let i=0; i<input.length; i++) {
    addedValues += input[i];
  }
  let averageValues = Math.floor((addedValues/input.length));
  console.log(averageValues);
}