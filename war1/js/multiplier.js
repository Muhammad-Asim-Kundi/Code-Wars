// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

/** Code */

function multiply(number){
    // Convert the number to a string and get the length of the string
    let numStr = Math.abs(number).toString();
    let numDigits = numStr.length;

    // Calculate 5 raised to the power of the number of digits
    let multiplier = Math.pow(5, numDigits);

    // Multiply the original number by the calculated multiplier
    return number * multiplier;
    
}

/** Code */

function mult(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}