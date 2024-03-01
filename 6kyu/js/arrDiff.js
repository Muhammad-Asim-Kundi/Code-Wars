// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

/** Code */

function arrayDiff(a, b) {
    //array to store remaining elements
    let arr = []
    //exception handling
    if(a.length === 0 ){
      return []
    }else if(b.length === 0 ){
      return a
    }
    
    //checking if b elments are included in a using includes method
    for(let item of a){
      if(!b.includes(item)){
        arr.push(item)
      }
    }
    
    return arr
}

/** Short code */

function arrayDiff(a, b) {
    //using filter method
    return a.filter(e => !b.includes(e));
}