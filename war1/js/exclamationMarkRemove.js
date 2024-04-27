// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

/** Code */

function remove (string) {
    //string.slice(0, -1) returns a substring of the original string starting from the 
    //first character and ending at the character just before the last one
     return string.charAt(string.length - 1) === '!'? string.slice(0, -1) : string
         
     

}

// Practice

function removeExclamtion(string){
    //string.slice(0, -1) returns a substring of the original string starting from the 
    //first character and ending at the character just before the last one
    return string.charAt(string.length-1) === '!' ? string.slice(0,-1) : string
}