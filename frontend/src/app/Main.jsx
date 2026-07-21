import React, { useState } from 'react'
import "../css/main.css"
import Create from './create';
import Insert from './Insert';



const Main = () => {
  const [table,setTables] = useState(["user","student"]);
  const [showCreate, setShowCreate] = useState(true);
  const [showInsert, setShowInsert] = useState(true);


  return (
    <div className="container">

      <div className="showCreate">
        {
          showCreate && <Create />
        }
      </div>

      <div className="showCreate">
        {
          showInsert && <Insert />
        }
      </div>

      <div className="left">

        <div className="all_tables">
          {
            table.map((item)=>{
              return(
                <div className="names">
                  {item}
                </div>
              )
            })
          }
        </div>

        <button onClick={()=>setShowCreate(!showCreate)}>Create Table</button>

      </div>

      <div className="right">

        <div className="nav">
          <button>Insert record</button>
        </div>

        {/* show table */}

      </div>

    </div>
  )
}

export default Main