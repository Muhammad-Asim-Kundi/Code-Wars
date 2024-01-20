// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

/** Code */

function removeEveryOther(arr){
    // Initialize an empty array
    let result = [];
     
    // Iterate through the array
    for(let i=0; i<arr.length; i++){
       // Check if the index is even
       if(i % 2 == 0){
         // If the index is even, add the element to the result array
         result.push(arr[i]);
       }
    }
     
    // Return the result array
    return result;
}


/** Another Code */

function removeEven(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}
   