// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
//
// It’s guaranteed that array contains at least 3 numbers.
//     The tests contain some very huge arrays, so think about performance.
//     This is the first kata in series:
// Find the unique number (this kata)
// Find the unique string
// Find The Unique


// 1 Way
function findUniq(arr) {
    const obj = arr.reduce((acc, cur) => {
        cur in acc ? acc[cur] += 1 : acc[cur] = 1;
        return acc

    }, {})
    return +Object.keys(obj).find(el => obj[el] === 1)
}

// 2 Way
function findUniq(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}
