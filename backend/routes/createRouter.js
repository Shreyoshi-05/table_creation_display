import express from  "express";
import { createRouterController } from "../controller/createController.js";

export const createRouter = express.Router();

createRouter.post("/create",createRouterController)