import React, {useState} from 'react';



const ToDoList = () =>{

    const [toDoList,setToDoList] = useState([])
    let addValue = ()=>{

        let cToDoList = [...toDoList]
        let data = document.getElementById("readValue").value
        cToDoList.push(data)
        setToDoList(cToDoList)
       
        
    }
    
    

    return (<div>
      <input type="text" id="readValue"/>
      <button onClick={() => addValue()}>COMFIRM</button>
      <hr/>

      {/* {toDoList.map((v)=> {
          return <p>{v}</p>
      })} */}

      {
          toDoList[0]+
          toDoList[1]

      }
      
    
    </div>)
}

export default ToDoList;