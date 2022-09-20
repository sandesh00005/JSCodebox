// Given is an array numbers. Return the number of odd numbers.

function countOdds(numbers) {
    return numbers.filter((no) => no % 2 != 0 ? no : '').length;
}