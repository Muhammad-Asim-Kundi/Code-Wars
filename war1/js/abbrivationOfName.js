// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

/** Code */

function abbrevName(name){
    let words = name.split('')
    let arr = []
    arr.push(words[0])
      for(let i=0; i<words.length; i++){
        if(words[i]==' '){
          arr.push(words[i+1])
        }
      }
      return arr.join('.').toUpperCase()
}

console.log(abbrevName('shakir khan'))

