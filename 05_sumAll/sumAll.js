const sumAll = function(start, end) {
  // error thrown if type of arguments are not number or if numbers are negative
  if ((typeof start) !== 'number' || (typeof end) !== 'number' || start < 0 || end < 0) {
    return 'ERROR';
  }
  let sum = 0;
  // Test if starting num is greater than ending num and swap if so
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
