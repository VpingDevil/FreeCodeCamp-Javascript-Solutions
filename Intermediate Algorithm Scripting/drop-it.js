// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
  while(!func(arr[0]) && arr.length>0) arr.shift()
  return arr;
}
