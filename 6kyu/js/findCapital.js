// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

/** Code */

var capitals = function (word) {
	// Write your code here
  let arr = []
  for(let i=0; i<word.length; i++){
    //checking if the letter is capital //pushing capital words indexs to arr
   /[A-Z]/.test(word[i]) ? arr.push(i) : null
  }
    return arr
}
