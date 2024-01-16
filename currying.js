// transforms a function with multiple arguments into series of functions with one argument
// it avoids passing same argument multiple times

function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

const a = multiply(2);
const b = a(3);
const mul = b(4);
console.log("mul", mul);

const multiplication = multiply(2)(3)(4);
console.log("multiplication ==>", multiplication);

const sameArgumentAFunction = a(5)(6);
console.log("sameArgumentAFunction ==>", sameArgumentAFunction);
