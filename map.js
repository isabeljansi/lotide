
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




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//test 1

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

//test 2
const words2 = ["hello", "Jansi", "what"];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2,[ 'h', 'J', 'w' ]);