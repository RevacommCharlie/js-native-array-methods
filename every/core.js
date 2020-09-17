// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(x => x % 2 === 0)
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  const type = typeof input[0]
  return input.every(x => type === typeof x);
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(x => x.every(y => y > 0));
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  function allCharactersSame(s)
  { 
      let n = s.length; 
      for (let i = 1; i < n; i++) 
          if (s[i] !== s[0]) 
              return false;
      return true; 
  } 

  return input.every(x => allCharactersSame(x.match(/[aeiou]/ig)));
};

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
