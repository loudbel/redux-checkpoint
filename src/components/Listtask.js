import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import Task from './Task';
import Addtask from './Addtask';
import {filterTask} from '../features/todolistSlice'

function Listtask() {
  const dispatch = useDispatch()
   const filtred = useSelector((state)=>state.todos.filtered);
    const todolist = useSelector((state)=>state.todos.todolist);

    const handleFilter = (bool)=>{
      dispatch(filterTask(bool));
      {console.log(filtred.length)}
    }

  return (
    <div className='tasks'>
     
    <h1>Listtask</h1>
    <div className='filter'>
        <button onClick={()=>handleFilter(true)}>SEE DONE</button>
        <button onClick={()=>handleFilter(false)}>SEE UN-DONE</button>
        <button onClick={()=>handleFilter('clear')}>CLEAR</button>
      </div>
      <Addtask />
      <p>TIPS : Click on task to edit!</p>
     {filtred.length > 0 &&  
    filtred.map((t,i)=>{
      return  <Task
        key={i}
        id={t.id} 
        task={t.description}
        isDone={t.isDone}
        />
    }) } 
    {filtred.length === 0 &&  
    todolist.map((t,i)=>{
      return  <Task
        key={i}
        id={t.id} 
        task={t.description}
        isDone={t.isDone}
        />
    })
    }
         
    </div>
  )
}

export default Listtask