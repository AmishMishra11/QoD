// Given three angles of a triangle, your function should return if it is a right, scalene, isosceles, equilateral triangle or not a triangle at all

const typeOfTriangle = (ang1, ang2, ang3) => {
  if (ang1 + ang2 + ang3 === 180) {
    if (ang1 === 90 || ang2 === 90 || ang3 === 90) {
      return "Right angle Trainge";
    } else if (ang1 === ang2 && ang2 === ang3) {
      return "Equilateral  Trainge";
    } else if (ang1 + ang2 < ang3 || ang1 + ang3 < ang2 || ang3 + ang2 < ang1) {
      return "Scalen  Trainge";
    } else if (ang1 == ang2 || ang2 == ang3 || ang3 == ang1) {
      return "Isosceles Triangle";
    }
  }
  return "not a triangle";
};

console.log(typeOfTriangle(40, 40, 100));
