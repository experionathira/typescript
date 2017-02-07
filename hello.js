function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
// console.log(user);
//Basic types
//boolean
var isDone = false;
console.log(isDone);
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
//String
var color = "blue";
color = "red";
console.log(color);
//embedded expression
var fullName = "Athira S";
var age = 22;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; ++i) {
    console.log(list[i]);
}
var list1 = [1, 2, 3, 4];
console.log(list1);
//tuple
var x = ["Athira", 503];
x = [10, "hello"];
console.log(x);
console.log(x[1].substr(3));
x[3] = "world";
x[5] = 123;
x[5] = x[5].toString();
console.log(x);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(Color);
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(typeof notSure);
notSure.ifItExists;
notSure.toFixed;
console.log(notSure);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var unusable = undefined;
console.log(unusable);
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length;
console.log(strLength);
console.log(strLength1);
function f() {
    var message = "Hello, world!";
    console.log(message);
}
f();
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        console.log(b);
    };
}
var g = f();
g();
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    console.log(sum);
}
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
