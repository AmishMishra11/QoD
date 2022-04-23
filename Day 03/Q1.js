// Given a sentence, your function should return the number of words in the sentence.

const getWords = (txt) => {
  let ans = 0;
  //if the first place is a letter or not
  if (txt[0] != null && txt[0] != " ") ans++;

  for (let i = 0; i < txt.length; i++) {
    //   if there is gap and there is a letter immediately after the gap
    if (txt[i] === " " && txt[i + 1] != " " && txt[i + 1] != undefined) ans++;
  }
  return ans;
};

console.log(getWords("hi im Amish"));
