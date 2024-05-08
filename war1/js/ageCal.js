// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

/** code */

function  calculateAge(s,e) {
    //variable to store total years
    let count = 0
    //codition to fullfill
    if(e>s){
        //iterating thourgh given data to count years
      for(let i=s; i<e; i++){
        count++
      }
      return count == 1 ? `You are ${count} year old.` : `You are ${count} years old.`
    }else if(e<s){
        //iterating thourgh given data to count years
      for(let i=e; i<s; i++){
        count++
      }
      return count == 1 ? `You will be born in ${count} year.` : `You will be born in ${count} years.`
    }else if(e==s){
      return `You were born this very year!`
    }
    
}
  