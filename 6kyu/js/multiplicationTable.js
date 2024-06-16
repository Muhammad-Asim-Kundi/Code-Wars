// //task

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

/** Code */

multiplicationTable = function(size) {
    // dry run
    // - j = 1: Calculate and push 1 * 1 = 1 to row.
    // - j = 2: Calculate and push 1 * 2 = 2 to row.
    // - j = 3: Calculate and push 1 * 3 = 3 to row.
   
   // row = [1, 2, 3]
   // Push row to table.
     
      // Initialize an empty array to store the table/matrix
     var matrix = []
     
      // Loop through rows
     for(let i=1; i<=size; i++){
       
       // Initialize an empty array for the current row
       let row = []
       
       // Loop through columns
       for(let j=1; j<=size; j++){
         // Calculate the value and push it to the row array
         row.push(i*j)
       }
       // Push the row array to the table array
       matrix.push(row)
    }
    // Return the generated table/matrix
    return matrix
}


/** practice code  */

mulTable = function(size) {
 
    // Initialize an empty array to store the table/matrix
  var matrix = []
   
    // Loop through rows
  for(let i=1; i<=size; i++){
     
     // Initialize an empty array for the current row
    let row = []
     
     // Loop through columns
    for(let j=1; j<=size; j++){
       // Calculate the value and push it to the row array
       row.push(i*j)
    }
     // Push the row array to the table array
    matrix.push(row)
  }
  // Return the generated table/matrix
  return matrix
}
 