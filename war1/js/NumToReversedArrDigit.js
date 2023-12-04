function digitize(n) {
    //converting num to string to be reversed 
    let ni = n.toString().split('').reverse().join('')
    let result = []
    //using for loop too add reverse string to arr
    for(let i=0; i< ni.length ; i++){
        //using Number() to convert string to number to be added to array
      result.push(Number(ni[i]))
    }
    return result
  }

  console.log(digitize(45643543))