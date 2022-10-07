import { configureStore } from '@reduxjs/toolkit';
import addtodoSlice from '../features/todolistSlice';

const store = configureStore({
    reducer : {
        todos : addtodoSlice
    }
})

export default store;