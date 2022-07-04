// Given an object obj, we have to invert its key and value for each entry. Inversion will result in value being used as key and key as value.

const replaceKeyVal = (obj) => {
  const newObj = {};
  for (key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
};

obj = {
  name: "Doraemon",
  age: 5,
  hairColor: "none",
  eyes: "oval",
};

console.log(replaceKeyVal(obj));
