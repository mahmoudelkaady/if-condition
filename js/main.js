let st = "Elzero Web School";

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

if (typeof Number(st) === "number") {
  console.log("Good");
}

console.log(st.indexOf("W"));

if (st !== "string") {
  console.log("Good");
}

if (st.slice(st.indexOf("W"), st.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}

/////////////////////////////////////////////////

// Test Case 1
// let num = 9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

// if (num < 10) {
//   console.log("009");
// } else if (num > 10 && num < 100) {
//   console.log("020");
// } else if (num >= 100) {
//   console.log(num);
// }

// if ((num = num)) {
//   num >= 100 ? console.log(num) : console.log(num + 1);
// }

// num < 10
//   ? console.log("009")
//   : num >= 10 && num < 100
//   ? console.log("020")
//   : num >= 100
//   ? console.log(num)
//   : console.log("uknown");

// num > 10 && num < 100 ? console.log("020") : console.log(num);

///////////////////////////////

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// num3 < num1 && typeof num1 !== typeof String(num2)
//   ? console.log(
//       "30 Is Larger Than 10 And Type string Not The Same Type As number"
//     )
//   : num3 > num1 && num3 == num2 && typeof num3 !== typeof num2
//   ? console.log(
//       "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     )
//   : console.log("unknown")(
//       // Needed Output
//       "30 Is Larger Than 10 And Type string Not The Same Type As number"
//     );
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

//////////////////////////////////////////////

// Edit What You Want Here

let num1 = +"7";
let num2 = 5;
let num3 = +"7";
let num4 = 30;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log(num4 - (num1 + num3) + num2);
