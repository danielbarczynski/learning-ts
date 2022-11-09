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

// Subclass
class Employee extends Person {
    position: string;

    constructor(name: string, age: number, position: string) {
        super(name, age);
        this.position = position;
    }
}

const employee = new Employee('Shawn', 42, 'Manager');
console.log(employee);
console.log(employee.returnName());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

const numArray = getArray<number>([1, 2, 3, 4]);
const strArray = getArray<string>(['Josh', 'Joe']);

console.log(numArray);
console.log(strArray);

//--------------------------------------

// Practicing
let numm: number = 5;
const arrr: string[] = ['jack', 'd'];
const tupp: [string, number] = ['d', 3];
let unn: string | number = '5';
enum www {
    w = 'w',
    ww = 'ww',
    www = 'www'
}

function sayDeclar(namm: string): void {
    console.log(`Hello ${namm}`);
}

const sayExpres = function (namm: string) {
    console.log(`Hello ${namm}`);
}
const sayArrow = (namm: string) => {
    console.log(`Hello ${namm}`);
}

const sayArrow2 = (namm: string) => console.log(`Hello ${namm}`);

sayDeclar('Declar');
sayExpres('Expres');
sayArrow('Arrow');
sayArrow2('Arrow2');

let somm: any;
somm = '50' as string;

type Typp = {
    namm: string,
    readonly agg: number
}

interface TyppInterface {
    namm: string,
    readonly agg: number 
}

const typp: Typp = {
    namm: 'man',
    agg: 22
}

const typp2: TyppInterface = {
    namm: 'm',
    agg: 50
}

class Class implements TyppInterface {
    namm: string
    agg: number
    returnAge() {
        return this.agg;
    }
    constructor(namm: string, agg: number) {
        this.namm = namm;
        this.agg = agg;
    }
}

class SubClass extends Class {
    constructor(namm: string, agg: number) {
        super(namm, agg);
    }
}