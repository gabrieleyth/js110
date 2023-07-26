console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(input) {
  return input.split("").map( char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    }
  }).join("");
}