console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(input) {
  let arrTime = input.split(":");
  if (Number(arrTime[0]) > 0 && Number(arrTime[0]) < 24) {
   let minutesAfterMidnight = Math.floor(Number(arrTime[0])*60 + Number(arrTime[1]));
   return minutesAfterMidnight;
  } else {
    return 0;
  }
}

function beforeMidnight(input) {
  let arrTime = input.split(":");
  if (Number(arrTime[0]) > 0 && Number(arrTime[0]) < 24) {
    return (1440 - afterMidnight(input));
  } else {
    return 0;
  }
}