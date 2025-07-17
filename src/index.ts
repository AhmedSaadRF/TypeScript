var str = "Hello World";
alert(str);

let arr: number[] = [1, 2, 3, 4, 5];
let arr2: (string | number | boolean)[] = [1, 2, 3, true, "Hello"];
let arr3: any[] = [1, 2, 3, true, "Hello"];

let arr4: [string, number] = ["Hello", 1];
let arr5: (string | number)[] = ["Hello", 1];
arr4.push(20); // Error
arr5.push(20); // No Error

const fun: (x: number, y: number) => string = (x, y) => {
  return (x + y).toString();
};
