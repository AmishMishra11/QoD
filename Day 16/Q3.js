// Given a string s, find the first non-repeating character in it and return its index If it does not exist, return -1

const getElement = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return -1;
};

console.log(getElement("neogcamp"));
console.log(getElement("nneeooggccaammpp"));
