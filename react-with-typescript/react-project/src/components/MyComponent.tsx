interface Props {
  name: string;
  age: number;
}
export default function MyComponent({ name, age }: Props) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  )
}
