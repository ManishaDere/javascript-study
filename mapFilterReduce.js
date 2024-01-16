var items = [1, 2, 3, 4, 5, 6];
var users = [
  { name: "abc", age: 25 },
  { name: "xyz", age: 26 },
  { name: "pqr", age: 27 },
  { name: "lmn", age: 25 },
];

const double = (item) => {
  return item * 2;
};
const doubledArr = items.map(double);
console.log("items ==>", items);
console.log("doubledArr ==>", doubledArr);

const max = items.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log("max==", max);

//filter array with even numbers

const evenNumbers = items.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});

console.log("even numbers ==>", evenNumbers);

// {25: 2, 26:1, 27:1}

const obj = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("obj==>", obj);

// get list of user names whose age is less than 26

const usersList = users
  .filter((user) => user.age < 26)
  .map((user) => user.name);

console.log("usersList ==>", usersList);

// above using reduce

const usersLessThan26 = users.reduce((acc, curr) => {
  if (curr.age < 26) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log("usersLessThan26 ==>", usersLessThan26);

var userName = "Sooraj";

function b() {
  console.log("b: ", userName);

  const userName = "Mohan";
}

b();
