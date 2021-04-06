/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable no-cond-assign */
/* eslint-disable no-underscore-dangle */
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = JSON.parse(JSON.stringify(matrix));
  let _matrix; let _matrix2; let _matrix3; let _matrix4; let _matrix5; let _matrix6; let _matrix7; let _matrix7$i; let _matrix8; let _matrix8$i; let _matrix9; let _matrix10; let _matrix11; let _matrix12; let _matrix13; let
    _matrix14;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // eslint-disable-next-line no-nested-ternary
      const neighbors = [((_matrix = matrix) === null || _matrix === void 0 ? void 0 : (_matrix2 = _matrix == null ? void 0 : _matrix[i - 1]) === null || _matrix2 === void 0 ? void 0 : _matrix2 == null ? void 0 : _matrix2[j - 1]) || 0, ((_matrix3 = matrix) === null || _matrix3 === void 0 ? void 0 : (_matrix4 = _matrix3 == null ? void 0 : _matrix3[i - 1]) === null || _matrix4 === void 0 ? void 0 : _matrix4 == null ? void 0 : _matrix4[j]) || 0, ((_matrix5 = matrix) === null || _matrix5 === void 0 ? void 0 : (_matrix6 = _matrix5 == null ? void 0 : _matrix5[i - 1]) === null || _matrix6 === void 0 ? void 0 : _matrix6 == null ? void 0 : _matrix6[j + 1]) || 0, ((_matrix7 = matrix) === null || _matrix7 === void 0 ? void 0 : (_matrix7$i = _matrix7 == null ? void 0 : _matrix7[i]) === null || _matrix7$i === void 0 ? void 0 : _matrix7$i == null ? void 0 : _matrix7$i[j - 1]) || 0, ((_matrix8 = matrix) === null || _matrix8 === void 0 ? void 0 : (_matrix8$i = _matrix8 == null ? void 0 : _matrix8[i]) === null || _matrix8$i === void 0 ? void 0 : _matrix8$i == null ? void 0 : _matrix8$i[j + 1]) || 0, ((_matrix9 = matrix) === null || _matrix9 === void 0 ? void 0 : (_matrix10 = _matrix9 == null ? void 0 : _matrix9[i + 1]) === null || _matrix10 === void 0 ? void 0 : _matrix10 == null ? void 0 : _matrix10[j - 1]) || 0, ((_matrix11 = matrix) === null || _matrix11 === void 0 ? void 0 : (_matrix12 = _matrix11 == null ? void 0 : _matrix11[i + 1]) === null || _matrix12 === void 0 ? void 0 : _matrix12 == null ? void 0 : _matrix12[j]) || 0, ((_matrix13 = matrix) === null || _matrix13 === void 0 ? void 0 : (_matrix14 = _matrix13 == null ? void 0 : _matrix13[i + 1]) === null || _matrix14 === void 0 ? void 0 : _matrix14 == null ? void 0 : _matrix14[j + 1]) || 0];

      const sum = neighbors.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);
      res[i][j] = sum;
    }
  }

  return res;
}

module.exports = minesweeper;
