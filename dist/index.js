"use strict";
// Basic types
let id = 1;
const firstName = 'Jon';
const isTrue = false;
let anything = 'anything';
// Testing
id = 3;
// id = 'aw'; // error
anything = 3; // works
console.log(id);
// Arrays
const myArr = [1, 2, 3, 4, 5];
const myArrAny = ['hey', 5, true];
// Tuple
const person = ['Brad', 35, true];
const person2 = [
    ['Daniel', 23],
    ['Nicole', 21]
];
// Union
let numAndString;
numAndString = 5;
numAndString = '5';
// Enums (only in TypeScript)
var Weekend;
(function (Weekend) {
    Weekend["Friday"] = "Friday";
    Weekend["Saturday"] = "Saturday";
    Weekend["Sunday"] = "Sunday";
})(Weekend || (Weekend = {}));
;
console.log(Weekend.Friday);
const human = {
    firstName: 'Arry',
    age: 15
};
// human.firstName = 'd'; // error - readonly
const human2 = {
    firstName: 'Marry',
    age: 666
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 20));
function printSomething(text) {
    console.log(text);
}
printSomething('wassup');
const human3 = {
    firstName: 'Darry',
    age: 59 // if missing e.g. age prop, then will return error
};
const mathFunc1 = (x, y) => x + y;
const mathFunc2 = (x, y) => x - y;
// Classes
class Person {
    name; // public by default
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    returnName() {
        return this.name;
    }
}
const daniel = new Person('Daniel', 23);
console.log(daniel);
console.log(daniel.returnName());
// console.log(daniel.name); // error because private
// Subclass
class Employee extends Person {
    position;
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
}
const employee = new Employee('Shawn', 42, 'Manager');
console.log(employee);
console.log(employee.returnName());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(['Josh', 'Joe']);
console.log(numArray);
console.log(strArray);
