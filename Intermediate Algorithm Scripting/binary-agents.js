// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents


function binaryAgent(str) {
  return str.split(" ").map(num=>String.fromCharCode(parseInt(num, 2))).join("")
}
