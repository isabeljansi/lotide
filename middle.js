



const middle = function(originalArray) {
  let middleArray =[];
  let length = originalArray.length;
  if(length === 1 || length === 2){
    return middleArray;
  }
  if (length % 2 == 1) { // If length is odd
    middleArray[0] = originalArray[(length / 2) - .5];
    return middleArray;
  } else {   
    middleArray[0] = originalArray[(length / 2) - 1];
    middleArray[1] = originalArray[length / 2];
    return middleArray;
  }
}



module.exports = middle;