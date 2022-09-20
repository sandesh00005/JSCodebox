// Given is a string hangmanString. Replace every second letter with an underscore and 
// return the result as a string. The first character must be an underscore.

function hangman(hangmanString) {
    let temp = hangmanString.split("");

    for (let i = 0; i < temp.length; i++) {
        if (i % 2 == 0) {
            temp[i] = "_";
        }
    }
    return temp.join("");
}