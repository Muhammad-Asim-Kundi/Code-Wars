// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

/** Code */

function accum(s) {
    //Use map to transform each character. For each character, convert it to uppercase 
    //and then append the lowercase version of the character repeated index times.
      return s.split('').map((char,index)=> char.toUpperCase()+char.toLowerCase().repeat(index)).join('-')
}


//code practice
function accum(s) {
    // Split the string into an array of characters
    return s
      .split('')
      // Transform each character and its index
      .map((char, index) => {
        // Convert the character to uppercase
        const upperChar = char.toUpperCase();
        // Repeat the character in lowercase 'index' times
        const repeatedChar = char.toLowerCase().repeat(index);
        // Concatenate the uppercase character with the repeated lowercase characters
        return upperChar + repeatedChar;
      })
      // Join the transformed characters with a hyphen
      .join('-');
  }