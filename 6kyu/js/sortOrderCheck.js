// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

/** Code */

// Function to check if an array is sorted and how it's sorted
function isSortedAndHow(array) {
    // Initialize flags to track if the array is sorted in ascending or descending order
    let isAscending = true;
    let isDescending = true;
  
    // Iterate through the array, starting from the second element
    for (let i = 1; i < array.length; i++) {
      // If the current element is greater than the previous one, it means the array is not sorted in descending order
      if (array[i] > array[i - 1]) {
        isDescending = false;
      }
      // If the current element is less than the previous one, it means the array is not sorted in ascending order
      else if (array[i] < array[i - 1]) {
        isAscending = false;
      }
    }
  
    // Check the flags and return the appropriate result
    // If the array is sorted in ascending order, return "yes, ascending"
    if (isAscending) {
      return "yes, ascending";
    }
    // If the array is sorted in descending order, return "yes, descending"
    else if (isDescending) {
      return "yes, descending";
    }
    // If the array is not sorted, return "no"
    else {
      return "no";
    }
}

/** Practice */

function isSortedHow(array){
  
    let isAscending = true
    let isDescending = true
  
    // Iterate through the array, starting from the second element
    for (let i = 1; i < array.length; i++) {
      // If the current element is greater than the previous one, it means the array is not sorted in descending order
      if (array[i] > array[i - 1]) {
        isDescending = false;
      }
      // If the current element is less than the previous one, it means the array is not sorted in ascending order
      else if (array[i] < array[i - 1]) {
        isAscending = false;
      }
    }
  
    // Check the flags and return the appropriate result
    if (isAscending) {
      return "yes, ascending";
    }
    else if (isDescending) {
      return "yes, descending";
    }
    else {
      return "no";
    }
}