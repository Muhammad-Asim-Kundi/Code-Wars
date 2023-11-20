// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
    //your code goes here    
   if(n < 10){
     console.log('Keep at it until you get it')
   }else{
    console.log('Great, now move on to tricks')
   }
 }
hoopCount(5);


//reverse a list 
  function reverseList(list) {
   return list.reverse();
  }

  reverseList([4,5,6,7])


//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
 let nums = []
 for(i=a; i<=b; i++){
   nums.push(i)
 }
  return nums
}
between(-9,9)