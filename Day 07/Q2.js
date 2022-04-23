// Given a string, determine if it is a palindrom, considering only alphanumeric characters

const checkPalindromr = (str) => {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }
  return tempStr === str
    ? console.log("yes the string is a palindrome")
    : console.log("The string is not a palindrome");
};

checkPalindromr("racecar");
