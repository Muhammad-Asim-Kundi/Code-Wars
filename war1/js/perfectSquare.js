var isSquare = function(n){
    // taking the sqrt of n 
   let sqrtN = Math.sqrt(n)
   // checking if the sqrt(n) is an integer or not by usine math.floor function that rounds the value to nearest low value
   return sqrtN === Math.floor(sqrtN)
  }