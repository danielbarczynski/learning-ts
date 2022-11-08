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
type Human = {
    readonly firstName: string,
    age?: number
}


const human: Human = {
    firstName: 'Arry',
    age: 15
}

// human.firstName = 'd'; // error - readonly

const human2: {
     firstName: string,
     age: number 
} = {
    firstName: 'Marry',
    age: 666 
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions 
function addNum(x: number, y: number): number { // if just (x, y) returns error
    return x + y;
}

console.log(addNum(10, 20));

function printSomething(text: number | string): void {
    console.log(text);
}

printSomething('wassup');

// Interface
type HumanInterface = {
    firstName?: string, // optional
    readonly age: number
}

const human3: HumanInterface = {
    firstName: 'Darry',
    age: 59 // if missing e.g. age prop, then will return error
}

//  human3.age = 3; // error - readonly

interface MathFunc {
    (x: number, y: number): number
}

const mathFunc1: MathFunc = (x: number, y: number): number => x + y;
const mathFunc2: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
    readonly name: string,
    readonly age: number,
    returnName(): string
}

// Classes
class Person implements PersonInterface{
    readonly name: string; // public by default
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    returnName() { // without 'function' before the name
        return this.name;
    }
}

const daniel = new Person('Daniel', 23);

console.log(daniel);
console.log(daniel.returnName());
// console.log(daniel.name); // error because private