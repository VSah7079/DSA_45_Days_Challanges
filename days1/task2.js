//Create a menu-based program with options: Add, Subtract, Multiply, Divide

let choice = prompt(
  "Choose an operation: 1. Add 2. Subtract 3. Multiply 4. Divide"
);
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let result = 0;

switch (choice) {
  case "1":
    result = num1 + num2;
    console.log("Addition: " + result);
    break;
  case "2":
    result = num1 - num2;
    console.log("Substraction: " + result);
    break;
  case "3":
    result = num1 * num2;
    console.log("Multiplication: " + result);
    break;
  case "4":
    if (num2 !== 0) {
      result = num1 / num2;
      console.log("Division: " + result);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
    break;
  default:
    console.log("Invalid choice. Please select a valid operation.");
}
