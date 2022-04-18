// Write a program that removes the time form the given date string "Wed April 15, 7 pm". It should return only the date wihtout the time

const giveDate = (myDate) => {
  let currDate = "";
  for (let i = 0; i < 12; i++) {
    currDate += myDate[i];
  }
  return console.log(currDate);
};

giveDate("Wed April 15, 7 pm");
