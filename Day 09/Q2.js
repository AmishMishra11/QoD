// Given two dates, your function should return which one comes before the other.

const minDate = (date1, date2) => {
  temp1 = date1.split("/");
  temp2 = date2.split("/");

  if (temp1[2] > temp2[2]) return date2;
  else if (temp1[2] < temp2[2]) return date1;
  else if (temp1[1] > temp2[1]) return date2;
  else if (temp1[1] < temp2[1]) return date1;
  else if (temp1[0] > temp2[0]) return date2;
  else return date1;
};

console.log(minDate("02/05/2021", "24/05/2021"));
