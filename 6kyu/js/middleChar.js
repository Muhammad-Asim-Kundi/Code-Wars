// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

/** Code */

function getMiddle(s){
    let position; 
    let length;
    
    // Check if the length of the string is odd or even
    if (s.length % 2 == 1) {
      // If odd, set position to the middle index and length to 1
      position = s.length / 2;
      length = 1;
    } else {
      // If even, set position to one index before the middle index and length to 2
      position = s.length / 2 - 1;
      length = 2;
    }
  
    // Extract the substring based on the determined position and length
    return s.substring(position, position + length);
}

/** Practicing again */

function MiddleChar(str){
  let position;
  let length; 
  if(str.length % 2 == 1){
    position = str.length/2;
    length = 1;
  }else{
    position = str.length/2-1;
    length = 2
  }

  return str.substring(position,position+length)
}