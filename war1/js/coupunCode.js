// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

/** Code */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    //We create Date objects from the string dates to compare and operate with them.
    //Date parsing
    let current = new Date(currentDate)
    let expiry = new Date(expirationDate)
    //checking validation
    if (enteredCode === correctCode && current <= expiry) {
      return true;
    } else {
      return false;
    }
}
  