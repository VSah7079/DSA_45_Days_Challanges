// write  a program to print Teenager if age is 13-19

let age = Number(prompt("Enter your age:"));
if (isNaN(age)) {
  console.log("Invalid input Please Enter a number:");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a Teenager");
}
