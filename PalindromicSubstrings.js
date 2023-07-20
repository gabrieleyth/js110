function isPalindrome(input) {
  return input.length > 1 && input === input.split("").reverse().join("");
}

function leadingSubstrings(input) {
  let newArr = [];
  let elemAccumulator = "";
  
  input.split("").forEach( elem => {
    elemAccumulator += elem;
    newArr.push(elemAccumulator);
  });
  
  return newArr;
} // original from prev exp

function substrings(input) { // FUCKING GENIUS CONGRATZ
  let newArr = [];
  
  for (let i=0; i < input.length ; i++) {
    newArr.push(leadingSubstrings(input.slice(i)));
  }
  
  return newArr.flat();
} // original from prev exp

function palindromes(input) {
  let allSubstrings = substrings(input); 
  // turns your input array into an array with each crazy substring
  let newArr = allSubstrings.filter(isPalindrome); 
  // checks every element and only return whichever qualifies as palindrome
  
  console.log(newArr);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]