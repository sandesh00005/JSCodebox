// Two numbers are given a and b. Return true if one of the two numbers is 42 or the sum of the two numbers.

function is42(a, b) {
    if ((a == 42 || b == 42) || (a + b == 42)) {
        return true;
    }
    else {
        return false;
    }
}