//Print all numbers between -10 and 10

var count1 = -10;

while (count1 < 20) {
  console.log(count1)
  count1++;
}

//Print all even numbers between 10 and 40
var count2 = 10;

while (count2 < 41) {
  if (count2 % 2 === 0) {
    console.log(count2);
  }
  count2++;
}

//Print all odd numbers between 300 and 333
var count3 = 300;

while (count3 < 334) {
  if (count3 % 2 != 0) {
    console.log(count3)
  }
  count3++
}


//Print all numbers divisible by 5 AND 3 between 5 and 50
var count4 = 5;

while (count4 < 51) {
  if (count4 % 5 === 0 && count4 % 3 === 0) {
    console.log(count4);
  }
  count4++;
}
