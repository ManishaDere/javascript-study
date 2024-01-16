// function statement or function declaration
a();
// b();
function a() {}
// function expression

// var b = function () {};

// anonymous functions
// function with no name is called as anonymous function

//First class functions ===> it means we can pass function as argument and return function from function

var func1 = function () {
  return function x() {
    console.log("x called");
  };
};

var func2 = func1();

// first class citizens
// arrow functions
