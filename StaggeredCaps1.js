// all correct bravosd
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(input) {
  return input.split("").map( (char, idx) => {
    if (idx % 2 === 0) {
      return char = char.toUpperCase();
    } else {
      return char = char.toLowerCase();
    }
  }).join("");
}