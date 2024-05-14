// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

/** CODE */

// function countSmileys(arr) {
    //   // If the array is empty, return 0
    //   if (arr.length === 0) return 0;
    
    //   // Define a regular expression to match the pattern of a smiling face
    //   const regex = /[:;][-~]?[)D]/;
    //   let count = 0; // Initialize a variable to keep track of the number of smiling faces
    
    //   // Iterate over each element in the array
    //   for (let i = 0; i < arr.length; i++) {
    //     // If the current element matches the pattern, increment the count
    //     if (regex.test(arr[i])) {
    //       count++;
    //     }
    //   }
    //   // Return the total count of smiling faces
    //   return count;
//}

/** ANOTHER CODE */
    //The filter() method should return a boolean value for each element in the array, indicating whether the element 
    //should be included in the filtered array. However, the test() method already returns a boolean value, so there 
    //is no need to call the length property on the result.
function countSmileys(arr) {
    const regex = /[:;][-~]?[)D]/;
    // Use the filter() method to create a new array that only includes the elements that match the pattern
    let filtered = arr.filter(s => regex.test(s)) 
    
    return filtered.length
}