// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

/** Code */

function count(string) {
    // If the input string is empty, return an empty object
    if (string.length === 0) return {};
  
    // If the input string is 'a' or 'A', return the corresponding object
    if (string === 'a') return { a: 1 };
    if (string === 'A') return { A: 1 };
  
    // Initialize an empty result object
    let result = {}
  
    // Iterate through each character in the input string
    for (let ch of string) {
      // If the character is not in the result object, add it with a count of 1
      if (!result[ch]) {
        result[ch] = 1;
      }
      // If the character is already in the result object, increment its count
      else {
        result[ch] += 1;
      }
    }
  
    // Return the result object
    return result;
}