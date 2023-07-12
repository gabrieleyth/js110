console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// Function to add a leading zero to single-digit numbers
function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

// Function to format the time in "hh:mm" format
function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

// Function to calculate the time of day based on the deltaMinutes
function timeOfDay(deltaMinutes) {
  // Check if deltaMinutes is negative
  if (deltaMinutes < 0) {
    // If negative, convert deltaMinutes to a positive value within the range of a day
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    // If positive, calculate deltaMinutes within the range of a day
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  // Calculate the hours and minutes from deltaMinutes
  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  // Return the formatted time
  return formatTime(hours, minutes);
}
