//print 1 to 5 after 1-after 1 sec, 2 after 2 sec.... using let
// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello world");
// }

// x();

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello world");
// }

// x();
// when w euse var then each time same copy of var i is passed that is 6 so it prints 6 for 5times

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Hello world");
}

x();
