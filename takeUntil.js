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


const takeUntil = function(array, callback) {
  // ...
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])){
      resultArray.push(array[i]);
    } else { 
      return resultArray;
    }
  } 
};  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])  ;

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

