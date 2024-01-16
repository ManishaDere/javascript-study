// in event delegation when user clicks on any child element we can observe or get that element
// on our parent event listener

// for ex. if we have ul with 1000's of li . Rather than writing click for thousands of li, writing click
// event for parent ul only we can get which li is clicked. this is only because og event bubbling

const ulEle = document.querySelector("#parent-ul");
ulEle.addEventListener("click", (e) => {
  // console.log("e", e.target.srcElement.outerText);
  console.log(e.target);
});
