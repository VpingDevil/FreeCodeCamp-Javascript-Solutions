// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(let ele of arr){
    var orb = Math.round(2*Math.PI*Math.sqrt(Math.pow(ele.avgAlt+earthRadius, 3)/GM))
    delete ele.avgAlt
    ele.orbitalPeriod = orb
  }
  return arr;
}
