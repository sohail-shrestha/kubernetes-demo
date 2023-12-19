import express, { Express, Request, Response, Application } from "express";

const app: Application = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.json({ alive: true });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
