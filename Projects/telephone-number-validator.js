// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator


function telephoneCheck(str) {
  let phone = /^(1\s?)?(\(\d{3}\)[\s\-]?|\d{3}[\s\-]?)\d{3}[\-\s]?\d{4}$/
  return phone.test(str);
}
