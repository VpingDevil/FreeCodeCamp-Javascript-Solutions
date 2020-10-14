// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller


function steamrollArray(arr) {
  let a = new Array;
  for(let i of arr) Array.isArray(i)?a.push(...steamrollArray(i)):a.push(i);
  return a;
}
