var x = 1;

a();

b();

console.log("x==", x);

function a() {
  var x = 10;
  console.log("x==", x);
}

function b() {
  var x = 100;
  console.log("x==", x);
}

////SHORTEST JS program is empty file. before execution of this Global execution context is
// created even before single line of code is executed
