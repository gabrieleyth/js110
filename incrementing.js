let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map( obj => {
  let values = Object.values(obj).slice().map( elem => {
    return elem += 1;
  });
  console.log(values);
});

/*
no mutation but no structure copy
[ 2 ]
[ 3, 4 ]
[ 5, 6, 7 ]
*/

arr.map( obj => {
  let incrementedObj = {};
  
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1; // captures the key AND value of original obj but no mutation
  }
  console.log(incrementedObj);
});

/* no mutation, original structure kept
{ a: 2 }
{ b: 3, c: 4 }
{ d: 5, e: 6, f: 7 }
*/