import Edittask from "./Edittask"
import {useState} from 'react'

function Task(props) {
  const [openedit,setOpenedit] = useState(false);
  const handleOpenInput = ()=>{
    setOpenedit(!openedit);
  }


  return (
    <>
    <div id={props.id} onClick={handleOpenInput}
    className={"task " + (props.isDone? 'done' : 'undone')} >
      {props.task}
    </div>
    {openedit && 
    <Edittask 
    id={props.id} 
    handleOpenInput={handleOpenInput}
    description={props.task}
    />}
    </>
  )
}

export default Task