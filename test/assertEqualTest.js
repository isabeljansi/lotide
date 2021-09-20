
// test/assertEqualTest.js

const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Comparing identical strings
assertEqual("Hello Isabel", "Hello Isabel");
// Comparing non-identical strings
assertEqual("Good Luck", "okay");
// Comparing identical numbers
assertEqual(155, 155);
// Comparing non-identical numbers
assertEqual(1, 1000);