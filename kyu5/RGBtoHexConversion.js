// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
//
//     The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
//     representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range
//     must be rounded to the closest valid value.
//
//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    [r, g, b] = validation(r, g, b);
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');

    return `${red}${green}${blue}`.toUpperCase();
}

function validation(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return [r, g, b];
}
