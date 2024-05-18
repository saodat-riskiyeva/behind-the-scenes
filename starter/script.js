'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milleanial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(milleanial);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(age);

var age = 37;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log('Function Expression this keyword equals "' + this + '"');
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log('Arrow function this keyword equals "' + this + '"');
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calAge();

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge;
matilda.calAge();

const f = jonas.calAge;
f();
