let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// BEST WAY
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});


// Better but no majuscule
let newArr = [];

Object.values(obj).forEach(obj => {
  obj["type"] === "fruit" ? newArr.push(obj["colors"]) : newArr.push(obj["size"].toUpperCase());

});

console.log(newArr);
/*
[
  [ 'red', 'green' ],
  'MEDIUM',
  [ 'red', 'green' ],
  [ 'orange' ],
  'LARGE'
]
*/

// just dumps everything into the array

let differentArr = [];

Object.values(obj).map(obj => {
  for (let key in obj) {
    obj["type"] === "fruit" ? differentArr.push(obj["colors"]) : differentArr.push(obj["size"]);
    }
});

console.log(differentArr);

/*
[
  [ 'red', 'green' ], [ 'red', 'green' ],
  [ 'red', 'green' ], 'medium',
  'medium',           'medium',
  [ 'red', 'green' ], [ 'red', 'green' ],
  [ 'red', 'green' ], [ 'orange' ],
  [ 'orange' ],       [ 'orange' ],
  'large',            'large',
  'large'
]
*/