// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// 1 solution
function sortArray(array) {
    if (!array.length) return []
    const arrayWithOddNumbers = array.filter(el => el % 2 !== 0)
    console.log(arrayWithOddNumbers)
    const arrayWithOddSortedNumbers = [...arrayWithOddNumbers].sort((a, b) => a - b)
    console.log(arrayWithOddSortedNumbers)
    const resultArr = []
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] % 2 !== 0) {
            resultArr.push(arrayWithOddSortedNumbers.shift())
        } else {
            resultArr.push(array[i])
        }
    }
    return resultArr
}
// 2 solution
function sortArray(array) {
    const odd = array.filter(el => el % 2).sort((a, b) => a - b)
    return array.map(el => el % 2 ? odd.shift() : el)
}
