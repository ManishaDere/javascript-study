let name1 = {
  firstName: "Manisha",
  lastName: "Dere",
  fullName: function (homeTown) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown);
  },
};

name1.fullName.call(name1, "Astagaon"); // calls function using call with argument name1 as this context

//calls function fullName using apply with array of arguments and name1 as this context
name1.fullName.apply(name1, ["Astagaw"]);

// this context means context which we wants to use

// bind method binds function with their context. difference from call, apply amd bind is
// bind returns method which we can use at any place in remaining code

let withBind = name1.fullName.bind(name1, "Derewadi");
console.log(withBind); // it returns function
withBind();
