// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string
// (alphabetical ascending), the longest possible, containing distinct letters - each taken only
// once - coming from s1 or s2.
// Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {

    set_s1 = new Set(s1);
    set_s2 = new Set(s2);

    set_s2.forEach(value => set_s1.add(value));

    return Array.from(set_s1).sort().join('');

}
