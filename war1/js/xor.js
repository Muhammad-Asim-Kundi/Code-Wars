// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

/** Code */

function xor(a, b) {
    // TODO: Program Me
    if(a == false && b == false){
      return false
    }else if(a == true && b == false){
      return true
    }else if(a == false && b == true){
      return true
    }else if(a === true && b === true){
      return false
    }else if(a == false && b == true){
      return true
    }
}

/** Code */

function exclusiveOr(a, b) {
    //The XOR operation returns true if the two boolean operands do not have the same value. In other words, 
    //it returns true if one of the operands is true and the other is false.
    return a != b;
}

/** code  */

function ExclOr(a, b) {
    //The XOR operation returns true if the two boolean operands do not have the same value. In other words, 
    //it returns true if one of the operands is true and the other is false.
    return (a || b) && !(a && b);
}