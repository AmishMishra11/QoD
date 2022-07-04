// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiple of 3 & 5, replace it with "FizzBuzz".

const fizzBuzz = () => {
  const arr = [100];
  for (let i = 0; i < 100; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      arr[i] = "fizzbuzz";
    } else if ((i + 1) % 5 === 0) {
      arr[i] = "buzz";
    } else if ((i + 1) % 3 === 0) {
      arr[i] = "fizz";
    } else {
      arr[i] = i + 1;
    }
  }

  return arr;
};

console.log(fizzBuzz());
