// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Failed: ${actual} !== ${expected}`);
  }
};

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