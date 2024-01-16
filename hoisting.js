console.log(a);
var a = 5;
function add(arg) {
  var sum = 5 + arg;
  return sum;
}

add(a);

//Global execution context is created
// Memory allocation and code execution
// a : undefined
// add: function

// in call stack this Global execution context is ProgressEvent. when we start executing add function
// then new execution context is created for this
