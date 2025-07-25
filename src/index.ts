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

// Interface
interface Person {
  name: string;
  age: number;
}
const xxxx: Person = {
  name: "John",
  age: 30,
};

// Type Alias
type MyType = string | number | boolean;
const yyyy2: MyType = "Hello";
const yyyy3: MyType = 1;
const yyyy4: MyType = true;

type Person2 = {
  name: string;
  age: number;
};
const yyyy: Person2 = {
  name: "John",
  age: 30,
};

console.log(xxxx.name);

// Optional Chaining
type Person3 = {
  name: "John",
  age?: 30,
};
const obj: Person3 = {
  name: "John",
};

const mynumber: number = obj.age!;
const mynumber2: number = obj.age ?? 0;

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
const mycolor: Color = Color.Red;
console.log(mycolor);
let coloring: Color = Color.Red;
if (coloring === Color.Red) {
  console.log(Color.Red);
}

export enum BookingStatus {
  PENDING,
  CONFIRMED,
  CANCELLED,
}
const bookingStatus: BookingStatus = BookingStatus.CONFIRMED;

// Classes
class Car {
  name: string;
  year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
}
const c = new Car("Ford", 2020);

// Interface for Class
interface IVehicle {
  name: string;
  year: number;
}
class Car2 implements IVehicle {
  name: string;
  year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
}
const c2 = new Car2("Ford", 2020);

interface IVehicle2 {
  name: string;
  year: number;
  sayHello: () => void;
}
class Car3 implements IVehicle2 {
  name: string;
  year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    console.log("Hello");
  }
}
const c3 = new Car3("Ford", 2020);

// Generic
function greet<T>(name: T): string {
  return `Hello ${name}`;
}
console.log(greet("John"));
greet<number>(1);

// General Objects Types
const obj2:{[key:string]:any} = {
  name: "John",
  age: 30,
};
obj2.username = "Jane";

// Omit
interface User {
  id: string;
  name: string;
  email: string;
}
const user: Omit<User, "email"> = {
  id: "1",
  name: "John",
};

// Pick
interface User1 {
  id: string;
  name: string;
  email: string;
}
const user2: Pick<User1, "id" | "name"> = {
  id: "1",
  name: "John",
};

// Partial
interface User2 {
  id: string;
  name: string;
  email: string;
}
const user3: Partial<User2> = {
  id: "1",
  name: "John",
};

// Required
interface User3 {
  id?: string;
  name?: string;
  email?: string;
}
const user4: Required<User3> = {
  id: "1",
  name: "John",
  email: "john@gmail.com",
};



