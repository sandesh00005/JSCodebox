// Given is an array n with integers. Return true if it contains more four than zero.

function more4than0(n) {
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == 4) {
            counter1++;
        }
        else if (n[i] == 0) {
            counter2++;
        }
    }
    if (counter1 > counter2) {
        return true;
    }
    else {
        return false;
    }
}