//Write a program to check whether a number is positive, negative or zero

let input = prompt("Enter number");
let number = Number(input);

if (isNaN(number)) {
  console.log("Invalid input");
} else if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
