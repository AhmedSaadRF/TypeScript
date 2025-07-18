import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const x = req.query;
  res.send(x);
});
console.log("Hello, World!");


app.listen(3000, () => {
  console.log('Server started on port 3000');
});