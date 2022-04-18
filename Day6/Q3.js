// Given an input string S that contain multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

const removeSpaces = (S) => {
  let newString = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] != " ") {
      newString += S[i];
    }
  }
  return console.log(newString);
};

removeSpaces("Hi im amish");
