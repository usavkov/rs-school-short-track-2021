/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = new Array(arr.length);
  const workArr = [];

  arr.forEach((el, i) => {
    if (el === -1) {
      res[i] = el;
    } else {
      workArr.push(el);
    }
  });

  for (let i = 0; i < res.length; i++) {
    if (!res[i]) {
      const min = workArr.reduce((acc, curr) => (acc < curr ? acc : curr));
      res[i] = min;
      workArr.splice(workArr.indexOf(min), 1);
    }
  }

  return res;
}

module.exports = sortByHeight;
