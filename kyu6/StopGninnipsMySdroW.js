// Write a function that takes in a string of one or more words, and returns the same string, but with
// all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will
// consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//     Examples:
//
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string){
    const arr = string.split(' ');
    let result_arr = [];
    for (elem of arr) {
        if (elem.length > 4) {
            elem = elem.split('').reverse().join('');
            result_arr.push(elem);
            continue;
        }
        result_arr.push(elem);
    }
    return result_arr.join(' ');
}

// Second way
function spinWords(string) {
    return string.split(' ').map(elem => {
        return (elem.length > 4) ? elem.split('').reverse().join('') : elem;
    }).join(' ');
}

console.log(spinWords('Hey fellow warriors'))