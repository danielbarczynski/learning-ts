// Basic types
let id: number = 1;
const firstName: string = 'Jon';
const isTrue: boolean = false;
let anything: any = 'anything';

// Testing
id = 3;
// id = 'aw'; // error
anything = 3; // works

console.log(id);

// Arrays
const myArr: number[] = [1, 2, 3, 4, 5];
const myArrAny: any[] = ['hey', 5, true];

// Tuple
const person: [string, number, boolean] = ['Brad', 35, true];
const person2: [string, number][] = [
    ['Daniel', 23],
    ['Nicole', 21]
];

// Union
let numAndString: string | number
numAndString = 5;
numAndString = '5';

// Enums (only in TypeScript)
enum Weekend {
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
};

console.log(Weekend.Friday);

// Object
const human2: {
     firstName: string,
     age: number 
} = {
    firstName: 'Marry',
    age: 666 
}

type Human = {
    firstName: string,
    age: number
}

const human: Human = {
    firstName: 'Arry',
    age: 15 
}