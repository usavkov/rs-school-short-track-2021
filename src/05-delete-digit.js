/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n.toString().split('').reduce((acc, _curr, indx, arr) => {
    const currNum = +([...arr.slice(0, indx), ...arr.slice(indx + 1)].join(''));
    return acc > currNum ? acc : currNum;
  }, 0);
}

module.exports = deleteDigit;
