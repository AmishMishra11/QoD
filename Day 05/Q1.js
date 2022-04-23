// Write a program that takes two string and copies smaller string into bigger string.

const strMerge = (str1, str2) => {
  str1.length > str2.length
    ? console.log([...str1, " ", ...str2].join(""))
    : console.log([...str2, " ", ...str1].join(""));
};

strMerge("hi how are you", "hello im good");
