// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//code

var isAnagram = function(test, original) {
    let newStr1 = test.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join()
     let newStr2 = original.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join()
   
     return newStr1 === newStr2
 };