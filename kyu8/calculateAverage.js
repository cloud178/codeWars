// Write a function which calculates the average of the numbers in a given list.
//     Note: Empty arrays should return 0.
// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;
// }
//
// —---------------------------------------------------------------------------------------------
//     invertValues.js
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []
//
// You can assume that all values are integers. Do not mutate the input array.

    function invert(array) {
    return array.map((elem) => elem * -1);
}
