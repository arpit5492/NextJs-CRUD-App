import express from "express";
import morgan from "morgan";
import cors from "cors";
import formData from "./routes/formData.js";

const app = express();
const port = 4000;

// Middleware functions
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", formData);

app.listen(port, () => {
  console.log(`The server is running on port: http://localhost:${port}`);
});
