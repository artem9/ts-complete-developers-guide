let apples: number = 3;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green'];
// let numbers: number[] = [3, 6, 7];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // { x: 10, y: 20 }

// 2) When we declare a variable on ome line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-4, -6, 32];
let numberAboveZero: boolean | number = false;

for (let num of numbers) {
  if (num > 0) {
    numberAboveZero = num;
  }
}
