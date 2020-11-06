// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise


function pairwise(arr, arg) {
  const used = []
  for(let i=0; i<arr.length-1; i++){
    if(used.indexOf(i)!==-1) continue;
    for(let j=i+1; j<arr.length; j++){
      if(used.indexOf(j)!==-1) continue;
      if(arr[i]+arr[j]==arg){
        used.push(i);
        used.push(j);
        break;
      }
    }
  }
  return used.reduce((a,sum)=>sum+a, 0);
}
