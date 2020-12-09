//boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;

//string
let color: string = 'blue';
let age: number = 12;
let sentence: string =
    "hello, my name is " +
    color +
    ".\n\n" +
    "I'll be" +
    (age + 1) +
    "years old next month";

// console.log(sentence);

//array
//first way
//npx ts-node 运行代码
let list : number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

let tuple: [string, number];
tuple = ["hello", 4];

//console.log(tuple[0].substring(1));

//enum
enum Color {
    Red ,
    Green,
    Blue,
}
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);

//Unknown
