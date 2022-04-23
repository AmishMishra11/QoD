// Given length of a regular hexagon, your funciton should return area of the hexagon.

const areaOfHex = (len) => {
  const area = (3 * Math.sqrt(3) * len * len) / 2;
  const areaRounded = Math.round((area + Number.EPSILON) * 100) / 100;
  console.log(areaRounded);
};

areaOfHex(10);
