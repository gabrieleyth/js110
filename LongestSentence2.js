let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.


function longestSentence(text) {
  let sentences = text.match(/\w.*?[.?!]/g);
  
  let longestSentence = sentences.reduce( (longest, sentence) => {
    
    let wordCount = sentence.split(/\s/).length;
    
    if (wordCount > longest.length) {
      return {text: sentence, length: wordCount};
    } else {
      return longest;
    }}, {text: "", length: 0}
  );
  
  console.log(longestSentence.text + "\n");
  console.log(`The longest sentence has ${longestSentence.length} words`);
}