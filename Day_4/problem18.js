/*Problem 4: Print the average of even numbers from 1 to 100 (both included)*/
let x=1;
let sum=0;
let count =0;
let y=100;
while(x<=y)
  {
    if(x%2===0)
    {
      sum = sum+x;
      count++;
    }
    x++;
  }
console.log(sum);
console.log(count);
console.log(sum/count);