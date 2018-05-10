var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
// var h1 = document.querySelector("h1");
var p1display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = numInput;
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", function() {
  if(!gameOver){
    p1Score++;
    console.log(p1Score, winningScore);
    if(p1Score === winningScore) {
      // console.log("Game Over!");
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
})

// console.log(resetButton);

resetButton.addEventListener("click", function() {
  // console.log("reset clicked")
  reset();
  numInput.value = 0;
  winningScoreDisplay.textContent = 0;
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function() {
  // alert("changed the input");
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
})
