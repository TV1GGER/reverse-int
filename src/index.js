module.exports = function reverse (n) {
    let m = Math.abs(n);
    let string = m.toString();
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
    }
    return Number(result);
};
