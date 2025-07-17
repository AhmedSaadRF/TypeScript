"use strict";
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
