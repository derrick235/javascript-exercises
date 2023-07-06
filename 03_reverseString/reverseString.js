const reverseString = function(str) {
  let result = "";
  while (str.length != 0) {
    result += str.substring(str.length - 1);
    str = str.substring(0, str.length - 1);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
