// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...


// You will only be given Natural Numbers as arguments.

function SeriesSum(n)
{
  let sum = 0
  let a = 1
  let b = 1
  if(n!=0){
    for (let i =1; i <=n ; i++){
      //adding each fraction after each iteration
      sum += a/b
      // increasing b by 3 in each iteration
      b += 3
    }
  }else{
    // If the given value is 0 then it should return 0.00
    return '0.00'
  }
  // You need to round the answer to 2 decimal places and return it as String.
  return sum.toFixed(2)
}

SeriesSum(6)


