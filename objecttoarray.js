let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

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