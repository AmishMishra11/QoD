// Write a program to take a month as input from the user and find out whether the month has 31 days or not.

const getMonth = (month) => {
  switch (month.toLowerCase()) {
    case "february":
    case "april":
    case "june":
    case "september":
    case "november":
      return false;
    default:
      return true;
  }
};

console.log(getMonth("march"));
