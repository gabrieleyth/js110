let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let obj = {};
  arr.forEach(value => {
    obj.hasOwnProperty(value) ? obj[value] +=1 : obj[value] =1; 
  });
  let arr2 = Object.entries(obj);
  for (let i=0; i < arr2.length; i++) {
    console.log(`${arr2[i][0]} => ${arr2[i][1]}`);
  }
}

countOccurrences(vehicles);
// console output -- your output sequence may be different
/*car => 4
truck => 3
SUV => 1
motorcycle => 2*/