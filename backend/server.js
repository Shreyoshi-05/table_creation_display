import express from "express";
import cors from "cors";
import { db } from "./db/db.js";
import { students } from "./table/student.js";
import { attendence } from "./table/attendence.js";
import { studentRouter } from "./routes/studentsRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(studentRouter);

db.sync()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log("server is running on ", port);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
