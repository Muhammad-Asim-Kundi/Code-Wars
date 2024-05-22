// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

/** Code */

function alphabetWar(fight){
    let right = 0; 
    let left = 0; 
    
    for(let i=0; i<fight.length; i++){
      if(fight[i] == 'w'){
        left+=4
      }else if(fight[i] == 'p'){
        left+=3
      }else if(fight[i] == 'b'){
        left+=2
      }else if(fight[i] == 's'){
        left+=1
      }else if(fight[i] == 'm'){
        right+=4
      }else if(fight[i] == 'q'){
        right+=3
      }else if(fight[i] == 'd'){
        right+=2
      }else if(fight[i] == 'z'){
        right+=1
      }
    }
    return right > left ? "Right side wins!" : left > right ? "Left side wins!" : "Let's fight again!"
}

/** Usin switch statement */
function alphWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }

    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}