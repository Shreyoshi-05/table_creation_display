import express from "express";
import { getAllStudents } from "../controller/students.js";
import { postAttendence, studentsAttendence } from "../controller/attendence.js";

export const studentRouter = express.Router();

studentRouter.get("/students",getAllStudents);
studentRouter.get("/api/attendance",studentsAttendence);
studentRouter.post("/api/attendance",postAttendence);
