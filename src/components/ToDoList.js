import React, { useState,useEffect } from "react";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  let addValue = () => {
    let cToDoList = [...toDoList];
    let data = document.getElementById("readValue").value;
    if (data !== ""){
      cToDoList.push(data);
      setToDoList(cToDoList);
    }  
  }
  var i = 1;

 setTimeout(() => {
   i+=1;
   console.log(i);
 }, 2000);

  

  const removeArr = ()=>{  
    let cToDoList=[...toDoList];
           cToDoList.splice(0,1)
            console.log(toDoList);
            setToDoList(cToDoList);

  
}


  return (
    <div>
      <input type="text" id="readValue" />
      <button onClick={() => addValue()}>COMFIRM</button>

      <hr/>



      <h2>
        {toDoList.map((v) => {
          return <div>{v}</div>;
        })}
      </h2>

     {/* <button onClick={() => removeFromTimeout()}>remove </button> */}

      
    </div>
  );

 
};

export default ToDoList;
