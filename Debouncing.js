function getData() {
  console.log("Data Fetched");
}

function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

const betterFunction = debounce(getData, 1000);
