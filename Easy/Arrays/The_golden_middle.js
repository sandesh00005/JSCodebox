// Given are two arrays a and b, both have three elements. 
// Return a new array of length 2 containing both middle (index 1) elements of the arrays.


function goldenMiddle(a, b) {
    let middle1 = a[Math.floor(a.length / 2)];
    let middle2 = b[Math.floor(b.length / 2)];
    return [middle1, middle2];
}