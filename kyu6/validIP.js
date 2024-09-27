// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//     Valid inputs examples:
//
//     Examples of valid inputs:
//     1.2.3.4
//     123.45.67.89
//
// Invalid input examples:
//
//     1.2.3
//     1.2.3.4.5
//     123.456.78.90
//     123.045.067.089
//
// Notes:
//
//     Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    const arr = str.split('.');

    if (arr.length != 4) {
        return false;
    }

    for (elem of arr) {
        if (elem[0] == 0 && elem.length != 1 || elem.length > 3 || elem > 255 || typeof +elem != "number" ||
            isNaN(elem) || elem[1] == 'e' || elem.includes(' ') || elem < 0 || elem.includes('\n') ||
            elem.length == 0) {
            return false;
        }
    }

    return true;
}

// Tests
console.log(1, isValidIP("0.0.0.0") == true);
console.log(2, isValidIP("12.255.56.1") == true);
console.log(3, isValidIP("137.255.156.100") == true);
console.log(4, isValidIP(''               ) == false);
console.log(5, isValidIP('abc.def.ghi.jkl') == false);
console.log(6, isValidIP('123.456.789.0'  ) == false);
console.log(7, isValidIP('12.34.56'       ) == false);
console.log(8, isValidIP('01.02.03.04'    ) == false);
console.log(9, isValidIP('256.1.2.3'      ) == false);
console.log(10, isValidIP('1.2.3.4.5'      ) == false);
console.log(11, isValidIP('123,45,67,89'   ) == false);
console.log(12, isValidIP('1e0.1e1.1e2.2e2') == false);
console.log(13, isValidIP('1.2.3.4 '       ) == false);
console.log(14, isValidIP('12.34.56.-7'    ) == false);
console.log(15, isValidIP('1.2.3.4\n'      ) == false);
console.log(16, isValidIP('\n1.2.3.4'      ) == false);
console.log(17, isValidIP('.221.41.248'    ) == false);