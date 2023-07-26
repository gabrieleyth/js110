wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

function capitalizer(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
  // becasuse i didnt put parenthesis after the toUpperCase, i kept having issues where:
  // 'function toUpperCase() { [native code] }'' would get logged to the console
  // i intially thought it was because of using word[0] and not word.slice(0, 1)
}

function wordCap(input) {
  /*let capitalizedArray = [];
  
  input.split(" ").forEach( elem => {
    capitalizedArray.push(capitalizer(elem))
  }); forEAch version */
  
  return input.split(" ").map( word => {
    return capitalizer(word);
  }).join(" ");
}