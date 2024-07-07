// String Reverse Using in-built method

const str = "this iis javascript code";

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));

// String Reverse Without in-built method

function reverseStr(str) {
  var newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
console.log(reverseStr(str));
