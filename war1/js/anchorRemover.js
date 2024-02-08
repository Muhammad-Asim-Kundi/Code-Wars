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

//** Anther Code */
//This approach splits the URL into an array using "#" as the delimiter and then takes the
//first element of the array, effectively removing the anchor and anything after it.

const removeUrlAnchor = (url) => url.split("#")[0];