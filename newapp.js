isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true


function isPalindrome(input) {
  let oddCondition = input.substring(0, Math.floor(input.length/2)) === input.substring(Math.ceil(input.length/2), input.length).split('').reverse().join('');
  let evenCondition = input.substring(0, input.length/2) === input.substring(input.length/2, input.length).split('').reverse().join('');

  
  if (input.length % 2 !== 0) {
    if (oddCondition) {
       return console.log(true);
     } else {
       console.log(false);
     }
  } else {
    if (evenCondition) {
    console.log(true);
  } else {
    console.log(false);
  }
  }
}