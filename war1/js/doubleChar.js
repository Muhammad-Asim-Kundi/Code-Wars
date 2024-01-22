// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

/** Code */
function doubleChar(str) {
    //spliting the string then appling map method to double each char
    return str.split('').map(function(s){
      return s+s
    }).join('')    // finally joining all the doubled string characterss

}
  
  