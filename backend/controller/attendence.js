import { attendence } from "../table/attendence.js";
import { students } from "../table/student.js";

export const studentsAttendence = async (req, res) => {
  try {
    const {date} = req.query;
    const data = await attendence.findAll({
      where: {date}
    });

    if (data.length === 0) {
      return res.status(404).json({
        message: "No attendance found",
        success: false,
      });
    }

    res.status(200).json({
      message:"data got",
      success:true,
      data
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const postAttendence = async(req,res) => {
  try {
    const {date , records} = req.body;

    for(let item of records){
      await attendence.create({
        studentId:item.id,
        date:date,
        status:item.status
      })
    };

    res.status(200).json({
      message:"attendence saved successfully"
    })

  } catch (error) {
    res.status(500).json({
      "message":error.message
    })
  }
}