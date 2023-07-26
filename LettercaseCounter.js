letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount (input) {
  let caseCountObj = {lowercase: 0, uppercase: 0, neither: 0};
  
  let nonlettersOnly = input.replace(/[a-zA-Z]/gi, "");
  let lettersOnly = input.replace(/[^a-zA-Z]/gi, "");
  
  
  lettersOnly.split("").forEach( char => {
    if (char === char.toUpperCase()) {
      caseCountObj["uppercase"] += 1;
    } else if (char === char.toLowerCase()) {
      caseCountObj["lowercase"] += 1;
    }
  });
  
  caseCountObj["neither"] += nonlettersOnly.length;
  
  return caseCountObj;
}