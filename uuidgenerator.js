function generateUUID() {
  // Define the characters to be used for generating the UUID
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  // Define the LENGTH of each section (each is a number of characters) of the UUID
  let sections = [8, 4, 4, 4, 12];

  // Initialize an empty string to store the generated UUID
  let uuid = '';

  // Iterate over each section and generate the random characters
  sections.forEach((section, sectionIndex) => {
    console.log(sectionIndex);
    // Iterate as many times as each section lengths to generate random 
    // characters, appended to UUID on each iteration
    for (let index = 1; index <= section; index++) {
      // Generate a random index number between 0 and characters.length
      let randomIndex = Math.floor(Math.random() * characters.length);
      // Append the selected character to the UUID
      uuid += characters[randomIndex];
    }
    

    // It will generate 8, 4, 4, 4, and 12 characters attached. 
    // So if the current section index is less than the index of the last section,
    // add a dash '-' after each section except the last one
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  // Return the generated UUID
  return uuid;
}

// Generate and output three UUIDs using the generateUUID function
console.log(generateUUID()); // Example output: '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
console.log(generateUUID()); // Example output: '39038ab9-3b95-43d8-6959-5d785ccb9b69'
console.log(generateUUID()); // Example output: 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
