// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

/** code  */

// complete the function
function solution(string) {
    if(/^[a-z][a-zA-Z]*$/.test(string)){
      return string.replace(/([a-z])([A-Z])/g, '$1 $2')
    }else{
      return string
    }
}

solution('camelCase')

/** another example */

return str = (/^[a-z][a-zA-Z]*$/.test(string)) ? string.replace(/([a-z])([A-Z])/g, '$1 $2') : string

  