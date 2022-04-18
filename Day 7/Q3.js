// Reverse the given string word wise. That is, the last word in a given string should come at 1st place, last-second word at 2nd place and so on. Individual words should remain as it is.
//  example: input: Welcome to neoG Camp -> Camp neoG to Welcome

const reverseStr = (str) => {
  const words = str.split(" ");
  let newStr = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newStr += `${words[i]} `;
  }
  return console.log(newStr);
};

reverseStr("Welcome to neoG Camp");
