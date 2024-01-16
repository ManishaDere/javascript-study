// call by value is used by primitive data types
// Number, string, boolean, null, undefined
var a = 5;
var b = a;
if (a === b) {
  console.log("yes a and b are equal");
}

// call by reference is used by non-primitive data types
// array, object, function

var obj1 = {};
var obj2 = obj1;
obj1.foo = 10;

console.log("obj1 and obj2 ==>");
console.log({ obj1, obj2 }); // both obj1 and obj2 pointing to same memory location

var arr1 = [10];
var arr2 = [10];
// check if both arrays are same or not

if (arr1 === arr2) {
  // it will return different because both points to different memory location
  console.log("both arr1 and arr2 are same");
} else {
  console.log("arr1 and arr2 are different");
}

if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  console.log("string format of both arrays are same");
}

// lets check function
function add(a, b) {
  return a + b;
}
console.log("addition ===>", add(1, 2));

var sum = add;
console.log(sum === add);
