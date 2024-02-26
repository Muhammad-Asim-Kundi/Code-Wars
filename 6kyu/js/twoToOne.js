// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

/** Code */

function longest(s1, s2) {
    // your code
     // Combine the strings and convert to Set to remove duplicates
    const combinedSet = new Set([...s1, ...s2]);
  
    // Convert back to array and sort
    const sortedArray = Array.from(combinedSet).sort();
  
    // Join the array into a string and return
    const result = sortedArray.join('');
    return result
}