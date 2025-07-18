"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatus = void 0;
var str = "Hello World";
alert(str);
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, true, "Hello"];
let arr3 = [1, 2, 3, true, "Hello"];
let arr4 = ["Hello", 1];
let arr5 = ["Hello", 1];
arr4.push(20); // Error
arr5.push(20); // No Error
const fun = (x, y) => {
    return (x + y).toString();
};
const xxxx = {
    name: "John",
    age: 30,
};
const yyyy2 = "Hello";
const yyyy3 = 1;
const yyyy4 = true;
const yyyy = {
    name: "John",
    age: 30,
};
console.log(xxxx.name);
const obj = {
    name: "John",
};
const mynumber = obj.age;
const mynumber2 = (_a = obj.age) !== null && _a !== void 0 ? _a : 0;
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const mycolor = Color.Red;
console.log(mycolor);
let coloring = Color.Red;
if (coloring === Color.Red) {
    console.log(Color.Red);
}
var BookingStatus;
(function (BookingStatus) {
    BookingStatus[BookingStatus["PENDING"] = 0] = "PENDING";
    BookingStatus[BookingStatus["CONFIRMED"] = 1] = "CONFIRMED";
    BookingStatus[BookingStatus["CANCELLED"] = 2] = "CANCELLED";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
const bookingStatus = BookingStatus.CONFIRMED;
// Classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const c = new Car("Ford", 2020);
class Car2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const c2 = new Car2("Ford", 2020);
class Car3 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    sayHello() {
        console.log("Hello");
    }
}
const c3 = new Car3("Ford", 2020);
// Generic
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("John"));
greet(1);
// General Objects Types
const obj2 = {
    name: "John",
    age: 30,
};
obj2.username = "Jane";
const user = {
    id: "1",
    name: "John",
};
const user2 = {
    id: "1",
    name: "John",
};
const user3 = {
    id: "1",
    name: "John",
};
const user4 = {
    id: "1",
    name: "John",
    email: "john@gmail.com",
};
