// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function sumPrimes(num) {
  let sum = 0;
  for(let i=2; i<=num; i++){
    if(isPrime(i)) sum+=i
  }
  return sum;
}
let isPrime = (num) =>{
  for(let i=2; i<num; i++){
    if(!(num%i)) return false
  }
  return true
}
