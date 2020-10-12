//Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

function convertHTML(str) {
  let ret = ""
  for(let ch of str){
    switch(ch){
      case "&" : ret+="&amp;"; break;
      case "<" : ret+="&lt;"; break;
      case ">" : ret+="&gt;"; break;
      case "\"": ret+="&quot;"; break;
      case "'" : ret+="&apos;"; break;
      default: ret+=ch;
    }
  }
  return ret;
}
