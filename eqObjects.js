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
  } else {
    for(let i = 0; i < arrayOne.length; i++) {
      if(arrayOne[i] !== arrayTwo[i]) {
        result = false;
      } 
    }
  }
  return result;
};

// Returns true if both objects have identical keys with identical values else returns false
const eqObjects = function(object1, object2) {

  //console.log(`key length 1: ${Object.keys(object1).length} -- key length 2: ${Object.keys(object2).length}`)
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
 
  for(let item of Object.keys(object1)) {
    if(Array.isArray(object1[item]) && Array.isArray(object2[item])){
      return eqArrays(object1[item], object2[item]);
    } 
    if(object1[item] !== object2[item]){
      return false;
    } 
  } return true; 
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true) ; // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false */


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false  