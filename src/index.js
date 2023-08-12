module.exports = function reverse (n) {
    const numbers = String(Math.abs(n)).split('');
    let res = '';
    for (let index in numbers) {
        res = numbers[index] + res;
    }
    return Number(res);
}
