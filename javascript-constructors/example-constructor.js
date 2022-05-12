
var ExampleConstructor = function () {

};

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

const exampleObject = new ExampleConstructor();
console.log('value of exampleObject:', exampleObject);

const isInstanceOf = exampleObject instanceof ExampleConstructor;
console.log('object isInstanceOf constructor:', isInstanceOf);
