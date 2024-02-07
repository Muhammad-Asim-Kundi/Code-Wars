// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

/** Code */

function removeUrlAnchor(url){
    // check the index of the element or character
    let index = url.indexOf('#')
    if(index !== -1){
      //substring(startIndex, endIndex), where startIndex is inclusive, and endIndex is exclusive.
      return url.substring(0, index)
    }else{
      return url
    }
  }