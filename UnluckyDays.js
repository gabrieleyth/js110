function fridayThe13ths(year) {
  let thirteenths = [];

  // Loop through the 12 months (from 0 to 11, where 0 represents January and 11 represents December).
  for (let month = 0; month < 12; month += 1) {
    // Push a new Date object representing the 13th day of the current month and year into the thirteenths array.
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths;
  /*// Use the reduce() method to count the number of Fridays among the 13th days.
  return thirteenths.reduce((count, day) => {
    // If the day is a Friday (getDay() returns 5 for Friday), increment the count by 1; otherwise, keep the count unchanged.
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);*/
}

console.log(fridayThe13ths(2015));