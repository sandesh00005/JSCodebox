// Given are two variables child1 and child2 with a numeric value between 0 and 99. 
// Return true if a child is between 0 and 14 (0 and 14 inclusive). Return false if both or none in between.

function littleChild(child1, child2) {
    if (child1 > 0 && child1 < 15) {
        if (child2 > 0 && child2 < 15) {
            return false;
        }
        return true;
    }
    else {
        return false;
    }
}