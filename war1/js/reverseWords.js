//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Step 1: Split the sentence into an array of words
     let words = str.split(' ');
   
     // Step 2: Reverse each individual word
     let reversedWords = words.map(function(word) {
       return word.split('').reverse().join('');
     });
   
     // Step 3: Join the reversed words back into a sentence
     let reversedSentence = reversedWords.join(' ');
   
     return reversedSentence;
}