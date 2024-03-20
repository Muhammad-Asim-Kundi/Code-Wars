// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

/** Code */

function position(letter){

    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    //using search method to get the index and adding 1 to get the right position
      return ('Position of alphabet: '+(alpha.search(letter)+1))
}