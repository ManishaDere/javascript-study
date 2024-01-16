// event bubblibg

document.getElementById("grand-parent-div").addEventListener("click", () => {
  console.log("grand parent div was clicked");
});

document.getElementById("parent-div").addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("parent div clicked");
});

document.getElementById("child-btn").addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("child btn clicked");
});
