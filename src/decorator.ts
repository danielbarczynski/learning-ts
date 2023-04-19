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

  function addProperty(target: any) {
    target.myProperty = "Hello, world!";
  }
  
  @addProperty
  class MyClass {
    static myProperty: any;
  }
  
  console.log(MyClass.myProperty); 
  