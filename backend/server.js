import express from "express";
import cors from "cors";
import { addRouter } from "./routes/addRouter.js";
import { createRouter } from "./routes/createRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(addRouter);
app.use(createRouter);


const port = 3000;
app.listen(port,()=>{
  console.log("server is running on ",port);
});