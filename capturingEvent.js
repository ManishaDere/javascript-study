document.getElementById("outer").addEventListener(
  "click",
  function () {
    console.log("Capturing Phase: Outer div clicked!");
  },
  true
); // Set the third parameter to `true` for event capturing

document.getElementById("middle").addEventListener(
  "click",
  function () {
    console.log("Capturing Phase: Middle div clicked!");
  },
  true
);

document.getElementById("inner").addEventListener(
  "click",
  function () {
    console.log("Capturing Phase: Inner div clicked!");
  },
  true
);

//just need to set third parameter to true for event capturing.
// it will happen from parent to child ===>
// top to bottom ==> window => document => body => div => btn click
