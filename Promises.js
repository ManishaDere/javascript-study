const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("p1 success"), 1000);
  setTimeout(() => reject("p1 fail"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 2000);
  // setTimeout(() => reject("p2 fail"), 2000);
});

// displays which first success or both success or first failure
// Promise.all([p1, p2])
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

// display both success or 1 success 1 failure in same array or display both failures in same array
// Promise.allSettled([p1, p2])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.error(error));

//displays first success or first reject
// Promise.race([p1, p2])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.error(error));

// displays aggregate of all err and success, only errs if all fails
Promise.any([p1, p2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error));
