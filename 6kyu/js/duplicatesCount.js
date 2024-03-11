// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

/** Code */

function duplicateCount(text) {
    //convert the text to lowercase
  text = text.toLowerCase()
  
  //creat an empty object to store the characters counts
  let charCount = {}
  
  //count the characters of each occurrences in the text
  for(let char of text){
    charCount[char] = (charCount[char] || 0 ) +1
  }
  
  //count the numbers of character with count greater than 1
  let duplicates = 0
  //Object.values() is used to iterate over the counts of characters stored in the charCount object 
  //and count the number of characters that appear more than once in the input text
  for(let count of Object.values(charCount)){
    if (count > 1){
      duplicates++
    }
  }
  return duplicates
}