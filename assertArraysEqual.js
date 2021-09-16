const eqArrays = function(arrayOne, arrayTwo){
  let result = true; 
  if(arrayOne.length !== arrayTwo.length) {
    result = false;
  } else {
    for(let i = 0; i < arrayOne.length; i++) {
      if(arrayOne[i] !== arrayTwo[i]) {
        result = false;
      } 
    }
  }
  return result;
};

const assertArraysEqual = function (actualArray,expectedArray){
  let finalResult = eqArrays(actualArray,expectedArray);
  return (finalResult ? console.log(`✅ Passed ${actualArray} === ${expectedArray}`) : console.log(`❌ Failed ${actualArray} !== ${expectedArray}`))
}; 

assertArraysEqual([1,2,3,4],[1,2,3]); 
assertArraysEqual([1,2,3,],[1,2,3]); 
assertArraysEqual([1,3,3,],[1,2,3]);