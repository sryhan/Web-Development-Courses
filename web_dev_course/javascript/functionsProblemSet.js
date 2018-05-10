// Write a function isEven() which takes a single numeric argument and returns
// true if the number is even and false otherwise


function isEven(x) {
  // if (x % 2 === 0) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return x % 2 === 0;
}


// write a function factorial() which takes a single numeric argument and returns
// the factorial of that number

function factorial (y) {
  var result = y;
  if (y === 0) {
    return 1;
  }
  else {
    while (y > 1) {
      y--;
      result = result * y;
    }
    return result;
  }
}

// write a function kebabToSnake() which takes a single kebab-cased string
// argument and returns the snake_cased version

function kebabToSnake(word) {
  var newWord = word.replace(/-/g, "_")
  return newWord
}
