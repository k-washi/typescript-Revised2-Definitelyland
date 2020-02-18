"use strict";

abstract class Shape { 
  constructor(private readonly _shapeName: string) { 
      this.displayInformation(); 
  } 

  abstract displayArea(): void; 
  abstract displayPerimeter(): void; 

  protected get shapeName(): string { 
      return this._shapeName 
  } 
  public displayInformation(): void { 
      console.log(`This shape is a ${this._shapeName}`); 
  } 
  public doSomething(): void { 
      console.log("Not interesting"); 
  } 
} 

class Square extends Shape { 
  constructor(private _width: number) { 
      super("Square"); 
  } 

  displayArea(): void { 
      const area = this._width * this._width; 
      console.log(`This ${this.shapeName} has an area of: ${area}`); 
  } 

  displayPerimeter(): void { 
      const perimeter = 2 * (this._width + this._width); 
      console.log(`This ${this.shapeName} has a perimeter of : 
       ${perimeter}`) 
  } 

  public doSomething(): void { 
      console.log("Something more interesting"); 
  } 
} 

let sq: Square = new Square(5);
sq.displayArea();
sq.displayInformation();
sq.displayPerimeter();
sq.doSomething();

let shape:Shape = new Square(10);
shape.doSomething();


class Calculator { 
  constructor(private _currentValue: number = 0) { } 

  add(a: number): this { 
      this._currentValue += a; 
      return this; 
  } 

  substract(a: number): this { 
      this._currentValue -= a; 
      return this; 
  } 

  multiply(a: number): this { 
      this._currentValue *= a; 
      return this; 
  } 

  divide(a: number): this { 
      this._currentValue /= a; 
      return this; 
  } 

  get value(): number { 
      return this._currentValue; 
  } 
} 

let result: number = new Calculator(0) 
  .add(5) // returns this 
  .multiply(2) // returns this 
  .add(10) // we can keep chaining method calls 
  .divide(4) 
  .substract(2) 
  .value; // returns the value 

console.log(`Result: ${result}`); // 3 


const plane: {    name: string,    description: string} = {    name: "Plane",    description: "Something that flies"};

var foo = (bar: {fn: string, ln: string}):void => {
  console.log(`Hello ${bar.fn}.. or should I call you Mr 
     ${bar.ln}?`);
}

foo({
  fn: "k", ln:"w"
});

var performCalculatio = (
  a: number,
  b: number,
  calculationFn: (x: number, y: number) => number
): void =>  {
  console.log(`The result is ${calculationFn(a, b)}`);
}
performCalculatio(
  5,
  10,
  (x: number, y: number) => x + y
);

//Type aliases
type thing = {
  name: string
  description: string
}

const myThing: thing = {
  name: "Conm",
  description: "tetsetets"
};
