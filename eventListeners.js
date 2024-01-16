function handleClick() {
  let count = 0;
  document.getElementById("ClickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

handleClick();

//function should be in closure so that outside environment can'nt access count. ===> Data hiding and encapsulation
// when we add evnet listeners we have to remove eventlisteners as it holds variable like count in their scope
// because we have to do Garbage collection so we use removeEventListeners
