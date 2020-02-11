//Random Decimal between 0 and 1 

function randomFraction() {

    return Math.random();
  }

//Generate Random Whole Numbers with JavaScript
//It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.
// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
// Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.
// Use this technique to generate and return a random whole number between 0 and 9.
  
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  return Math.floor(Math.random() * 10 );
}



// Generate Random Whole Numbers within a Range
// Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.
// To do this, we'll define a minimum number min and a maximum number max.
// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

// Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

//Example
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  ourRandomRange(1, 9);

  //Example 2 
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.Random() * (myMax - myMin +1)) + myMin;
  }
  var myRandom = randomRange(5, 15);


//  Use the parseInt Function
// The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");

// The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
function convertToInteger(str) {
    return parseInt(str)
}
convertToInteger("56");

