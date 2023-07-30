let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function bubbleSort(array) {
  // Create an infinite loop to continue the sorting process until the array is fully sorted.
  while (true) {
    // Initialize a variable 'swapped' to keep track of whether any swaps occurred during the current pass.
    let swapped = false;

    // Loop through the array, starting from the second element (index 1) up to the last element.
    // Me: smart, that way you can directly compare with prev element instead of doing index index+1
    for (let idx = 1; idx < array.length; idx++) {
      // Compare the current element with its previous element (element at idx - 1).
      // If the previous element is greater than the current element, we need to swap them.
      if (array[idx - 1] > array[idx]) {
        // THIS IS HOW YOU SWAP ELEMENTS -- using array destructuring assignment.
        [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
        // if element is a string, it automatically compares its UTF code

        // Set 'swapped' to true since a swap occurred during this pass.
        swapped = true;
      }
    }

    // If no swaps occurred during the entire loop, the array is fully sorted, and we can break out of the loop.
    if (!swapped) break;
  }
}
