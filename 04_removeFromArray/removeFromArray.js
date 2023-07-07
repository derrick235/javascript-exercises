const removeFromArray = function(arr, ...removal) {
  for (let i = 0; i < removal.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (removal[i] === arr[j]) {
        arr.splice(j, 1);
        break;
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
