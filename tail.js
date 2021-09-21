

// TAIL FUNCTION IMPLEMENTATION
const tail = function(arrayList) {
  let newArray = arrayList.slice(1);
  return newArray;
};

module.exports = tail;