// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort


function insertionSort(arr) {
  for(let i=1; i++<arr.length;){
    let j = i;
    while(arr[j]<arr[j-1]){
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      j--;
    }
  }
  return arr;
}
