// Given a sentence, return a sentence with first letter of all words as capital.

const toSentenceCase = (str) => {
  const words = str.split(" ");
  const uppercaseWords = words.map((item) => {
    const letters = item.split("");
    const capitalLetters = letters.map((item, index) =>
      index === 0 ? item.toUpperCase() : item
    );
    const capitalWords = capitalLetters.join("");
    return capitalWords;
  });
  const uppercaseSentence = uppercaseWords.join(" ");
  console.log(uppercaseSentence);
};

toSentenceCase("we are neoGrammers");
