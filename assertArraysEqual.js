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

const assertArraysEqual = function (array1,array2){
  let finalResult = eqArrays(array1,array2);
  return (finalResult ? console.log(`✅ Passed ${array1} === ${array2}`) : console.log(`❌ Failed ${array1} !== ${array2}`))
}; 

assertArraysEqual([1,2,3,4],[1,2,3]); 
assertArraysEqual([1,2,3,],[1,2,3]); 
assertArraysEqual([1,3,3,],[1,2,3]);