// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

/** Code */

function removeTrailingZeros(n) {
    // Convert the number to a string
    let str = n.toString();

    // Get the length of the string
    let len = str.length;

    // Iterate over the string from the end to the beginning
    for (let i = len - 1; i >= 0; i--) {
        // If the current character is not a zero, return the substring from the beginning to that character as an integer
        if (str[i] !== '0') {
            return parseInt(str.substring(0, i + 1));
        }
    }

    // If the entire string is zeros, return 0
    return 0;
}
/** Short Code */

function noZeros(n) {
    // While the number is divisible by 10 and the number is not 0
    while (n % 10 === 0 && n !== 0) {
        // Divide the number by 10
        n = n / 10;
    }

    // Return the final number
    return n;
}