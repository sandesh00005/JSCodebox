// Two variables are given key and value. Return these values in JSON notation.

function firstJSON(key, value) {
    let temp = {
        [key]: value
    }
    return temp;
}