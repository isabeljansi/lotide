// ASSERT FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TAIL FUNCTION IMPLEMENTATION
const tail = function(arrayList) {
  let newArray = arrayList.slice(1);
  return newArray;
};

// TEST CODE

// Test Case 1: Check the returned array elements
console.log("Test 1");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
console.log("Test 2");
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//An array with only one element should yield an empty array for its tail
console.log("Test 3");
const testWord = tail(["hello"]);
assertEqual(testWord.length, 0); // ensure we get back 0 elements
assertEqual(testWord[0], undefined); // ensure first element is null


//An empty array should yield an empty array for its tail
console.log("Test 4");
const emptyArray = tail([]);
assertEqual(emptyArray.length,0);
assertEqual(emptyArray[0], undefined);