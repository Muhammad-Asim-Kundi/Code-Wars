// TASK:
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// EXAMPLE:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validations:
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    // Input validation
    if (!array || !Array.isArray(array) || array.length <= 1) {
      return 0;
    }
  
    // Find the minimum value
    const min = Math.min(...array);
    //if the min value is more then one add them to other value except min value
    const minIndex = array.indexOf(min)
    if(minIndex != -1){
      array.splice(minIndex,1)// take only one value as min from all other duplicates
    }
    //Find the maximum value
    const max = Math.max(...array);
     //if the max value is more then one add them to other value except max value
    const maxIndex = array.indexOf(max)
    if(maxIndex != -1){
      array.splice(maxIndex,1) // take only one value as max from all other duplicates
    }
  
    // Calculate the sum excluding the min and max
    const sum = array.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0);
  
    return sum;
  }
  