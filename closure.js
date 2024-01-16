function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

const funct = x();
funct();
