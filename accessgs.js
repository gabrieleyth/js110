// Reasigning 3 to 4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log(obj2);


// Accessing G
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]); // g

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]["third"][0]); // g

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]["third"][0][0]) // g 
// note that console.log(arr3[2]["third"][0] comes out as 'ghi'

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1["b"][1]); // g

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
 console.log(Object.keys(obj2["third"])[0]); // g
 // note that console.log(obj2["third"]["g"]); comes out as 0 
 // and ["third"][0] as undef
 // Object.keys(obj2["third"]) comes out as [ 'g' ]
