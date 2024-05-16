// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

/** Code */

function nbDig(n, d) {
    // Initialize the count variable
    let count = 0;
  
    // Iterate from 0 to n
    for (let i = 0; i <= n; i++) {
      // Calculate the square of the current number and convert it to a string
      let square = (i * i).toString();
  
      // Use the match method with a regular expression to find all occurrences of the digit d
      // The match method returns an array of matches, and the length property of this array is the count of occurrences
      // If no matches are found, match returns null, so we use the || [] trick to default to an empty array in this case
      count += (square.match(new RegExp(d, "g")) || []).length;
    }
  
    // Return the final count
    return count;
}