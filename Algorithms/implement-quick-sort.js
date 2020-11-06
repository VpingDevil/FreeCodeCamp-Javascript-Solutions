// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort


function quickSort(arr) {
  if(arr.length<2) return arr;
  let part = arr[0]
  let small = arr.filter(a=>a<part)
  let eq = arr.filter(a=>a==part)
  let large = arr.filter(a=>a>part)
  return quickSort(small).concat(eq).concat(quickSort(large));
}
