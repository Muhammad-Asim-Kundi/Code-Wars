// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

/** Code */

function stray(numbers) {
    // Using filter to find elements that occur only once in the array
    return numbers.filter((num) => numbers.indexOf(num) === numbers.lastIndexOf(num))[0];
}

/** Another Code */

function strayNums(numbers) {
    // Using the reduce method to XOR all elements in the array
    return numbers.reduce((acc, c) => acc ^ c, 0);
  }
  