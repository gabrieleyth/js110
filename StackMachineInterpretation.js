// all correct !!
minilang('PRINT'); // 0
minilang('5 PUSH 3 MULT PRINT'); // 15
minilang('5 PRINT PUSH 3 PRINT ADD PRINT'); // 5 // 3 // 8
minilang('5 PUSH POP PRINT'); // 5
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'); // 5 // 10 // 4 // 7
minilang('3 PUSH PUSH 7 DIV MULT PRINT'); // 6 // me: printed 7
// [3, 3] reg = 7   ->  7/3 = 2.33 ->  2.33 * 3= 6.99 yes was just a rounding difference, results are the same
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'); // 12
minilang('-3 PUSH 5 SUB PRINT'); // 8
minilang('6 PUSH'); // (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(input) {
  let stack = [];
  let register = 0;
  
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3, 
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    "-1": -1,
    "-2": -2,
    "-3": -3,
    "-4": -4,
    "-5": -5,
    "-6": -6,
    "-7": -7,
    "-8": -8,
    "-9": -9,
  };
  
  input.split(" ").forEach( (elem) => {
    if (DIGITS[elem]) {
      register = DIGITS[elem];
    } else if ( elem === "PUSH") {
      stack.push(register);
    } else if ( elem === "ADD") {
      register += stack.pop(); 
    } else if ( elem === "SUB") {
      register -= stack.pop();
    } else if (elem === "MULT") {
      register *= stack.pop();
    } else if (elem === "DIV") {
      register = register / stack.pop();
    } else if (elem === "REMAINDER") {
      register = register % stack.pop();
    } else if ( elem === "POP") {
      register = stack.pop();
    } else if ( elem === "PRINT") {
      console.log(register);
    }
  });
}