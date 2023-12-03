function getDivisorsCnt(n){
    var num=0;
    //the divisor of 1 is 1
    if(n==1) return 1;
    //Checks if the square root of n evenly divides n. If true, increments num by 1. // this is an optimization technique
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
           // for every divisor i, both i and n/i are divisors of n. For example, if i is 3 and n is 6, then 3 and 2 (6/3) are divisors.
            num+=2;
        }
    }
    return num;
}