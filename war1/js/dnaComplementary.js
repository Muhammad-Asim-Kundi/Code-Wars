// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//code 01
function DNAStrand(dna){
    //your code here
   let str = dna.toUpperCase();
   let word = ''
   for(let i=0; i<=str.length-1; i++){
     if(str[i]==='A'){
       word+='T'
     }else if(str[i]==='T'){
      word+='A'
     }else if(str[i]==='C'){
      word+='G'
     }else if(str[i]==='G'){
      word+='C'
     }
   }
   return word
  }

  
//code 02
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }