// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Examples:
//     divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

function divisors(integer) {
    let array = getArrayFromOneToNUsingN(integer);
    array.shift();
    let resultArray = [];
    for (elem of array) {
        if (integer % elem === 0) {
            resultArray.push(elem)
        }
    }

    if (resultArray[0] === integer) {
        return `${integer} is prime`;
    }

    resultArray.pop();
    return resultArray;
}

function getArrayFromOneToNUsingN(integer) {
    return [...Array(integer)].map((_, i) => i + 1);
}
