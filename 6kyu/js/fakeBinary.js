// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

/** code  */

function fakeBin(x){
    //converting all x elements to string to loop through
   let f = x.toString()
   //creating n to store converted values
    let n = ''
    //looping through f to get new converted value to binary
    for(let i=0; i<f.length; i++){
      if(f[i]<5){
        n += '0'
      }else{
        n += '1'
      }
    }
    return n
  }

  // or shorter method
function fakeeeBin(x){
    return x.split('').map(n = n < 5 ? 0 : 1).join('')
}