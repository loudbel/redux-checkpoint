import {useDispatch} from "react-redux";
import {editTask} from '../features/todolistSlice'
import {useState} from 'react'

function Edittask(props) {
   const dispatch = useDispatch()

  const [input, setInput] = useState(props.description)
  
   const handleEdit = (e)=>{
    (e).preventDefault();
     const editData = {
          id: props.id,
          description : e.target.description.value,
        }
      dispatch(editTask(editData))
      props.handleOpenInput();
    }
  return (
    <>
    <div className="edit-form">
        <form onSubmit={handleEdit}>
        <input type="text" name="description" onChange={(e)=>setInput(e.target.value)} value={input}></input>
        </form>    
    </div>
    </>
  )
}

export default Edittask