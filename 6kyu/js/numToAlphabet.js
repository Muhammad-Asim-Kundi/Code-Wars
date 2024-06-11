// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

/** Code */

function alphabetPosition(text) {
    // Function to convert a character to its alphabet position
    function charToPosition(char) {
        const charCode = char.toLowerCase().charCodeAt(0);
        // 'a' is char code 97, so subtract 96 to get 1 for 'a', 2 for 'b', etc.
        return charCode - 96;
    }

    // Filter the input to keep only alphabetic characters and convert them to their positions
    const positions = Array.from(text)
        .filter(char => /[a-zA-Z]/.test(char))
        .map(char => charToPosition(char));

    // Join the positions into a single string separated by spaces
    return positions.join(' ');
}

/** Code Practice */

function alphabetPositionChange(strings){
    function charToPosition(char){
        const charCode = char.toLowerCase().charCodeAt(0);
        return charCode - 96;
    }
    const position = Array.from(text).filter(char => /[a-zA-Z]/.test(char))
    .map(char => charToPosition)

    return positions.join(' ')
}