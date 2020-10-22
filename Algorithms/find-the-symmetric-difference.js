// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference


let symd = (a1, a2) =>{
  return [...new Set(a1.filter(a=>a2.indexOf(a)===-1).concat(a2.filter(a=>a1.indexOf(a)===-1)))];
}

function sym(...arrs) {
  let diff = symd(arrs[0], arrs[1]);
  for(let arr of arrs.slice(2,)){
    diff = symd(diff, arr);
  }
  return diff.sort((a, b)=>a-b);
}
