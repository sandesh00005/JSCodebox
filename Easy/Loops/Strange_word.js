// Given is a word word. Run through the word and merge every second letter into a new word.

function strangeWord(word) {
    let temp = word.split("");
    for (let i = 0; i < temp.length; i++) {
        if (i % 2 != 0) {
            temp[i] = "";
        }
    }
    return temp.join("");
}