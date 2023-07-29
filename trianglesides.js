console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


function  isValid (a, b, c) {
  let sideArray = [];
  
  sideArray.push(a, b, c);
  sideArray.sort( (a, b) => a - b); // always wrap arguments around parenthesis otheriwse error
  
  // sideArray[0] + sideArray[1] < sideArray[3] doesnt work bc it evaluates < first and index 3 doesnt exist!:
  if ((sideArray[0] + sideArray[1]) < sideArray[2]) {
    return false;
  } else if (sideArray.includes(0)) {
    return false;
  } else {
    return sideArray;
    // instead of returning true, you return the sideArray which is truthy too!!!
    /*
  [ 3, 3, 3 ]
  [ 1.5, 3, 3 ]
  [ 3, 4, 5 ]
  [ 0, 3, 3 ]
  [ 1, 1, 3 ]
  */
  }
}

function triangle (a, b, c) {
  let triangle = isValid(a, b, c); // thats how you assign function return value, i was blocking on isValid = triangle
  let tirangleObject = {};
  
  if (triangle) {
    triangle.forEach( elem => {
      tirangleObject[elem] = (tirangleObject[elem] || 0) + 1;
    });
  } else {
    return 'invalid';
  }
  
  if (Object.values(tirangleObject).includes(3)) {
    return 'equilateral';
  } else if (Object.values(tirangleObject).includes(2)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
} 