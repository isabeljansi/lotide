// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//EQARRAYS FUNCTION IMPLEMENTATION 

const eqArrays = function(arrayOne, arrayTwo){

  let result = true; 
  if(arrayOne.length !== arrayTwo.length) {
    result = false;
  }
  for(let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
        result = false;
    } 
  }
  return result;
};

//TEST CASES

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 3, 3, ], [1, 2, 3]), true);

//eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);