age = 35

if(age < 0) {
  console.log("Error, age cannot be negative")
}

else if (age == 21) {
  console.log("Happy 21st birthday")
}

else if (age % 2 == 0) {
  console.log("Your age is odd!")
}

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
