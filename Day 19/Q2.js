// Find the number of consonants and vowels in a string.

const getVowelsAndConsonants = (str) => {
  const tempStr = str.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  const obj = {
    vowels: 0,
    consonants: 0,
  };

  for (let el of str) {
    if (vowels.includes(el)) {
      obj.vowels++;
    } else {
      obj.consonants++;
    }
  }
  return obj;
};

console.log(getVowelsAndConsonants("Bookkeeper"));
