// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

/** Code */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Calculate the age gap
      const ageGap = dadYearsOld - 2 * sonYearsOld;
  
      // Check if the father was twice as old in the past or will be in the future
      if (ageGap === 0) {
          return 0
      } else if (ageGap > 0) {
          return ageGap
      } else {
          return -ageGap
      }
}

// Another Code 

function twiceOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}