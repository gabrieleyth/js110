wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

// my alternative
function wordLengths(input) {
  let counterObject = {};
  let counterArray = [];
  
  if (input) {
    input.split(" ").forEach( word => {
    counterObject[word] = word.length;
  });
  }
  
  Object.entries(counterObject).forEach( elem => {
      counterArray.push(elem[0] + " " + elem[1]);
    });

  console.log(counterArray);
}

// textbook alternative
function wordLengthsAlternative(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(' ').map(function (word) {
    return word + ' ' + String(word.length);
    //return `${word} ${String(word.length)}`;
    // above also works
  });
}