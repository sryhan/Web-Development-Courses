//
// printReverse()
//
// Write a function printReverse() that takes an array as an argument and prints
// out the elements in the array in reverse order(don't actually reverse the array
// itself)

console.log("Connected")

function printReverse(inputArray) {
  for(var i = inputArray.length - 1; i >= 0; i--) {
    console.log(inputArray[i]);
  }
}

printReverse([4,76,4,7]);

// isUniform()
// write a function isUniform() which takes an array as an argument and returns
// true if all elements in the array are identical

function isUniform(arrayValues) {
  var first = arrayValues[0];
  for ( var i = 1; i < arrayValues.length; i++) {
    if(arrayValues[i] !== first) {
      return false
    }
  }
  return true;
}

console.log(isUniform([3,3,3,3,3]))



// sumArray()
// Write a function sumArray() that accepts an array of numbers and returns the
// sum of all number in the array

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(value) {
    total += value;
  });
  return total;
}

console.log(sumArray([1,2,3,4,5]))

// max()
// write a function max() that accepts an array of numbers and returns the
// maximum number in the array

function max(arr) {
  maximum = 0
  arr.forEach(function(value) {
    if (value > maximum) {
      maximum = value;
    }
  })
  return maximum;
}

console.log(max([5,3,7,3,75,-345345,23,88,2,3,5,7,45]))
