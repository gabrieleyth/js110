function doesNotRepeat(input) {
  let countObj = {};
  
  String(input).split("").forEach( number => {
    countObj[number] = (countObj[number] || 0) + 1;
  });
  
 return Object.values(countObj).every( number => {
   return number === 1;
 });
}

function isMultiple(input) {
  if (doesNotRepeat(input)) return (input % 2 !== 0 && input % 7 === 0) ? input : false;
  else return false;
}

function featured(featuredCandidate) {
  do {
    featuredCandidate++;
  } while (!isMultiple(featuredCandidate));
  return featuredCandidate;
}
