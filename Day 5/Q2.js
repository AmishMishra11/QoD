// Write a program that converts the string into uppercase.

const strUppercase = (str) => {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    ans += String.fromCharCode(
      str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        ? str.charCodeAt(i) - 32
        : str.charCodeAt(i)
    );
  }
  console.log(ans);
};

strUppercase("hi im Amish");
