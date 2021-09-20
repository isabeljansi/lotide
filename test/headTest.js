
// test/headTest.js
const assertEqual = require('../assertEqual');
const assertEqual = require('../head');



// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//An array with only one element should still yield that one element as its head
assertEqual(head([5]), 5);
//An empty array should yield undefined as its head
assertEqual(head([]),);