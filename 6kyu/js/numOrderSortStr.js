// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

/** code */

function order(words) {
    //returning space' ' if words is empty
   if(words == ''){
     return ''
   }
    return words.split(' ').sort((a,b)=> {
      //extracting the digits using regular expression and converting it to an integer
      const numA = parseInt(a.match(/\d/)[0])
      const numB = parseInt(b.match(/\d/)[0])
      
      //sorting the extracted numbers stored in numA and numB
      return  numA - numB
    }).join(' ') //Joining the sorted array back into string
}

console.log(order('i2s this1 3a b4ook'))




//** Code Practice */

function orderStrInt(words){
  //returning space ' ' if the space is empty
if(words == ''){
  return ''
}
return words.split(' ').sort((a,b) => {
  //extracting the digits using regular expression and converting it to an integer
  const numA = parseInt(a.match(/\d/)[0])
  const numB = parseInt(b.match(/\d/)[0])

  //sorting the extracted numbers stored in numA and numB
  return numA - numB
}).join(' ')//Joining the sorted array back into string
}

console.log(order('Fo1r the2 g3ood 4of th5e pe6ople'))