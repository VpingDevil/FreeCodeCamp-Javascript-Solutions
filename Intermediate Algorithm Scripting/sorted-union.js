// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(arr, ...tobe) {
  for(let ar of tobe){
    arr.push(...ar.filter(x=>arr.indexOf(x)===-1))
  }
  return arr;
}
