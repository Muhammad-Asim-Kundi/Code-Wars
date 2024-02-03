// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

/** Code */

String.prototype.toJadenCase = function () {
    // Split the string into an array of words
    const words = this.split(' ');
  
    // map iterate through each word and Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      // Ensure the word is not an empty string
      if (word.length > 0) {
        //capitalize first word and slice() get the rest of the word
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
  
    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
  };
  