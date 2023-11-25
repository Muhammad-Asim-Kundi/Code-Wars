// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


const binaryArrayToNumber = arr => {
    let string = ''
    for(let i=0; i<=arr.length-1;i++){
      string += arr[i]
    }
    let decimal = parseInt(string,2)
    return decimal
  };
 console.log(binaryArrayToNumber([0,0,0,1]))



 // or we can do it another way 
//  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);