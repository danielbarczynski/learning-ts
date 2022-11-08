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
// Enums
var Weekend;
(function (Weekend) {
    Weekend["Friday"] = "Friday";
    Weekend["Saturday"] = "Saturday";
    Weekend["Sunday"] = "Sunday";
})(Weekend || (Weekend = {}));
;
console.log(Weekend.Friday);
