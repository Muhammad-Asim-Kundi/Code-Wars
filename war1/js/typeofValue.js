// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

//* code *//

function problemOne(x) {
    if (typeof x == 'number') {
      // If x is number
      return (x * 50) + 6; 
    } else {
      // If x is not a number
      return 'Error'; // Return the string 'Error'
    }
}

//* another code for this problem *//

function problemTwo(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
  }