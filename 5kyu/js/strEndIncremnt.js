// aYour job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

/** Code */

let incrementString = str => 
    // Using regular expression to match any numerical suffix at the end of the string
    // ([0-8]|\d?9+)? matches any digit from 0 to 8 OR a digit 9 followed by zero or more additional 9s
    // ? makes the entire group optional
    // $ asserts the end of the string
    str.replace(/([0-8]|\d?9+)?$/, 
        // Replacement function takes matched suffix 'e' as argument
        (e) => 
            // If a suffix is found (e is truthy), increment it by 1
            // Convert 'e' to a number with +e and add 1
            // If no suffix is found, default to appending 1 to the string
            e ? +e + 1 : 1
    );
