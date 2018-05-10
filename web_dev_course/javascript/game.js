// alert("Hello!")

//create secretNumber
var secretNumber = 4;

//
var guess = prompt("Guess a number");
// alert(guess);

//check guess
if (Number(guess) === secretNumber) {
  alert("You got it right!");
}

//otherwise, you got it wrong
// else {
//   alert("Wrong");
// }

//check if guess is higher
else if(Number(guess) > secretNumber) {
  alert("Too high, guess again");
}

else {
  alert("Number is too low");
}
