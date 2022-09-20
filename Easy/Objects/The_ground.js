// Given is an object obj each with two properties (name & category) of type String. 
// Return the value of the property with the longer string. If both are of equal length, 
// return the value of the name property.

function theGround(obj) {
    let temp = Object.values(obj).reduce((accm, curre, index) => {
        return (accm.length > curre.length) || (accm.length == curre.length) ? accm : curre;
    });
    return temp;
}