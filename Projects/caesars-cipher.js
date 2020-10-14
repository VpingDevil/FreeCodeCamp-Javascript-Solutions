// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher


function rot13(str) {
  let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let ret = ""
  for(let i of str){
    if(alphas.indexOf(i)==-1) ret+=i
    else{
      let index = alphas.indexOf(i)-13
      ret += index<0?alphas[index+26]:alphas[index]
    }
  }
  return ret;
}
