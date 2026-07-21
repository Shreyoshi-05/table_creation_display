import { attendence } from "../table/attendence.js";
import { students } from "../table/student.js";



students.hasMany(attendence,{foreignKey : "studentId"});
attendence.belongsTo(students,{foreignKey:"studentId"});