const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  let finalResult = eqObjects(actual,expected);
  return (finalResult ? console.log(`✅ Passed ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌ Failed ${inspect(actual)} !== ${inspect(expected)}`))
};

//EQARRAYS FUNCTION IMPLEMENTATION TO CHECK IF ARRAYS ARE EQUAL

// const eqArrays = function(arrayOne, arrayTwo){

//   let result = true; 
//   if(arrayOne.length !== arrayTwo.length) {
//     result = false;
//   } else {
//     for(let i = 0; i < arrayOne.length; i++) {
//       if(arrayOne[i] !== arrayTwo[i]) {
//         result = false;
//       } 
//     }
//   }
//   return result;
// };

//EQOBJECTS 
// Returns true if both objects have identical keys with identical values else returns false
const eqObjects = function(object1, object2) {
  const util = require('util');

  //console.log(`key length 1: ${Object.keys(object1).length} -- key length 2: ${Object.keys(object2).length}`)
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  if(util.inspect(object1) !== util.inspect(object2)){
    return true;
  }
 
  for(let item of Object.keys(object1)) {
    if(Array.isArray(object1[item]) && Array.isArray(object2[item])){
      if(util.inspect(object1) !== util.inspect(object2)){
        return true;
      }
      // return eqArrays(object1[item], object2[item]);
    } 
    if(object1[item] !== object2[item]){
      return false;
    } 
  } return true; 
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba) ; // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false */


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false  