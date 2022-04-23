// Given a string and index, your function should return the character present at that index in the string.

const charAt = (str, index) => {
  if (index > str.length) {
    return console.log("Invalid entry");
  }

  return console.log(str[index]);
};

charAt("noeGcamp", 4);
