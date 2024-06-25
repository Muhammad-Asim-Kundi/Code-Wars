// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

/** Code */

function remove(s, n) {
    // Initialize an empty string to store the final result
    let result = '';
    // Initialize a counter to keep track of the number of removed exclamation marks
    let count = 0;

    // Loop through each character in the input string
    for (let char of s) {
        // If the character is an exclamation mark and we haven't removed n marks yet
        if (char === '!' && count < n) {
            // Increment the count of removed exclamation marks
            count++;
        } else {
            // Otherwise, add the character to the result string
            result += char;
        }
    }

    // Return the final result string with n exclamation marks removed
    return result;
}

/** Another Code */

function removeExclamation(s,n){
    for (var i=0;i<n;i++) s=s.replace("!","");
    return s;
}