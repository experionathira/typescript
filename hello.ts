function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

// console.log(user);



//Basic types
//boolean
let isDone: boolean = false;
console.log(isDone);

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal);

//String
let color:string = "blue";
color = "red";
console.log(color);

//embedded expression
let fullName: string = `Athira S`;
let age: number = 22;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.` ;
console.log(sentence);

//array
let list: number[] = [1, 2, 3];
for (var i = 0; i < list.length; ++i) {
	console.log(list[i]);
}
let list1: Array<number> = [1, 2, 3, 4];
console.log(list1);

//tuple
let x:[string, number] = ["Athira", 503];
x = [10, "hello"]; 
console.log( x);
console.log(x[1].substr(3));
x[3] = "world"; 

x[5]=123;
x[5]=x[5].toString();
console.log(x);


//enum
enum Color { Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

enum Color {Red = 1, Green, Blue=4};
let c: Color = Color.Green;
console.log(Color);

enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 
console.log(typeof notSure);
notSure.ifItExists;
notSure.toFixed;
console.log(notSure);

function warnUser(): void {
   console.log("This is my warning message");
}
warnUser();

let unusable: void = undefined;
console.log(unusable);

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;
console.log(strLength);
console.log(strLength1);



function f() {
    var message = "Hello, world!";

    console.log(message) ;
}

f();


function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
       console.log(b);
    }
}

var g = f();
g(); 


function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

   console.log(sum) ;
 }
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}