// Given a sentence, your funciton should reverse the order of characteres in each word, keeping same sequence of wrods.

const reverseCharacterOfWords = (str) => {
  const words = str.split(" ");
  const reverseWords = words.map((item) => item.split("").reverse().join(""));
  const reverseString = reverseWords.join(" ");
  console.log(reverseString);
};

reverseCharacterOfWords("we are neoGrammers");
