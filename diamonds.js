function topDiamond(input) {
  // floors of the diamond are the division of input by 2
  let topDiamond = Math.ceil(input/2);
  let count = topDiamond;
  
  // increments in odd numbers from 1 to half the diamond 
  for (let index=1; index <= (input -1); index+=2) {
    console.log(" ".repeat(count) + "*".repeat(index));
    count -= 1;
    // you substract 1 from the floor number on every iteration 
    // to leave decreasing spaces and increasing *
  }
}

function bottomDiamond(input) {
  // let count = bottomDiamond;
  let count = 1; 
  
  // decrements in odd numbers from bottomDiamond to 0; 
  for (let index=input; index > 0; index-=2) {
    console.log(" ".repeat(count) + "*".repeat(index));
    count += 1;
    // you add 1 from the floor number on every iteration 
    // to leave increasing spaces and decreasing *
  }
}

function diamond(input) {
  topDiamond(input);
  bottomDiamond(input);
}

diamond(3);
diamond(9);

/*
  *
 ***
  *
     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *
*/