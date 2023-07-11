function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let resultArray = [];
  copyNonDupsTo(resultArray, array1);
  copyNonDupsTo(resultArray, array2);
  console.log(resultArray);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]