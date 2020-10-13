// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  if(num<3) return num;
  let a = 1, b = 1, sum = 2, c = a+b
  while(c<=num){
    if(c%2===1) sum+=c;
    [a, b] = [b, c]
    c = a+b;
  }
  return sum;
}
