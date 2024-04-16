// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

/** Code */
String.prototype.isUpperCase = function() {
    // Regular expression to check if there are any lowercase letters
    const hasLowercase = /[a-z]/;
    
    // If the string has any lowercase letters, return false
    if (hasLowercase.test(this)) {
      return false;
    }
    
    // If the string does not have any lowercase letters, return true
    return true;
}