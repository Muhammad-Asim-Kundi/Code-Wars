// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

/** Code */

function nameShuffler(str){
    // It splits the input string into an array of names using the space character as the delimiter
     return  str.split(" ").reverse().join(" ");
 
     
}