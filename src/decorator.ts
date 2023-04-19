// import { debugger } from 'quokka';

// simple decorator class
// function Logger(constructor) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// @Logger
// class Person {
//     name = 'Daniel';
//     constructor() {
//         console.log('Creating person object...');
//     }
// }


function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }
   
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {}
  }