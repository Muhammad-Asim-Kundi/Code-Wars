// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

/** Code */

function getChar(c){
    // String.fromCharCode() method takes one or more Unicode values and returns a string representing the characters corresponding to the Unicode values.
    // In this case, we're passing the ASCII value 'c' as a parameter to get the corresponding character.
    
     return String.fromCharCode(c);
}