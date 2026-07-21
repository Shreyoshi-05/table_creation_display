import express from  "express";
import { addRouterController } from "../controller/addController.js";

export const addRouter = express.Router();

addRouter.post("/add",addRouterController)