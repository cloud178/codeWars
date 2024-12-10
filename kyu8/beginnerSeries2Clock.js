// Clock shows h hours, m minutes and s seconds after midnight.
//     Your task is to write a function which returns the time since midnight in milliseconds.
//     Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
//
// Input constraints:
//     0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    const hour = Math.min(Math.max(0, h), 23);
    const minute = Math.min(Math.max(0, m), 59);
    const second = Math.min(Math.max(0, s), 59);

    return second*10e2 + minute*10e2*60 + hour*10e2*60*60;
}
