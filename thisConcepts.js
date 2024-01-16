// this refers to functions wrapper's lexical scope
const outer = () => {
  this.a = 1;
  const add = () => {
    console.log("this ==>", this);
  };
  return add;
};
outer()();

// if we create new object from existing object

const obj = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(obj.add(1, 2));

const newObj = Object.create(obj);
newObj.param1 = 1;
newObj.param2 = 2;

console.log("newObj ==>", newObj);

// class based using constructor

class A {
  constructor() {
    this.p1 = 1;
  }
}
let objClass = new A();
console.log("class obj", objClass);

// this for bind== it returns new function and we have to pass context in which function
// should execute with parameters to pass to function

function add1(a, b) {
  return this.text + " " + (a + b);
}
const textWithAddition = add1.bind({ text: "Hello" }, 1, 2);
console.log(textWithAddition());

// call apply

console.log(add1.call({ text: "hey call" }, 1, 2));
console.log(add1.apply({ text: "hey apply method:" }, [1, 2]));
