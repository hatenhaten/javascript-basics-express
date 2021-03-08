const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = array => array.join(',');

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1 );

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings => strings.map(string => string.toUpperCase());

const reverseWordsInArray = strings => {
  let reverseArr = [];
  strings.forEach(string => {
    reverseArr.push(string.split("").reverse().join(""));
  });
  return reverseArr;
};

const onlyEven = numbers => numbers.filter(number => number % 2 == 0);

const removeNthElement2 = (index, array) => {
  const newArr = [...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => strings.filter(string => string.charAt(0).match(/[aeiou]/i));

const removeSpaces = string => string.replace(/ /g, '');

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
};

const sortByLastLetter = strings => strings.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
