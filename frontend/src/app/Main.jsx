import React, { useState } from "react";
import "../css/main.css";
import Create from "./create";
import Insert from "./Insert";
import { useEffect } from "react";

const Main = () => {
  const [table, setTables] = useState(["user", "student"]);
  const [showInsert, setShowInsert] = useState(false);
  const [date, setDate] = useState();
  const [studentsData, setStudentsData] = useState([]);

  async function showStudents() {
    try {
      const res = await fetch("http://localhost:3000/students");
      const ans = await res.json();
      setStudentsData(ans);
      // console.log(ans);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const handelSearch = async () => {
      if (!date) return;

      try {
        const res = await fetch(
          `http://localhost:3000/api/attendance?date=${date}`,
        );
        const data = await res.json();
        console.log(data);

        if(Array.isArray(data.data) && data.data.length > 0){
          setStudentsData(data.data);
        }else{
          showStudents()
        }

        // setStudentsData(data);
      } catch (err) {
        console.log(err);
      }
    };
    handelSearch();
  }, [date]);

  if(!studentsData){
    return;
  }

  return (
    <div className="container">
      {/* {showInsert && (
        <div className="showCreate">
          <Create />
        </div>
      )} */}

      <div className="inner">
        <div className="calender">
          <div className="input">
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        <div className="nav">
          <button>Insert record</button>
        </div>

        {/* show table */}
      </div>

      <div className="main">
        {
          studentsData.map((stu,idx)=>{
            return(
              <div className="each_stu" key={idx}>
                {stu.name}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Main;
