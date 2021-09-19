var resultObj = {};

const letterPositions = function(sentenceString) {

var indices = [];

//REMOVE WHITE SPACES FROM THE STRING
var tempString = sentenceString.replace(/ /g,'');

//CONVERTING STRING TO ARRAY
var objStr = Object.assign([], tempString);

//converting array to set will remove duplicates- set will not allow duplicates
let uniqueChars = [...new Set(objStr)];

for(let j = 0; j < uniqueChars.length; j++) {
    
    for(let i = 0; i< sentenceString.length; i++){
      if (sentenceString[i] === uniqueChars[j]) {
        indices.push(i)
        };
    }
    console.log(uniqueChars[j]+": ["+indices+"],");
    resultObj[uniqueChars[j]]=indices;

    indices = [];
  }
}

letterPositions("lighthouse in the house");