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
    readonly firstName: string, // must be implemented 
    age?: number // optional
}
const human: Human = {
    firstName: 'Arry',

}
console.log(human);
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

// Arrow function
const addNum2 = (x: number, y: number): number => x + y;
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
console.log(human3);

// Function with interface
interface MathFunc {
    (x: number, y: number): number
}
const mathFunc1: MathFunc = (x: number, y: number): number => x + y;
const mathFunc2: MathFunc = x => x; // will work, not required specific quantity of parameters
const mathFunc3: MathFunc = (x, y) => x + y; //* don't have to specify types with interface applied
// const mathFunc4: MathFunc = (x: string): string => x; // can't do must be numbers like in interface
console.log(mathFunc1(5, 5));
console.log(mathFunc2(5, 5));
console.log(mathFunc3(6, 6));
// console.log(mathFunc3('f', 'g')); //* still error, not assignable to type number in interface

// Classes
interface PersonInterface {
    readonly name: string,
    readonly age: number,
    returnName(): string // without 'function' before the name
}
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