const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  if (arrayOne.length !== arrayTwo.length) {
    result = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        result = false;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(actualArray,expectedArray) {
  let finalResult = eqArrays(actualArray,expectedArray);
  return (finalResult ? console.log(`✅ Passed ${actualArray} === ${expectedArray}`) : console.log(`❌ Failed ${actualArray} !== ${expectedArray}`));
}; 

const middle = function(originalArray) {
  let middleArray =[];
  let length = originalArray.length;
  if(length === 1 || length === 2){
    return middleArray;
  }
  if (length % 2 == 1) { // If length is odd
    middleArray[0] = originalArray[(length / 2) - .5];
    return middleArray;
  } else {   
    middleArray[0] = originalArray[(length / 2) - 1];
    middleArray[1] = originalArray[length / 2];
    return middleArray;
  }
}

assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1, 2]),[]) // => []
assertArraysEqual(middle([1, 2, 3, 4]),[2 , 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]),[4, 5]) // => [4,5]