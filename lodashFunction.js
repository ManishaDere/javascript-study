// chunk ==> [[1,2],[3,4],[5]];
// var numbers = [1, 2, 3, 4, 5];
// const arr1 = numbers.map((num) => {
//   let arr = [];
//   for (let i = 0; i < 2; i++) {
//     arr.push(num);
//   }
//   return arr;
// });

// console.log(arr1);

//iterate over array
//how many numbers we want in one array for ex=2

//palindrome ==madam
var str = "Madam";
function getReversed(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  return reversedStr;
}

const reversedStr = getReversed(str);
if (reversedStr.toLowerCase() === str.toLowerCase()) {
  console.log("string is palindrome");
} else {
  console.log("not palindrome");
}

//string reverse
//check 2 strings reversed and original

//factorial = 5 = 1*2*3*4*5

var n = 5;
function getFactorial(n) {
  let factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// console.log(getFactorial(n));

//nested array find max

const nestedArr = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 10, 11, 23],
];
var max = 0;
for (let i = 0; i < nestedArr.length; i++) {
  for (j = 0; j < nestedArr[i].length; j++) {
    if (nestedArr[i][j] > max) {
      max = nestedArr[i][j];
    }
  }
}

// console.log("max==", max);

let fibonacciArr = [0, 1];
function getFibonacciSeries(num) {
  for (i = 0; fibonacciArr.length < num; i++) {
    fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i + 1]);
  }
  return fibonacciArr;
}
const fibArray = getFibonacciSeries(5);
console.log(fibArray);
