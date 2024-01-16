const arr = ["asdsd", "safsdf", "a"];

const obj = {
  getRoll: 12,
};

const obj1 = {
  firstName: "Manisha",
  lastName: "Dere",
  __proto__: obj,
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const obj2 = {
  firstName: "Sachin",
  lastName: "Tendulakar",
  __proto__: obj1,
};

// obj2.__proto__ = obj1;

console.log(obj2.getRoll);
