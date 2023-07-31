// !! This function returns an array representing amount of lights and set them all off (false)
// The 'count' parameter determines the number of lights in the array.
function initializeLights(count) {
  let lights = [];

  // Loop to create 'count' number of lights and set them all to 'false' (turned off).
  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}


// !! This function toggles the lights based on the given round.
// The 'lights' parameter is an array representing the lights' current state.
// The 'round' parameter is the current round number of the toggling process.
function toggleLights(lights, round) {
  return lights.map((light, index) => {
    // If the index + 1 (to make it start at 1) is divisible by the 'round' (meaning mutliple), then toggle the light,
    // because remember that for the nth round, every switch that is a multiple of nth gets toggled.
    return (index + 1) % round === 0 ? !light : light;
    // turn it to true (true) or keep it as false (falsy)
    // you'll basically have an array of true's (lights on) and false's (lights off)
  });
}


// !! This function toggles the lights 'count' number of times.
// The 'count' parameter determines the number of lights and the number of rounds of toggling.
function lightsOn(count) {
  // Create an array of lights with all lights turned off (initialized as 'false').
  let lights = initializeLights(count);

  // Loop through the rounds from 1 to 'count' and toggle the lights accordingly.
  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    lights = toggleLights(lights, switchNum);
  }

  // Create an array to store the final state of the lights that are turned on (true).
  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    // If the light is turned on (element value is "true"), push its index + 1 (to make it start at 1) into the 'result' array.
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  // Return the 'result' array containing numbers that are the indices of the lights 
  // that are turned on, meaning whose elements values in the lights array are "true".
  return result;
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]