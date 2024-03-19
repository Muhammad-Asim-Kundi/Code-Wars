// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

/** Code */

function getCount(str) {
    str  = str.split('')
    let sum = 0
    for(let char of str){
     if(/[aeiou]/.test(char)){
       sum +=1
     }
    }
    return sum
}