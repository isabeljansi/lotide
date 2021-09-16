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

const assertArraysEqual = function(array1,array2) {
  let finalResult = eqArrays(array1,array2);
  return (finalResult ? console.log(`✅ Passed ${array1} === ${array2}`) : console.log(`❌ Failed ${array1} !== ${array2}`));
};

const without = function(sourceArray,itemsToRemoveArray) {
  let subsetArray = sourceArray;
  let index = 0;
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        index = sourceArray.indexOf(sourceArray[i]);
        subsetArray.splice(index,sourceArray[i]);
      }
    }
  }
  return console.log(subsetArray);
};

//TEST CASE

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//without(["hello", "world", "lighthouse"], ["lighthouse"]); //does not pass


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);