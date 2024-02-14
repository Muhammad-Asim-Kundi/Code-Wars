// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//** Code */

function gimme(triplet) {
  
    // triplet.slice(): This creates a shallow copy of the triplet array. The purpose of creating a copy is to avoid modifying the original array directly.
    // map((val, index) => ({ val, index })): This transforms each element of the copied array into an object. Each object has two properties: val, which represents the original value from the array, and index, which represents the original index of that value in the array.
    // sort((a, b) => a.val - b.val): This sorts the array of objects based on the val property in ascending order. The sort function takes a comparison function that specifies the sorting order. In this case, it sorts the objects based on their val property in ascending order.
    let sortedTriplet = triplet.slice().map((val, index) => ({ val, index })).sort((a, b) => a.val - b.val);
    
    //finding the middle index of the sorted array
    let middle = Math.floor(sortedTriplet.length / 2);
    
    //returning the index of the middle number in the array
    return sortedTriplet[middle].index;
}

/**Another method */

var gimmer = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] !== max && inputArray[i] !== min){        
        index = i;
      }
    }
    return index;
};
  