// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

/** Code */

function isIsogram(str){
    str = str.toLowerCase();
    //The Set object automatically handles duplicates by only keeping unique values.
    //By comparing the size of the Set to the length of the original string
    return new Set(str).size === str.length;
}