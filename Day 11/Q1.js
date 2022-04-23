// Calculate the area, parimeter for a square of side a. Also calculater surface area and volume of a cube with side a

const calculateForCube = (a) =>
  console.log(`
Area: ${a * a}
Perimeter: ${4 * a}
Surface Area: ${6 * a * a}
Volume: ${a * a * a}`);

calculateForCube(5);
