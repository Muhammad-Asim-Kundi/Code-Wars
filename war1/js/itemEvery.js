// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

/** Code */

function smallEnough(a, limit){
    // Check if all elements in the array are less than or equal to the limit value
    return a.every(el => el <= limit)
}

//** Another Code */

function smalEnough(a, limit){
    // Check if all elements in the array are less than or equal to the limit value
    return a.every(el => el <= limit)
}