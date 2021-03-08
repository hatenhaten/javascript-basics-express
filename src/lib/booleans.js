const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } return false;
};

// const one = (a, b) => (a || b) && !(a && b);

const truthiness = a => {
  if (!a) {
    return false;
  } return true;
};

// const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a % 2 !== 0;

const isEven = a => a % 2 == 0;

const isSquare = a => Math.sqrt(a) % 1 == 0;

const startsWith = (char, string) => char === string[0];

const containsVowels = string => {
  if (string.search(/[aeiouAEIOU]/) == true) {
    return true;
  } return false;
};

const isLowerCase = string => {
  if (string.search(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/) == false) {
    return false;
  } return true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
