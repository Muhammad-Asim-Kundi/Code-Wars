function sortByLength (array) {
     // Return an array containing the same strings, 
     let ascending = array 
     // ordered from shortest to longest 
     return ascending.sort((a,b) => a.length-b.length)
}