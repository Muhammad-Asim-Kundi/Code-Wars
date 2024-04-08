// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

/** Code */
function mxdiflg(a1, a2) {
    // Initialize an empty array to store the absolute differences
    var differences = [];

    // Iterate over each element in a1
    for (var i = 0; i < a1.length; i++) {
        // Iterate over each element in a2
        for (var j = 0; j < a2.length; j++) {
            // Calculate the absolute difference between the lengths of the strings
            var diff = Math.abs(a1[i].length - a2[j].length);
            // Push the absolute difference to the differences array
            differences.push(diff);
        }
    }

    // If either array is empty, return -1
    if (differences.length === 0) {
        return -1;
    }

    // Find the maximum absolute difference
    var maxDiff = Math.max(...differences);

    // Return the maximum absolute difference
    return maxDiff;
}
