// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


function palindrome(str) {
  let remove = /[\W_]/
  let arr = str.split("").filter(a=>!remove.test(a)).map(a=>a.toLowerCase())
  for(let i=0; i<parseInt(arr.length/2); i++){
    if(arr[i]!=arr[arr.length-i-1]) return false
  }
  return true
}
