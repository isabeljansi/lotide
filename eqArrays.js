

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

module.exports = eqArrays;