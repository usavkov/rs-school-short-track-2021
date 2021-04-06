/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  const res = [];
  const letters = {};
  str.split('').reduce((prev, curr, i, arr) => {
    if (!letters[prev]) letters[prev] = 1;

    if (curr === prev) {
      letters[prev]++;
    } else {
      res.push(`${letters[prev] > 1 ? letters[prev] : ''}${prev}`);
      letters[curr] = 1;
    }

    if (i === arr.length - 1) {
      res.push(`${letters[curr] > 1 ? letters[curr] : ''}${curr}`);
    }

    return curr;
  });

  return res.join('');
}

module.exports = encodeLine;
