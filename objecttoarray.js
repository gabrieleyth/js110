let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let differentArr = [];

Object.values(obj).map(obj => {
  for (let key in obj) {
    obj["type"] === "fruit" ? differentArr.push(obj["colors"]) : differentArr.push(obj["size"]);
    }
});

console.log(differentArr);