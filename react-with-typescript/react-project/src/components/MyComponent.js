"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyComponent;
function MyComponent({ name, age }) {
    return (<div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>);
}
