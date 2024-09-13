
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  const result = matrix.map((arr, i) => {
    if (Number.isInteger(i) && i % 2 !== 0) {
      arr.reverse();
    }

    return arr;
  }).flat();

  return result;
}
