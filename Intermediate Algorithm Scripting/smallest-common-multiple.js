// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

let smallestCommons = (arr) =>{
  let a = []
  arr.sort((a, b)=>a-b)
  for(let i=arr[0]; i<=arr[1]; i++) a.push(i);
  return a.reduce((b,a)=>(a/lcm(a,b)*b), 1)
}

let lcm = (a, b) =>{
  if (b === 0)
    return a;
  return lcm(b, a % b);
}
