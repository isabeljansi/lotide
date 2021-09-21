

const assertArraysEqual = function (actualArray,expectedArray){
  let finalResult = eqArrays(actualArray,expectedArray);
  return (finalResult ? console.log(`✅ Passed ${actualArray} === ${expectedArray}`) : console.log(`❌ Failed ${actualArray} !== ${expectedArray}`))
}; 



module.exports = assertArraysEqual;