import {useSelector,useDispatch} from "react-redux";
import {useEffect} from 'react'
import {addTask} from '../features/todolistSlice'

function Addtask() {
   const dispatch = useDispatch()
   const todolist = useSelector((state)=>state.todos.todolist);
  useEffect(() => {
    //update to get last id
  }, [dispatch])

    const handleAdd = (e)=>{
        (e).preventDefault();
       const newTask = {
          id: todolist.length +1,
          description : e.target.description.value,
          isDone : false
        }
        dispatch(addTask(newTask))
        e.target.description.value = "";
    }
  return (
    <div className="add-form">
        <form onSubmit={handleAdd}>
        <input type="text" name="description"></input>
        <input type="submit" value="ADD"></input>    
        </form>    
    </div>
  )
}

export default Addtask