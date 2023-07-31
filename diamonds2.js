function topDiamond(input) {
  let count = Math.ceil(input/2);
  
  // increment in odd numbers from 1 to before input -> 1, 3, 5, 7
  // otherwise you get the "middle floor" of the diamond twice
  for (let index=1; index < input; index +=2) {
    console.log(" ".repeat(count) + "*".repeat(index));
    count -= 1;
  }
}

function bottomDiamond(input) {
  let count = 1;
  
  // decrement in odd numbers from from input to 1 -> 9, 7, 5, 3, 1 
  // middle floor here
  for (let index=input; index > 0; index-=2) {
    console.log(" ".repeat(count) + "*".repeat(index));
    count += 1;
  }
}

function diamond(input) {
  if (input % 2 === 0) {
    console.log("Please only input odd numbers");
    // input can only be odd for rest to work
  } else {
    topDiamond(input),
    bottomDiamond(input); // this one has the middle floor, otherwise was not working
  }
}