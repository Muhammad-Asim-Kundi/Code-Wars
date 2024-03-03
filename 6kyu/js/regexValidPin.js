// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

/** CODE */
function validatePIN (pin) {
    let length = pin.length
    //expressoin for number
    let regix = /^\d+$/
    if(!regix.test(pin) || length != 4 && length != 6){
      return false
    }else{
      return true
    }
    
}

/** Code */
function validPin(pin){
    //regular expression to match exactly 4 and 6 and check the input as number
    let regex = /^(\d{4}|\d{6})$/

    //test the input against regular expression
    let result = regex.test(pin)

    return result
}

