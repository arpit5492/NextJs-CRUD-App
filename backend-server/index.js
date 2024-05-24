import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;

// Middleware functions
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`The server is running on port: http://localhost:${port}`);
});
