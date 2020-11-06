// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

function selectionSort(arr) {
  // Only change code below this line
  for(let i=0; i<arr.length-1; i++){
    let mini = i
    let min = arr[i]
    for(let j=i; j<arr.length; j++){
      if(min>arr[j]){
        min = arr[j]
        mini = j
      }
    }
    [arr[i], arr[mini]] = [arr[mini], arr[i]]
  }
  return arr;
  // Only change code above this line
}
