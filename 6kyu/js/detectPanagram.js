// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

/** code */

function isPangram(str) {
    // Convert the string to lowercase to make the check case-insensitive
    const lowercasedStr = str.toLowerCase();
  
    // Create a Set to store unique letters
    const letters = new Set();
  
    // Iterate through each character in the string
    for (let char of lowercasedStr) {
      // Check if the character is an alphabet letter
      if (/[a-z]/.test(char)) {
        // Add the letter to the Set
        letters.add(char);
      }
    }
  
    // Check if the Set size is equal to 26 (number of letters in the alphabet)
    return letters.size === 26;
}





/** anohter code example */

function checkPangram(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();

    // Define the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Iterate through each letter of the alphabet
    for (let i = 0; i < alphabet.length; i++) {
        // Check if the current letter is not present in the string
        if (str.indexOf(alphabet[i]) === -1) {
            return false; // If any letter is missing, it's not a pangram
        }
    }

    return true; // If all letters are present, it's a pangram
}