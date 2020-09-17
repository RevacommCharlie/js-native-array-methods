function sum (array) {
  return array.reduce((acc, val) => acc + val);
}

function productAll (array) {
  return array.reduce((acc, val) => acc * val.reduce((a, v) => a * v, 1), 1);
}

function objectify (array) {
  return array.reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}

function luckyNumbers (array) {
  return "Your lucky numbers are: " + array.reduce((str, val, idx) => {
    if (idx === array.length - 1) {
      return str + 'and ' + val.toString();
    } else {
      return str + val.toString() + ', ';
    }
  }, '');
  // your code here
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
