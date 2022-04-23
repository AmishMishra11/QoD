// Write a program to take day as an input and determine whether it is a weekend or weekday.

const findWeekend = (str) => {
  const day = str.toLowerCase();

  console.log(str, day);
  const dayofWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  for (let i = 0; i < 7; i++) {
    if (day === dayofWeek[i]) {
      if (day === "sunday") {
        return console.log("Today is Weekend");
      }

      return console.log("Today is WeekDay");
    }
  }
  return console.log("Enter Valid Day");
};

findWeekend("tuesday");
