// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

/** Code */

var uniqueInOrder = function (iterable) {
    let array = [];
   //If iterable is already an array, it uses it directly; otherwise, it splits the string into an array.
    let updatedArr = Array.isArray(iterable) ? iterable : iterable.split('');

  //iterating through array
    updatedArr.forEach((element, index) => {
        if (index === 0 || element !== updatedArr[index - 1]) {
          //pushing unique element to array
            array.push(element);
        }
    });

    return array;
};


/** Short Code */

var uniqueOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//** practice */

var uniqueOrder = function(iterable){
  let arr = []

  let updated = Array.isArray(iterable) ? iterable : iterable.split('')

  updated.forEach((element, index) =>{
    if(index===0 || element !==updated[index-1]){
      arr.push(element)
    }
  })
}