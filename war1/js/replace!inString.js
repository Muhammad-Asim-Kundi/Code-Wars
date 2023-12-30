// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //using replace() method to replace all the ! with empty string ''
    // g indicating global search flag and /!/ is regular expression matches a single ! marks
    let remove = s.replace(/!/g,'')
    return remove
  }