const assert = require('chai').assert;
const expect = require('chai').expect;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for ['hello']", () => {
    assert.deepEqual(tail(['hello']),[])
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[])
  });

  it("returns 3 for words.length", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    expect(words.length).to.equal(3);
  });


});



// // TEST CODE for tail.js

// // Test Case 1: Check the returned array elements
// console.log('Test 1');
// const result = tail(['Hello', 'Lighthouse', 'Labs']);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], 'Lighthouse'); // ensure first element is 'Lighthouse'
// assertEqual(result[1], 'Labs'); // ensure second element is 'Labs'

// // Test Case 2: Check the original array
// console.log('Test 2');
// const words = tail(['Yo Yo', 'Lighthouse', 'Labs']);
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// //An array with only one element should yield an empty array for its tail
// console.log('Test 3');
// const testWord = tail(['hello']);
// assertEqual(testWord.length, 0); // ensure we get back 0 elements
// assertEqual(testWord[0], undefined); // ensure first element is null


// //An empty array should yield an empty array for its tail
// console.log('Test 4');
// const emptyArray = tail([]);
// assertEqual(emptyArray.length,0);
// assertEqual(emptyArray[0], undefined);