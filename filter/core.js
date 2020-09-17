function onlyEven (array) {
  return array.filter(x => x % 2 === 0);
};

function onlyOneWord (array) {
  return array.filter(x => x.split(' ').length === 1);
};

function positiveRowsOnly (array) {
  return array.filter(x => x.every(y => y > 0));
};

function allSameVowels (array) {
  function allCharactersSame(s)
  { 
      let n = s.length; 
      for (let i = 1; i < n; i++) 
          if (s[i] !== s[0]) 
              return false;
      return true; 
  } 

  return array.filter(x => allCharactersSame(x.match(/[aeiou]/ig)));
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};