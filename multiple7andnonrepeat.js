function doesNotRepeat(input) {
  let countObj = {};
  
  String(input).split("").forEach( number => {
    countObj[number] = (countObj[number] || 0) + 1;
  });
  // make a object that counts how many times each number appears
  
 return Object.values(countObj).every( number => {
   return number === 1;
 });
 // true if every number 1 appears once, false otherwise
 
}

function isSevenMultiple(input) {
  let number = doesNotRepeat(input);
  if (number) return input % 7 === 0 ? input : false;
  else return false;
  /* if number is truthy (as per our condition, it does not repeat), check whether its a multiple of 7
  if yes, return number, if not return false
  and if number is faly return false*/
}

function featured(input) {
let featuredCandidate = input;
  do {
    featuredCandidate++;
  } while (!isSevenMultiple(featuredCandidate));
  // loop through every subsequent number from input incremented by 1
  // and check if they are both doesNotRepeat & isSevenMultiple
  // do this while isSevenMultiple(featuredCandidate) evaluates to false
  // and stop when its true, and return that value
  
  return featuredCandidate;
}

console.log(featured(1029)); // 1036
console.log(featured(12)); // 14