//if
let score = 70;
if (score > 50) {
  console.log("Passed");
} else {
  console.log("fail");
}

//if else
let age;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//if else if
let marks = 100;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//switch case

let choice = 3;
switch (choice) {
  case 1:
    console.log("start");
    break;
  case 2:
    console.log("stop");
    break;
  case 3:
    console.log("pause");
    break;
  default:
    console.log("Invalid choice");
    break;
}

//for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//while loop

let i = 6;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop
let j = 11;
do {
  console.log(j);
  j++;
} while (j <= 15);

//continue statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip the iteration when i is 5
  }
  console.log(i); // this line will be skipped for i=5
}

//  break statement

for (let i=1; i<=5; i++){
    if(i===3){
        break; // exit the loop when i is 3
    }
    console.log(i); // this line will be skipped for i=3
}





