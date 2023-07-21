joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

function joinOr(input, separator, last) {
  // || means if there is no separator/last it is a falsy value, the value will thus be the first truthy value
  // which i set as default "," and "or"
  
  if (input.length > 2) {
  let newArr = [];
  
    for (let index = 0; index < input.length; index++) {
      if (index < input.length - 1) {
        newArr.push(input[index]);
        // push elements as usual
      } else {
        newArr.push((last || "or") + " " + input[index]);
        // push into the array the last element preceeded by custom or default last word and a mandatory space
        // otherwise you get 1, 2, and3 
      }
    }
  
  console.log(newArr.join(separator || ", "));
  // combine everything based on a custom or default separator
   
  } else if ( input.length === 2) {
    console.log(`${input[0]} ${last || "or"} ${input[1]}`);
  } else {
    console.log(`${input[0] || ""}`); 
    // prevents empty arrays from logging undefined and logs empty string instead
  }
}