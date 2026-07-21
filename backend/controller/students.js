import { students } from "../table/student.js"

export const getAllStudents = async(req,res) =>{
  try {
    const data = await students.findAll ();
    res.status(200).json({
      "message":"all student names",
      data
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}