import {createSlice} from '@reduxjs/toolkit';

import tasks from '../data/tasks';

const initialState = {
    todolist: tasks,
    filtered: []
}

const todolistSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask : (state,action)=>{
            state.todolist.unshift(action.payload);
        },
        filterTask : (state,action)=>{
            if(action.payload==='clear'){ state.filtered =[] } else {
                state.filtered = state.todolist.filter(function(obj) {
                    return obj['isDone'] === action.payload;
                });
            }
        },
        editTask : (state,action)=>{
            let objIndex = state.todolist.findIndex((obj => obj.id === action.payload.id));
            state.todolist[objIndex].description = action.payload.description
        },
    }
})

export default todolistSlice.reducer
export const {addTask, filterTask, editTask} = todolistSlice.actions