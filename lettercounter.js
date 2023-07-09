console.log(filterNonLetters('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(filterNonLetters('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(filterNonLetters("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(filterNonLetters(''));                                            // {}

function filterNonLetters(string) {
  let filteredString = "";  // Initialize an empty string to store the filtered characters

  // Iterate over each character in the input string
  for (let index = 0; index < string.length; index += 1) {
    // Check if the character is a space or a letter (uppercase or lowercase)
    // if (string[index] === " " || string[index].toUpperCase() !== string[index].toLowerCase()) filteredString += string[index])
    if (string[index].match(/[a-zA-Z0-9 ]/)) {
      filteredString += string[index];  // If it is a space or a letter, add it to the filtered string
    }
  }

  return filteredString;  // Return the filtered string
}

function wordSizes(string) {
  string = filterNonLetters(string);  // Remove non-letter characters from the input string
  let words = string.split(" ");  // Split the string into an array of words using spaces as separators
  let result = {};  // Initialize an empty object to store the word sizes and their frequencies

  // Iterate over each word in the words array
  words.forEach(word => {
    // Check if the word has a length greater than 0
    (word.length > 0) &&
      ((result[word.length] += 1) || (result[word.length] = 1));
    // If it does, increment the count for that word length in the result object,
    // or if it doesn't exist, initialize it with a count of 1.
  });

  return result;  // Return the object containing word sizes and their frequencies
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));  // {}
