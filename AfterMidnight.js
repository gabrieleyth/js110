// all come out as true
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay(input) {
const FULLDAY = 1440;
  if (Math.sign(input) === 1) {
    
    while (input > FULLDAY) {
      input -= FULLDAY;
    }
    
    let rawTimeArray = timeConverter(input);
    // console.log(`${rawTimeArray[0]}:${rawTimeArray[1]}`);
    return rawTimeArray.join(":");
    
  } else if (Math.sign(input) === -1) {
    
    while (input < 0) {
      input += FULLDAY;
    }
    
    let rawTimeArray = timeConverter(input);
    // console.log(`${rawTimeArray[0]}:${rawTimeArray[1]}`);
    return rawTimeArray.join(":");
  } else {
    let rawTimeArray = timeConverter(input);
    // console.log(`${rawTimeArray[0]}:${rawTimeArray[1]}`);
    return rawTimeArray.join(":");
    // to include cases where input is 0, you just get 00:00 otherwise
    // you'll just get empty strings
  }
}

function pad(input) {
  return String(input).padStart(2, '0');
}

function timeConverter(minutesOnly) {
  let timeArray = [];
  
  let hours = Math.floor(minutesOnly/60);
  let minutes = Math.round(60*((minutesOnly/60) % 1));
  
  timeArray.push(pad(hours), pad(minutes));
  
  return timeArray;
}
