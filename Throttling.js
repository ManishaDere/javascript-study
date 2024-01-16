// call function or API after 2000 ms/ 2seconds of time gets elapsed
// considering window resize method

function getData() {
  console.log("Data Fetched");
}

function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (flag == true) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const betterFunctionThrottle = throttle(getData, 2000);
window.addEventListener("resize", betterFunctionThrottle);
