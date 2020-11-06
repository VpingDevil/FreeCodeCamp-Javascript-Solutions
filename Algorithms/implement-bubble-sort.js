// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort


function bubbleSort(arr) {
  let swap = true;
  while(swap){
    swap = false;
    for(let i=1; i<arr.length; i++){
      if(arr[i-1]>arr[i]){
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
        swap = true
      }
    }
  }
  return arr;
}
