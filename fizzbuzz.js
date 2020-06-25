/*
  Requirements:
    - prints the number from 1 to n, where n is the argument passed, in the console
    - prints "fizz" instead of the number for multiples of 3
    - prints "buzz" instead of the number for multiples of 5
    - prints "fizzbuzz" for numbers that are multiples of 3 and 5
*/

const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}
