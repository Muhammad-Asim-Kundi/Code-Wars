// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

/** code  */
function rowSumOddNumbers(n) {
    //obtaining the first number of each row
      let firstNum = n * (n-1) +1
    
    let sum = 0
    
    //using for loop to calcute the sum of nth row
    for(let i=0; i<n; i++){
      //obtaining the next Num as by multiplying with i to obtain the ith index
      let checkNext = firstNum +2 *i
      
      sum += checkNext
    }
    return sum 
}