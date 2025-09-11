const max = prompt("Enter a Maximmum Number ");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess The Number");

while (true) {
  if (guess == "quit") {
    console.log("user Quit");
    break;
  }

  if (guess == random) {
    console.log("Hurray! You Guess Right Number", random);
    break;
  } else if (guess < random) {
    guess = prompt("Yout Guess was to small! Please Try again!");
  } else {
    guess = prompt("Yout Guess was to Large! Please Try again!");
  }
}
