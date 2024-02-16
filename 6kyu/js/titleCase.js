// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

//** Code */

function titleCase(title, minorWords) {
    // Input validation: Check if title is a non-empty string
    if (!title || typeof title !== 'string') {
      // Handle invalid input by returning an empty string
      return '';
    }
    
    // Convert the entire title to lowercase and split it into an array of words
    let titleWords = title.toLowerCase().split(' ');
    
    // Check if there are no minor words specified or if minorWords is not a string
    if (!minorWords || typeof minorWords !== 'string') {
      // Capitalize the first letter of each word in titleWords and join them into a string
      return titleWords.map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(' ');
    }
    
    // Convert minorWords to lowercase and split it into an array of words
    let minorWordsArr = minorWords.toLowerCase().split(' ');
    
    // Process each word in titleWords
    let result = titleWords.map((word, index) => {
      // Capitalize the first letter if the word is at the first position or not a minor word
      if (index === 0 || !minorWordsArr.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        // Otherwise, leave the word unchanged
        return word;
      }
    });
  
    // Join the modified words into a single string and return the result
    return result.join(' ');
}

  
/** code practice */

function titleCaseChange(title , smallWords){

  if(!title || typeof title !== 'string'){
    return ''
  }

  let titleWords = title.toLowerCase().split(' ')

  if(!smallWords || typeof smallWords !== 'string'){
    return titleWords.map(words => words.charAt(0).toUpperCase()+words.slice(1)).join(' ')
  }

  let minorWords = smallWords.toLowerCase().split(' ')

  let result = titleWords.map((index , word)=>{
    if(index === 0 || !minorWords.includes(word)){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }else{
      return word
    }
  })

  return result.join(' ')
}