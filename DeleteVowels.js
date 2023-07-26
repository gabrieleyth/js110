// all correct
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function removeVowels(input) {
  let filteredArray = input.map( elem => {
    return elem.split("").filter( char => {
      return ("bcdfghjklmnpqrstvwxyz").includes(char.toLowerCase());
    }).join("");
  }).flat();
  // you need to go one level deeper bc you're already accessing an array but you need to filter individual chars
  // but dont forget to join them back into words otherwise you return an array of single elements
  
  // returned nested array so had to handle that
  // initially didnt split by the character so returned nothing
  // initially didnt have every char to lower case so wouldnt count capitalized inputs
  
  console.log(filteredArray);
}