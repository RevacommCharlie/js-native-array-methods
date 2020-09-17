function multiplyBy10 (array) {
  return array.map(x => x * 10);
};

function shiftRight (array) {
  return array.map((x, i) => i < 1 ? array[array.length - 1] : array[i - 1]);
};

function onlyVowels (array) {
  return array.map(x => x.replace(/[^aeiou]/ig, ''));
};

function doubleMatrix (array) {
  return array.map(x => x.map(y => y * 2));
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};