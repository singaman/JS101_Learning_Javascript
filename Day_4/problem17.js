/*Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit*/
let x = 0;
let y = 10;
let sum = 0;
while (x < y) {
  if (x % 3 === 0) {
    sum = sum + x;
  }
  x++
}
console.log(sum);