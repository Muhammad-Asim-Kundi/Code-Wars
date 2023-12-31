// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

/** code */

// XOR method is more effecient method

function findOdd(A) {
    let result = 0;
    
    for(let i=0; i<A.length; i++){
     //current value of result is combined with the current element of the array using the XOR (^=) operation.
     // If the bits are different, the result bit is set to 1; else the result bit is set to 0.
      result ^= A[i];
    }
    return result;
}


// practicing again
function singleApear(array){
    let res = 0; 
    
    for(let i=0; i<array.length; i++){
        res ^= array[i]
    }
    return res
}


/** another code */
// this method is not the convinient and efficient method
function findUnique(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}