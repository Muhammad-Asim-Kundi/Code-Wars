// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special
// characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet
// should be shifted, like in the original Rot13 "implementation".

/** Code */

function rot13(message){
    //replace checking for match and applying function to every match
    return message.replace(/[a-zA-Z]/g, function (char){
      //checking the shift value based on whether char is upperCase or lowerCase
      let shift = char <= 'Z' ? 65 : 97
      //applying method to find ascii value and fromCharCode() convert back to character
      return String.fromCharCode((char.charCodeAt(0) - shift + 13) % 26 + shift)
    })

}

//** Another method */

function rot13Method(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

/** Code */

function rot13Meth(message){
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}