function initializeLights(count) {
  let lightsOff = [];
  for (let idx=0; idx < count; idx+=1) {
    lightsOff.push(false);
  }
  return lightsOff;
}

function toggleLights(lights, round) {
  return lights.map( (light, index) => {
    return (index +1) % round === 0 ? !light: light;
    // initially had light % round but you're comparing the index of the light to the round
    // because remember that for every index, every switch that is a multiple of the total number of rounds gets toggled.
  });
}

function lightsOn(count) {
  let lights = initializeLights(count);
  
  for (let switchNum = 1; switchNum <= count; switchNum+=1) {
    lights = toggleLights(lights, switchNum);
    // dont forget to assign the return value back to your variable, 
    // and have the round value as the index not count, so that it iterates the array over each round
    // remember that count is total number of rounds, but you need an iteraiton up to that number
    // which is what switchNum is for
    // initially just had toggleLights(lights, count);
  }
  
  // now you just get every "true" value's index
  let indexesOfLightsOn =[];
  lights.forEach((light, index) => {
    if (light) {
      indexesOfLightsOn.push(index+1);
    }
  });
  
  return indexesOfLightsOn;

}

console.log(lightsOn(5)); // [ 1, 4 ]
console.log(lightsOn(100)); // [ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100 ]