// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

/** Code */

function addBinary(a,b) {
    //BigInt('0b' + binaryA) converts the binary string back to a BigInt. The '0b' prefix indicates that the string is a binary number.
  return (BigInt('0b' + a.toString(2)) + BigInt('0b' + b.toString(2))).toString(2)
}