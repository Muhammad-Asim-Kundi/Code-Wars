// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

//code 

const reverseSeq = n => {
    if (n < 1) {
      return [];
    } else {
      const curArray = [n];
      const recursed = reverseSeq(n - 1);
      return curArray.concat(recursed);
    }
  };
  
  console.log(reverseSeq(9))