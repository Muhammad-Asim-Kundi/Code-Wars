// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

/** Code #01 */
function persistenceBugger(num) {
    // Base case: If the number has only one digit, its persistence is 0
    if (num < 10) {
      return 0;
    }
    
    // Convert the number to a string to iterate through its digits
    const digits = Array.from(String(num));
    
    // Multiply all the digits together
    const product = digits.reduce((a, b) => a * b);
    
    // Return 1 plus the persistence of the product
    // This 1 accounts for the current multiplication operation,
    // and the recursive call calculates the persistence of the resulting number
    return 1 + persistence(product);
}

/** Code # 02 */

function persistence(num) {
    return num < 10 ? 0 : 1 + persistence(Array.from(String(num)).reduce((a, b) => a * b));
}
  