letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(input) {
  let percentageObj = { lowercase: 0, uppercase: 0, neither: 0 };
  
  input.split("").forEach( char => {
    if (char.replace(/[^a-z]/gi, "") === char.toLowerCase()) {
      percentageObj["lowercase"] += 1;
    } else if (char.replace(/[^a-z]/gi, "") === char.toUpperCase()) {
      percentageObj["uppercase"] += 1;
    } else {
      percentageObj["neither"] += 1;
    }
  });
  // this inserts into the object the number of times either property holds true
  // the next method puts the numbers in a percentage. That didnt work (forEach)
  // cause you'd have to use object. values and that returns a different object
  // for let key in accesses your object directly
  
  for (let key in percentageObj) {
    percentageObj[key] = ((percentageObj[key]/input.length)*100).toFixed(2);
  }

  return percentageObj;
}