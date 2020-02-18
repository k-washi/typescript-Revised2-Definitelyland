"use strict";
class Shape {
    constructor(_shapeName) {
        this._shapeName = _shapeName;
        this.displayInformation();
    }
    get shapeName() {
        return this._shapeName;
    }
    displayInformation() {
        console.log(`This shape is a ${this._shapeName}`);
    }
    doSomething() {
        console.log("Not interesting");
    }
}
class Square extends Shape {
    constructor(_width) {
        super("Square");
        this._width = _width;
    }
    displayArea() {
        const area = this._width * this._width;
        console.log(`This ${this.shapeName} has an area of: ${area}`);
    }
    displayPerimeter() {
        const perimeter = 2 * (this._width + this._width);
        console.log(`This ${this.shapeName} has a perimeter of : 
       ${perimeter}`);
    }
    doSomething() {
        console.log("Something more interesting");
    }
}
let sq = new Square(5);
sq.displayArea();
sq.displayInformation();
sq.displayPerimeter();
sq.doSomething();
let shape = new Square(10);
shape.doSomething();
class Calculator {
    constructor(_currentValue = 0) {
        this._currentValue = _currentValue;
    }
    add(a) {
        this._currentValue += a;
        return this;
    }
    substract(a) {
        this._currentValue -= a;
        return this;
    }
    multiply(a) {
        this._currentValue *= a;
        return this;
    }
    divide(a) {
        this._currentValue /= a;
        return this;
    }
    get value() {
        return this._currentValue;
    }
}
let result = new Calculator(0)
    .add(5) // returns this 
    .multiply(2) // returns this 
    .add(10) // we can keep chaining method calls 
    .divide(4)
    .substract(2)
    .value; // returns the value 
console.log(`Result: ${result}`); // 3 
const plane = { name: "Plane", description: "Something that flies" };
var foo = (bar) => {
    console.log(`Hello ${bar.fn}.. or should I call you Mr 
     ${bar.ln}?`);
};
foo({
    fn: "k", ln: "w"
});
var performCalculatio = (a, b, calculationFn) => {
    console.log(`The result is ${calculationFn(a, b)}`);
};
performCalculatio(5, 10, (x, y) => x + y);
