const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 20000);
});

// function callWithPromises() {
//   console.log("before primise");
//   p1.then((resp) => {
//     console.log("JS practice");
//     console.log(resp);
//     console.log("test");
//   });
//   console.log("after then");
// }
// callWithPromises();

// async function handlePromises() {
//   console.log("Hello");
//   const val1 = await p1;
//   console.log(val1);

//   const val2 = await p2;
//   console.log(val2);
// }

// handlePromises();

// async await ==>
const API_URL = "https://api.github.com/users/ManishaDere";

async function getUserInfo() {
  const data = await fetch(API_URL);
  const jsonData = await data.json();
  console.log("data ==>", jsonData);
}

getUserInfo();
/// to handle error we use try catch blocks

async function getUser() {
  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log("jsonData ==>", jsonData);
  } catch (err) {
    console.log(err);
  }
}

getUser();
