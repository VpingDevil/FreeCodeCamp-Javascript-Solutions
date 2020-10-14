// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter


function convertToRoman(num) {
    let ref = {
        1000:  "M",
         900: "CM",
         500:  "D",
         400: "CD",
         100:  "C",
          90: "XC",
          50:  "L",
          40: "XL",
          10:  "X",
           9: "IX",
           5:  "V",
           4: "IV",
           1:  "I"
    }
    var result = ""
    for(let key of Object.keys(ref).sort((a,b)=>b-a).map(a=>parseInt(a))) {
        while(num>=key){
            num -= key
            result += ref[key]
        }
    }
    return result;
}
