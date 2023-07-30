function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);
  // Captures individual sentences in the text:
  // searches for a word character (\w) followed by any characters (including spaces) non-greedily (.*?), 
  // until it encounters a period, exclamation mark, or question mark ([.!?]).

  // Use the reduce() method to find the longest sentence in the array of sentences.
  let longestSentence = sentences.reduce(
    function(longest, sentence) {
      // Split the sentence by white spaces into an array of words and get the length of the array (number of words).
      //  \s is regexp that matches any whitespace character, including spaces, tabs, and newline characters.
      let length = sentence.split(/\s/).length;
      
      // Compare the current sentence's word count with the longest found so far.
      // If the current sentence is longer, return an object representing the current sentence and its length.
      if (length > longest.length) {
        return { text: sentence, length: length };
        
      } else {
        // Otherwise, return the existing longest sentence object.
        return longest;
      }
    },
    // Any reduce method has  initial value for the 'longest' variable is an empty sentence with a length of 0.
    { text: "", length: 0 }
  );

  // Print the longest sentence and its word count to the console.
  console.log(longestSentence.text + "\n");
  console.log("The longest sentence has " + longestSentence.length + " words.\n");
}
