//  function to calculate sum of two numb.

let calc = function sum(numb1, numb2) {
  return numb1 + numb2;
};
console.log(calc(5, 5));

// Write a JavaScript function to check if a given string is a palindrome.

function check(word) {
  let rev = word.split("").reverse().join("");
  if (word == rev) {
    return true;
  } else {
    return false;
  }
}
console.log(check("racecar"));

//Write a JavaScript program to reverse a given string.
let intput = prompt("Enter a string: ");
function revstr(str) {
  let result = str.split("").reverse().join("");
  return result;
}
console.log(revstr(intput));
// Write a JavaScript function that takes an array of numbers and returns anew array with only the even numbers.

let allnumbers = [1, 2, 5, 10, 12, 18, 7, 3];

allnumbers.filter((ele) => {
  return ele % 2 === 0;
});

function evnumbs(...nums) {
  // another method if user want to enter his intput directly
  var userInput = Array.from(nums);
  return userInput.filter((ele) => {
    return ele % 2 === 0;
  });
}
console.log(evnumbs(5, 10, 7, 12));


// Implement a function to reverse a string without using the built-in reverse ()
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("sameh"));

// Implement a function to find the sum of all the numbers in an array.
let array_of_numbers = [1, 2, 7, 8, 9, 9, 7];

function sum(arr_numb) {
  let sumall = 0;
  for (let i = 0; i < arr_numb.length; i++) {
    sumall += arr_numb[i];
  }
  return sumall;
}
console.log(sum(array_of_numbers));

//or to enter input directly

function sum(...arr_numb) {
  let sumall = 0;
  for (let i = 0; i < arr_numb.length; i++) {
    sumall += arr_numb[i];
  }
  return sumall;
}
console.log(sum(1, 5, 6, 5));

// Write a function that accepts a number and returns its factorial (e.g.,factorial of 5 is 5 x 4 x 3 x 2 x 1).

function factorial(n) {
  if (n < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${n} is ${fact}.`);
  }
}
factorial(5);

//Implement a function that returns the average value of numbers in an array.
let arrAvrge = [1, 5, 6, 8, 9, 15];
function average(req_arr) {
  let sum_arr = 0;
  for (let i = 0; i < req_arr.length; i++) {
    sum_arr += req_arr[i];
  }
  return sum_arr / req_arr.length;
}

console.log(average(arrAvrge));

//Implement a function that finds the index of a specific element in an array.
function n_index(arr, ele) {
  return arr.indexOf(ele);
}
console.log(n_index(arrAvrge, 20)); // output is -1 cause elemnt not found

//How would you check if a number is an integer?
console.log(Number.isInteger(5)); // true output

// Create a function that takes the age in years and returns the age in days.

function days(years) {
  return console.log(years * 365);
}

// Explain what a callback function is and provide a simple example.
/* callback function is when function take another function as a parameter...

We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed.
This implies that if you have two functions in a row, one of which is asynchronous, function B will be performed while the other is still running. If function B is dependent on the data that function A is retrieving, you will run into issues.
*/
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);
