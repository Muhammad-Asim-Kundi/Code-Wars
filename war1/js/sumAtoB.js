function getSum(a, b){
    // If the numbers are equal, return one of them
    if(a===b){
       return a
    }else if(a > b){ // Ensure a is always the smaller number
       [a,b] = [b,a] 
    }

    // Calculate the sum of numbers between a and b
    let sum = 0
    for(let i=a; i<=b ; i++){
       sum += i
    }
     return sum
}
console.log(getSum(3,5))